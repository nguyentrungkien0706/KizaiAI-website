import { Container } from "@/components/ui/drafting";
import { LanguageSwitcher } from "@/components/site/language-switcher";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/vi";
import { cn } from "@/lib/utils";

/** Footer dạng khung tên bản vẽ. */
export function Footer({ t, locale }: { t: Dictionary; locale: Locale }) {
  const f = t.footer;
  const linkClass =
    "inline-flex min-h-11 items-center text-small text-ink-2 underline decoration-transparent underline-offset-4 hover:text-redline hover:decoration-redline md:min-h-8";

  return (
    <footer className="pb-10">
      <Container>
        <div className="grid border-[1.5px] border-ink md:grid-cols-12 md:border-r-0 md:border-b-0">
          <Cell className="md:col-span-4 md:row-span-2">
            <p className="text-[28px] leading-none font-semibold tracking-[-0.02em]">Kizai</p>
            <p className="mt-3 text-small text-ink-2">{f.tagline}</p>
            <p className="mt-6 text-small font-medium">{f.company}</p>
          </Cell>

          <Cell title={f.cells.contact} className="md:col-span-4">
            <ul className="space-y-1 text-small text-ink-3">
              <li>{f.address}</li>
              <li>{f.email}</li>
              <li>{f.phone}</li>
            </ul>
          </Cell>

          <Cell title={f.cells.product} className="md:col-span-4">
            <ul>
              {t.modules.items.map((m) => (
                <li key={m.tab}>
                  <a href="#modules" className={linkClass}>
                    {m.tab}
                  </a>
                </li>
              ))}
            </ul>
          </Cell>

          <Cell title={f.cells.resources} className="md:col-span-4">
            <nav aria-label={t.a11y.footerNav}>
              <ul>
                {f.resources.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className={linkClass}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Cell>

          <Cell title={f.cells.legal} className="md:col-span-4">
            <ul>
              {f.legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={linkClass}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </Cell>

          <Cell title={f.cells.language} className="md:col-span-4">
            <LanguageSwitcher current={locale} label={t.a11y.language} />
          </Cell>
          <Cell title={f.cells.revision} className="md:col-span-2">
            <p className="text-small tabular-nums">2026-11</p>
          </Cell>
          <Cell title={f.cells.scale} className="md:col-span-2">
            <p className="text-small tabular-nums">1:1</p>
          </Cell>
          <Cell className="md:col-span-4">
            <p className="text-small text-ink-2">{f.copyright}</p>
          </Cell>
        </div>
      </Container>
    </footer>
  );
}

function Cell({
  title,
  className,
  children,
}: {
  title?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("border-b border-ink p-5 last:border-b-0 md:border-r md:border-b md:p-6", className)}>
      {title ? <p className="mb-2 text-caption font-medium text-ink">{title}</p> : null}
      {children}
    </div>
  );
}
