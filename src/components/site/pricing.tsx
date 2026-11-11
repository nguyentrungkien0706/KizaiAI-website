import { buttonVariants } from "@/components/ui/button";
import { Container, Placeholder, Section, SectionHeading, Sheet, isPlaceholder } from "@/components/ui/drafting";
import type { Dictionary } from "@/i18n/dictionaries/vi";
import { cn } from "@/lib/utils";

export function Pricing({ t }: { t: Dictionary }) {
  const p = t.pricing;
  const show = (v: string) => (isPlaceholder(v) ? <Placeholder>{v}</Placeholder> : v);

  return (
    <Section id="pricing" aria-labelledby="pricing-title" className="border-t border-rule">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading id="pricing-title" title={p.title} sub={p.sub} />
          <a href="#contact" className={cn(buttonVariants({ variant: "outline" }), "self-start md:self-auto")}>
            {p.cta}
          </a>
        </div>

        {/* Ba bước nối tiếp, trình bày như một tờ có ba cột tiến trình */}
        <Sheet className="mt-12">
          <ol className="grid divide-y divide-rule md:grid-cols-3 md:divide-x md:divide-y-0">
            {p.steps.map((s, i) => (
              <li key={s.name} className="flex flex-col p-6 md:p-8">
                <p className="text-caption font-medium text-ink-3 tabular-nums">
                  {p.stepLabel} {i + 1}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{s.name}</h3>
                <p className="mt-2 flex-1 text-ink-2">{s.text}</p>
                <dl className="mt-6 grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-2 border-t border-rule pt-4 text-small">
                  <dt className="text-ink-3">{p.priceLabel}</dt>
                  <dd className="m-0 font-semibold">{show(s.price)}</dd>
                  <dt className="text-ink-3">{p.durationLabel}</dt>
                  <dd className="m-0">{show(s.duration)}</dd>
                </dl>
              </li>
            ))}
          </ol>
        </Sheet>
      </Container>
    </Section>
  );
}
