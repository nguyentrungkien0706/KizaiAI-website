"use client";

import * as React from "react";

/** Khoảng chừa cho thanh menu cố định (cao 64px) + 16px thở. */
const OFFSET = 80;

function targetTop(el: HTMLElement) {
  return Math.max(0, el.getBoundingClientRect().top + window.scrollY - OFFSET);
}

/**
 * Bấm menu (Giải pháp, Nền tảng, Liên hệ…) luôn đưa đúng mục lên đầu trang.
 * - Cùng trang: tự cuộn mượt tới mục, rồi kiểm tra lại vị trí khi cuộn xong
 *   (ảnh tải muộn có thể làm trang dài ra giữa chừng) và chỉnh cho khớp.
 * - Từ trang khác sang (vd. trang SME → /vi#solutions, đầu trang giải pháp): sau khi trang và ảnh tải xong,
 *   căn lại đúng mục vì trình duyệt nhảy tới mục quá sớm, lúc bố cục chưa ổn định.
 */
export function AnchorScroll() {
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

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href*='#']") as HTMLAnchorElement | null;
      if (!a || a.target === "_blank") return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) return;
      const id = decodeURIComponent(url.hash.slice(1));
      if (!document.getElementById(id)) return;
      e.preventDefault();
      if (window.location.hash !== url.hash) history.pushState(null, "", url.hash);
      go(id, true);
    };

    // Mở trang có sẵn #mục (từ trang khác bấm sang, hoặc mở link chia sẻ).
    const fromHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (id) go(id, false);
    };
    const onLoad = () => fromHash();
    if (window.location.hash) {
      if (document.readyState === "complete") fromHash();
      else window.addEventListener("load", onLoad, { once: true });
    }

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
  }, []);
  return null;
}
