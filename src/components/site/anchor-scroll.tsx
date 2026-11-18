"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

/** Khoảng chừa cho thanh menu cố định (cao 64px) + 16px thở. */
const OFFSET = 80;

function targetTop(el: HTMLElement) {
  return Math.max(0, el.getBoundingClientRect().top + window.scrollY - OFFSET);
}

const FADE_MS = 160;
const sleep = (ms: number) => new Promise<void>((r) => window.setTimeout(r, ms));

/** Cho ảnh đang nằm trong màn hình tải ngay, chờ tối đa `max` ms để khi hiện ra không bị ô trắng rồi ảnh mới bật lên. */
async function imagesInView(max = 700) {
  const imgs = [...document.querySelectorAll<HTMLImageElement>("#main img, footer img")].filter((img) => {
    const r = img.getBoundingClientRect();
    return r.bottom > -200 && r.top < window.innerHeight + 200 && r.width > 0;
  });
  imgs.forEach((img) => (img.loading = "eager"));
  await Promise.race([Promise.all(imgs.map((img) => (img.complete ? null : img.decode().catch(() => null)))), sleep(max)]);
}

/** Làm mờ phần nội dung (thanh menu vẫn giữ nguyên) trong lúc đổi chỗ, để không thấy trang lướt vụt qua hay ảnh bật lên. */
const fade = {
  out: () => document.documentElement.setAttribute("data-nav-fade", ""),
  in: () => document.documentElement.removeAttribute("data-nav-fade"),
};

/**
 * Bấm menu (Giải pháp, Nền tảng, Khách hàng…) chuyển mượt và đưa đúng mục lên đầu trang.
 * - Cùng trang: cuộn mượt tới mục, rồi kiểm tra lại vị trí khi cuộn xong.
 * - Sang trang khác cùng ngôn ngữ (vd. trang SME → /vi#customers): chuyển ngay trong trình duyệt
 *   (không tải lại cả trang), trang đích đã được tải sẵn; hiện ra là đứng đúng mục, không nhảy.
 * - Mở link có sẵn #mục: đặt ngay đúng mục, căn lại một lần sau khi ảnh tải xong.
 */
export function AnchorScroll() {
  const router = useRouter();
  React.useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let userScrolled = false;
    const markUser = () => (userScrolled = true);

    const settle = (el: HTMLElement) => {
      // Kiểm tra vài lần: nếu lệch quá 4px thì chỉnh lại ngay (không mượt, để không giật hai lần).
      [250, 700, 1400].forEach((ms) =>
        window.setTimeout(() => {
          if (userScrolled) return;
          const want = targetTop(el);
          if (Math.abs(window.scrollY - want) > 4) window.scrollTo({ top: want, behavior: "instant" as ScrollBehavior });
        }, ms),
      );
    };

    const focus = (el: HTMLElement) => {
      // Đưa focus vào mục để người dùng bàn phím/đọc màn hình đi tiếp từ đó.
      if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
      el.focus({ preventScroll: true });
    };

    /** Đặt ngay tới mục (không cuộn), dùng khi mở trang có sẵn #mục hoặc bấm nút quay lại. */
    const go = (id: string) => {
      const el = document.getElementById(id);
      if (!el) return false;
      userScrolled = false;
      window.scrollTo({ top: targetTop(el), behavior: "instant" as ScrollBehavior });
      settle(el);
      focus(el);
      return true;
    };

    let busy = 0;
    /** Làm mờ, đặt tới mục (hoặc đầu trang), chờ ảnh ở đó sẵn sàng rồi hiện lại. */
    const jumpWithFade = async (el: HTMLElement | null, run = busy) => {
      window.scrollTo({ top: el ? targetTop(el) : 0, behavior: "instant" as ScrollBehavior });
      await imagesInView();
      if (run !== busy) return;
      if (el) window.scrollTo({ top: targetTop(el), behavior: "instant" as ScrollBehavior });
      fade.in();
      if (el) {
        settle(el);
        focus(el);
      }
    };

    /** Cùng trang: gần thì cuộn mượt; xa thì mờ đi, đặt tới mục rồi hiện lại (không lướt vụt qua cả trang). */
    const goSamePage = async (id: string) => {
      const el = document.getElementById(id);
      if (!el) return;
      userScrolled = false;
      const run = ++busy;
      const distance = Math.abs(targetTop(el) - window.scrollY);
      if (reduce || distance <= window.innerHeight * 1.2) {
        window.scrollTo({ top: targetTop(el), behavior: reduce ? ("instant" as ScrollBehavior) : "smooth" });
        window.setTimeout(() => settle(el), 700);
        focus(el);
        return;
      }
      fade.out();
      await sleep(FADE_MS);
      if (run === busy) await jumpWithFade(el, run);
    };

    /** Sang trang khác: mờ đi, chuyển trang (không tải lại), đặt đúng chỗ, chờ ảnh rồi hiện lại. */
    const goOtherPage = async (path: string, id: string, href: string) => {
      userScrolled = false;
      const run = ++busy;
      if (!reduce) {
        // Mờ hẳn trang cũ trước rồi mới đổi trang, để không bị nháy trắng giữa hai trang.
        fade.out();
        await sleep(FADE_MS);
        if (run !== busy) return;
      }
      router.push(href, { scroll: false });
      const started = performance.now();
      const tick = async () => {
        if (run !== busy) return;
        const ready = window.location.pathname === path && (!id || document.getElementById(id));
        if (ready) await jumpWithFade(id ? document.getElementById(id) : null, run);
        else if (performance.now() - started < 5000) requestAnimationFrame(tick);
        else fade.in();
      };
      requestAnimationFrame(tick);
    };

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || (a.target && a.target !== "_self") || a.hasAttribute("download")) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      const id = decodeURIComponent(url.hash.slice(1));

      // Cùng trang: cuộn mượt tới mục.
      if (url.pathname === window.location.pathname) {
        if (!id || !document.getElementById(id)) return;
        e.preventDefault();
        if (window.location.hash !== url.hash) history.pushState(null, "", url.hash);
        void goSamePage(id);
        return;
      }

      // Sang trang khác cùng ngôn ngữ (vd. trang SME → Khách hàng ở trang giải pháp):
      // chuyển ngay trong trình duyệt, không tải lại cả trang và toàn bộ ảnh nên không bị trắng/giật.
      const locale = window.location.pathname.split("/")[1];
      if (!locale || url.pathname.split("/")[1] !== locale) return; // đổi ngôn ngữ: để tải lại bình thường
      e.preventDefault();
      void goOtherPage(url.pathname, id, url.pathname + url.search + url.hash);
    };

    // Mở trang có sẵn #mục (từ trang khác bấm sang, hoặc mở link chia sẻ).
    const fromHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (id) go(id);
    };
    // Đặt ngay đúng mục khi trang vừa hiện (không đợi tải hết ảnh), rồi căn lại một lần sau khi ảnh tải xong.
    const onLoad = () => {
      const el = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
      if (el) settle(el);
    };
    if (window.location.hash) {
      fromHash();
      if (document.readyState !== "complete") window.addEventListener("load", onLoad, { once: true });
    }

    // Tải sẵn các trang trong menu để bấm là chuyển ngay.
    const idle = (window as Window & { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1500));
    idle(() => {
      const here = window.location.pathname;
      const seen = new Set<string>();
      document.querySelectorAll<HTMLAnchorElement>("header a[href^='/']").forEach((a) => {
        const path = new URL(a.href).pathname;
        if (path !== here && path.split("/")[1] === here.split("/")[1] && !seen.has(path)) {
          seen.add(path);
          router.prefetch(path);
        }
      });
    });

    document.addEventListener("click", onClick);
    window.addEventListener("popstate", fromHash);
    window.addEventListener("wheel", markUser, { passive: true });
    window.addEventListener("touchmove", markUser, { passive: true });
    window.addEventListener("keydown", markUser);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("popstate", fromHash);
      window.removeEventListener("load", onLoad);
      window.removeEventListener("wheel", markUser);
      window.removeEventListener("touchmove", markUser);
      window.removeEventListener("keydown", markUser);
    };
  }, [router]);
  return null;
}
