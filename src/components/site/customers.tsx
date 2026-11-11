import { Container, Section, SectionHeading, Sheet } from "@/components/ui/drafting";
import type { Dictionary } from "@/i18n/dictionaries/vi";

/** Bằng chứng xã hội: toàn bộ là placeholder cho tới khi có dữ liệu thật. */
export function Customers({ t }: { t: Dictionary }) {
  const c = t.customers;
  return (
    <Section id="customers" aria-labelledby="customers-title" className="border-t border-rule">
      <Container>
        <SectionHeading id="customers-title" title={c.title} />

        <ul aria-label={c.logosLabel} className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {c.logos.map((logo) => (
            <li
              key={logo}
              className="flex h-20 items-center justify-center rounded-control border border-dashed border-rule-strong px-3 text-center text-caption text-ink-3"
            >
              {logo}
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {c.testimonials.map((q, i) => (
            <Sheet key={i} marks={false} className="border-dashed border-rule-strong p-6 md:p-8">
              <figure className="m-0">
                <blockquote className="m-0 text-xl leading-[1.5] text-ink-3">{q.quote}</blockquote>
                <figcaption className="mt-6 text-small">
                  <span className="block font-semibold text-ink-3">{q.name}</span>
                  <span className="block text-ink-3">{q.role}</span>
                </figcaption>
              </figure>
            </Sheet>
          ))}
        </div>
      </Container>
    </Section>
  );
}
