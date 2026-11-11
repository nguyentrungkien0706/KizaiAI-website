import { Container, Section } from "@/components/ui/drafting";
import type { Dictionary } from "@/i18n/dictionaries/vi";

/** Lời nhận xét khách hàng: placeholder cho tới khi có dữ liệu thật. */
export function Customers({ t }: { t: Dictionary }) {
  const c = t.customers;
  return (
    <Section id="customers" aria-label={c.logosLabel} className="pt-0 md:pt-0 xl:pt-0">
      <Container className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {c.testimonials.map((q, i) => (
          <figure key={i} className="m-0 flex flex-col justify-between rounded-xl bg-surface p-8 md:min-h-72 md:p-10">
            <blockquote className="m-0 font-display text-[26px] leading-[1.25] tracking-[-0.02em] text-ink-3 md:text-[30px]">
              {q.quote}
            </blockquote>
            <figcaption className="mt-8 text-[15px] text-ink-3">
              <span className="block font-semibold">{q.name}</span>
              <span className="block">{q.role}</span>
            </figcaption>
          </figure>
        ))}
      </Container>
    </Section>
  );
}
