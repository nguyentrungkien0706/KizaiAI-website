import { Plus } from "lucide-react";
import { Container, Section, SectionHeading } from "@/components/ui/drafting";
import type { Dictionary } from "@/i18n/dictionaries/vi";

export function Faq({ t }: { t: Dictionary }) {
  const f = t.faq;
  return (
    <Section id="faq" aria-labelledby="faq-title" className="border-t border-rule">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
        <SectionHeading id="faq-title" title={f.title} />
        <div className="border-t border-ink">
          {f.items.map((item) => (
            <details key={item.q} className="group border-b border-rule">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg font-semibold hover:text-redline [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <Plus
                  aria-hidden="true"
                  className="size-5 shrink-0 transition-transform duration-[200ms] ease-standard group-open:rotate-45"
                />
              </summary>
              <p className="max-w-[68ch] pb-6 text-ink-2">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
