"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/site/language-switcher";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/vi";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type NavbarProps = { locale: Locale; t: Dictionary };

export function Navbar({ locale, t }: NavbarProps) {
  const [open, setOpen] = React.useState(false);
  const active = useActiveSection(t.nav.links.map((l) => l.href.slice(1)));
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);
  const panelId = "site-menu";

  // Đóng menu bằng Escape, trả focus về nút menu.
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onResize = () => mq.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper">
      <div className="mx-auto flex h-14 max-w-[1304px] items-center gap-6 px-4 md:px-8 lg:h-16">
        <a
          href="#main"
          aria-label={t.a11y.home}
          className="-mx-1 rounded-control px-1 text-[22px] leading-none font-semibold tracking-[-0.02em] text-ink"
        >
          {/* [LOGO KIZAI]: thay bằng file logo chính thức khi có */}
          Kizai
        </a>

        <nav aria-label={t.a11y.mainNav} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {t.nav.links.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative inline-flex h-11 items-center rounded-control px-3 text-[15px] font-medium text-ink-2 transition-colors duration-[120ms] hover:text-redline",
                      "after:absolute after:inset-x-3 after:bottom-1.5 after:h-0.5 after:bg-ink after:opacity-0",
                      isActive && "text-ink after:opacity-100",
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:gap-4">
          <div className="hidden lg:block">
            <LanguageSwitcher current={locale} label={t.a11y.language} />
          </div>
          <a
            href={site.loginUrl}
            className="hidden h-11 items-center rounded-control px-2 text-[15px] font-medium text-ink underline decoration-rule-strong underline-offset-4 transition-colors duration-[120ms] hover:text-redline hover:decoration-redline lg:inline-flex"
          >
            {t.nav.login}
          </a>
          <a
            href="#contact"
            className={cn(buttonVariants({ variant: "primary", size: "md" }), "px-4 text-[15px] lg:px-5")}
          >
            {t.nav.demo}
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-control text-ink hover:bg-paper-sunken lg:hidden"
          >
            {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Menu mobile/tablet */}
      <div
        id={panelId}
        hidden={!open}
        className="border-t border-rule bg-paper-raised lg:hidden"
      >
        <nav aria-label={t.a11y.mainNav} className="mx-auto max-w-[1304px] px-4 pb-6 md:px-8">
          <ul className="divide-y divide-rule">
            {t.nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === link.href.slice(1) ? "true" : undefined}
                  className="flex h-14 items-center text-lg font-medium text-ink hover:text-redline aria-[current=true]:underline aria-[current=true]:decoration-2 aria-[current=true]:underline-offset-8"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-6">
            <LanguageSwitcher current={locale} label={t.a11y.language} />
            <a
              href={site.loginUrl}
              className="inline-flex h-11 items-center text-base font-medium text-ink underline decoration-rule-strong underline-offset-4 hover:text-redline hover:decoration-redline"
            >
              {t.nav.login}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

/** Theo dõi section đang xem để gạch chân link tương ứng. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = React.useState<string | null>(null);
  const key = ids.join(",");

  React.useEffect(() => {
    const elements = key
      .split(",")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-72px 0px -60% 0px" },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);

  return active;
}
