"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

/** Khoảng chừa cho thanh menu cố định (cao 64px) + 16px thở. */
const OFFSET = 80;

function targetTop(el: HTMLElement) {
  return Math.max(0, el.getBoundingClientRect().top + window.scrollY - OFFSET);
}

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

    const go = (id: string, smooth: boolean) => {
      const el = document.getElementById(id);
      if (!el) return false;
      userScrolled = false;
      window.scrollTo({ top: targetTop(el), behavior: smooth && !reduce ? "smooth" : ("instant" as ScrollBehavior) });
      const done = () => {
        window.removeEventListener("scrollend", done);
        settle(el);
      };
      if ("onscrollend" in window) window.addEventListener("scrollend", done, { once: true });
      window.setTimeout(done, 1200);
      // Đưa focus vào mục để người dùng bàn phím/đọc màn hình đi tiếp từ đó.
      if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
      el.focus({ preventScroll: true });
      return true;
    };

    /** Chờ trang mới (chuyển trang không tải lại) hiện ra rồi đặt ngay đúng mục, không cuộn từ đầu trang xuống. */
    const goAfterRoute = (path: string, id: string) => {
      const until = performance.now() + 4000;
      const tick = () => {
        const el = window.location.pathname === path ? document.getElementById(id) : null;
        if (el) go(id, false);
        else if (performance.now() < until) requestAnimationFrame(tick);
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
        go(id, true);
        return;
      }

      // Sang trang khác cùng ngôn ngữ (vd. trang SME → Khách hàng ở trang giải pháp):
      // chuyển ngay trong trình duyệt, không tải lại cả trang và toàn bộ ảnh nên không bị trắng/giật.
      const locale = window.location.pathname.split("/")[1];
      if (!locale || url.pathname.split("/")[1] !== locale) return; // đổi ngôn ngữ: để tải lại bình thường
      e.preventDefault();
      if (id) {
        router.push(url.pathname + url.hash, { scroll: false });
        goAfterRoute(url.pathname, id);
      } else {
        router.push(url.pathname + url.search);
      }
    };

    // Mở trang có sẵn #mục (từ trang khác bấm sang, hoặc mở link chia sẻ).
    const fromHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (id) go(id, false);
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
