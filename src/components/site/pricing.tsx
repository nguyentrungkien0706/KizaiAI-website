import { buttonVariants } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/drafting";
import type { Dictionary } from "@/i18n/dictionaries/vi";

/** Lộ trình hợp tác 5 bước, theo quy trình làm việc trên kizai.vn. */
export function Pricing({ t }: { t: Dictionary }) {
  const p = t.pricing;
  return (
    <Section id="pricing" aria-labelledby="pricing-title" className="bg-surface">
      <Container>
        <SectionHeading id="pricing-title" title={p.title} sub={p.sub} />

        <ol className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {p.steps.map((s, i) => (
            <li key={s.name} className="flex flex-col rounded-xl bg-white p-6">
              <p className="font-display font-bold text-[40px] leading-none tracking-[-0.03em] text-brand-hover">
                <span className="sr-only">{p.stepLabel} </span>
                {i + 1}
              </p>
              <h3 className="mt-6 text-[20px] leading-[1.25] font-medium tracking-[-0.015em]">{s.name}</h3>
              <p className="mt-2 text-[15px] text-ink-3">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 text-center">
          <a href="#contact" className={buttonVariants({ variant: "primary", size: "lg" })}>
            {p.cta}
          </a>
        </div>
      </Container>
    </Section>
  );
}
