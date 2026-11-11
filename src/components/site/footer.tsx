import { Container } from "@/components/ui/drafting";
import { LanguageSwitcher } from "@/components/site/language-switcher";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/vi";

export function Footer({ t, locale }: { t: Dictionary; locale: Locale }) {
  const f = t.footer;
  const linkClass =
    "inline-flex min-h-10 items-center text-[14px] text-ink-3 transition-colors duration-[120ms] hover:text-ink md:min-h-8";

  return (
    <footer className="mt-20 border-t border-line pt-14 pb-10 md:mt-28">
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-12">
          <div className="col-span-2 md:col-span-4">
            <p className="font-display text-[28px] leading-none font-semibold tracking-[-0.04em] text-ink">kizai</p>
            <p className="mt-3 max-w-[18rem] text-[14px] text-ink-3">{f.tagline}</p>
          </div>

          <FooterCol title={f.cells.product} className="md:col-span-2">
            {t.modules.items.map((m) => (
              <li key={m.tab}>
                <a href="#modules" className={linkClass}>
                  {m.tab}
                </a>
              </li>
            ))}
          </FooterCol>

          <FooterCol title={f.cells.resources} className="md:col-span-2">
            {f.resources.map((l) => (
              <li key={l.label}>
                <a href={l.href} className={linkClass}>
                  {l.label}
                </a>
              </li>
            ))}
          </FooterCol>

          <FooterCol title={f.cells.legal} className="md:col-span-2">
            {f.legal.map((l) => (
              <li key={l.label}>
                <a href={l.href} className={linkClass}>
                  {l.label}
                </a>
              </li>
            ))}
          </FooterCol>

          <FooterCol title={f.cells.contact} className="md:col-span-2">
            <li className="py-1.5 text-[14px] text-ink-3">{f.company}</li>
            <li className="py-1.5 text-[14px] text-ink-3">{f.address}</li>
            <li className="py-1.5 text-[14px] text-ink-3">{f.email}</li>
            <li className="py-1.5 text-[14px] text-ink-3">{f.phone}</li>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col-reverse gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-ink-3">{f.copyright}</p>
          <LanguageSwitcher current={locale} label={t.a11y.language} />
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, className, children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <nav aria-label={title} className={className}>
      <p className="text-[14px] font-semibold text-ink">{title}</p>
      <ul className="mt-3">{children}</ul>
    </nav>
  );
}
