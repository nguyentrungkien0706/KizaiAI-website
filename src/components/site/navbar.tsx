"use client";

import * as React from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from "@/assets/brand/kizai-logo.webp";
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
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-sm supports-[backdrop-filter]:bg-white/85">
      <div className="mx-auto flex h-16 max-w-[1328px] items-center gap-8 px-4 md:px-6">
        <a
          href="#main"
          aria-label={t.a11y.home}
          className="-mx-1 inline-flex shrink-0 items-center rounded-sm px-1"
        >
          <Image src={logo} alt="Kizai Solution" priority className="h-9 w-auto" sizes="130px" />
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
                      "inline-flex h-10 items-center rounded-md px-3 text-[14px] font-medium text-ink transition-colors duration-[120ms] hover:bg-surface",
                      isActive && "bg-surface",
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <LanguageSwitcher current={locale} label={t.a11y.language} className="mr-2 hidden lg:flex" />
          {site.loginUrl ? (
            <a href={site.loginUrl} className={cn(buttonVariants({ variant: "secondary" }), "hidden h-10 text-[14px] lg:inline-flex")}>
              {t.nav.login}
            </a>
          ) : null}
          <a href="#contact" className={cn(buttonVariants({ variant: "primary" }), "h-10 text-[14px]")}>
            {t.nav.demo}
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-md text-ink hover:bg-surface lg:hidden"
          >
            {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Menu mobile/tablet */}
      <div id={panelId} hidden={!open} className="border-t border-line bg-white lg:hidden">
        <nav aria-label={t.a11y.mainNav} className="mx-auto max-w-[1328px] px-4 pt-2 pb-6 md:px-6">
          <ul>
            {t.nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === link.href.slice(1) ? "true" : undefined}
                  className="flex h-14 items-center font-display text-[22px] font-semibold tracking-[-0.02em] text-ink aria-[current=true]:text-ink-3"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-line pt-6">
            <LanguageSwitcher current={locale} label={t.a11y.language} />
            {site.loginUrl ? (
              <a href={site.loginUrl} className={cn(buttonVariants({ variant: "secondary" }), "ml-auto")}>
                {t.nav.login}
              </a>
            ) : null}
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
