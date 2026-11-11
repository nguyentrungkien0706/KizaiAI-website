import Image from "next/image";
import { Container } from "@/components/ui/drafting";
import logo from "@/assets/brand/kizai-logo.webp";
import { LanguageSwitcher } from "@/components/site/language-switcher";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/vi";
import { moduleSlugs } from "@/i18n/seo-content";

export function Footer({ t, locale, path = "" }: { t: Dictionary; locale: Locale; path?: string }) {
  const f = t.footer;
  const linkClass =
    "inline-flex min-h-10 items-center text-[14px] text-ink-3 transition-colors duration-[120ms] hover:text-ink md:min-h-8";

  return (
    <footer className="mt-20 border-t border-line pt-14 pb-10 md:mt-28">
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-12">
          <div className="col-span-2 md:col-span-4">
            <Image src={logo} alt="Kizai Solution" sizes="160px" className="h-11 w-auto" />
            <p className="mt-4 max-w-[20rem] text-[14px] text-ink-3">{f.tagline}</p>
            <ul className="mt-4 flex gap-4">
              {f.social.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener" className={linkClass}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <FooterCol title={f.cells.product} className="md:col-span-2">
            {t.modules.items.map((m, i) => (
              <li key={m.tab}>
                <a href={`/${locale}/modules/${moduleSlugs[i]}`} className={linkClass}>
                  {m.tab}
                </a>
              </li>
            ))}
          </FooterCol>

          <FooterCol title={f.cells.resources} className="md:col-span-2">
            {f.resources.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener" className={linkClass}>
                  {l.label}
                </a>
              </li>
            ))}
          </FooterCol>

          <FooterCol title={f.cells.legal} className="md:col-span-2">
            {f.legal.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener" className={linkClass}>
                  {l.label}
                </a>
              </li>
            ))}
          </FooterCol>

          <FooterCol title={f.cells.contact} className="md:col-span-2">
            <li className="py-1.5 text-[14px] text-ink-3">{f.company}</li>
            <li className="py-1.5 text-[14px] text-ink-3">{f.address}</li>
            <li>
              <a href={`mailto:${f.email}`} className={linkClass}>
                {f.email}
              </a>
            </li>
            <li>
              <a href={`tel:${f.phone.replace(/[^+\d]/g, "")}`} className={linkClass}>
                {f.phone}
              </a>
            </li>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col-reverse gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-ink-3">{f.copyright}</p>
          <LanguageSwitcher current={locale} path={path} label={t.a11y.language} />
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
