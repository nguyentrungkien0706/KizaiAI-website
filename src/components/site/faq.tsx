import { Plus } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui/drafting";
import type { Dictionary } from "@/i18n/dictionaries/vi";

export function Faq({ t }: { t: Dictionary }) {
  const f = t.faq;
  return (
    <Section id="faq" aria-labelledby="faq-title">
      <Container className="max-w-[880px]">
        <SectionHeading id="faq-title" title={f.title} />
        <div className="mt-12 border-t border-line">
          {f.items.map((item) => (
            <details key={item.q} className="group border-b border-line">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-[19px] font-medium tracking-[-0.01em] text-ink [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-surface-2 transition-colors group-hover:bg-surface-3">
                  <Plus
                    aria-hidden="true"
                    className="size-4 transition-transform duration-[200ms] ease-standard group-open:rotate-45"
                  />
                </span>
              </summary>
              <p className="max-w-[44rem] pb-6 text-[16px] text-ink-3">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
