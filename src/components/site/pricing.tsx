import { buttonVariants } from "@/components/ui/button";
import { Container, Placeholder, Section, SectionHeading, isPlaceholder } from "@/components/ui/drafting";
import type { Dictionary } from "@/i18n/dictionaries/vi";
import { cn } from "@/lib/utils";

export function Pricing({ t }: { t: Dictionary }) {
  const p = t.pricing;
  const show = (v: string) => (isPlaceholder(v) ? <Placeholder>{v}</Placeholder> : v);

  return (
    <Section id="pricing" aria-labelledby="pricing-title" className="bg-surface">
      <Container>
        <SectionHeading id="pricing-title" title={p.title} sub={p.sub} />

        <ol className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {p.steps.map((s, i) => (
            <li key={s.name} className="flex flex-col rounded-xl bg-white p-7 md:p-8">
              <p className="text-[14px] font-medium text-ink-3">
                {p.stepLabel} {i + 1}
              </p>
              <h3 className="mt-3 text-[26px] leading-[1.2] font-normal tracking-[-0.02em]">{s.name}</h3>
              <p className="mt-3 flex-1 text-[15px] text-ink-3">{s.text}</p>
              <dl className="mt-8 space-y-2 border-t border-line pt-5 text-[15px]">
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-3">{p.priceLabel}</dt>
                  <dd className="m-0 font-semibold text-ink">{show(s.price)}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-3">{p.durationLabel}</dt>
                  <dd className="m-0 text-ink">{show(s.duration)}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>

        <div className="mt-10 text-center">
          <a href="#contact" className={cn(buttonVariants({ variant: "primary", size: "lg" }))}>
            {p.cta}
          </a>
        </div>
      </Container>
    </Section>
  );
}
