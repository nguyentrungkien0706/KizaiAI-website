import { Container, Placeholder, Section, SectionHeading, isPlaceholder } from "@/components/ui/drafting";
import type { Dictionary } from "@/i18n/dictionaries/vi";

export function Problem({ t }: { t: Dictionary }) {
  const p = t.problem;
  return (
    <Section aria-labelledby="problem-title" className="pt-8 md:pt-12 xl:pt-16">
      <Container>
        <SectionHeading id="problem-title" title={p.title} sub={p.sub} />

        <ul className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          {p.items.map((item) => (
            <li key={item.title} className="rounded-xl bg-surface p-7 md:p-9">
              <h3 className="text-[22px] leading-[1.25] font-medium tracking-[-0.015em] md:text-[24px]">{item.title}</h3>
              <p className="mt-3 max-w-[34rem] text-[15px] leading-[1.6] text-ink-3">{item.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-4 rounded-xl border border-line p-7 md:p-9">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-[22px] font-medium tracking-[-0.015em]">{p.impactTitle}</h3>
            <p className="text-[14px] text-ink-3">{p.impactNote}</p>
          </div>
          <dl className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {p.impact.map((m) => (
              <div key={m.label} className="flex flex-col gap-3">
                <dt className="order-2 text-[15px] leading-[1.5] text-ink-3">{m.label}</dt>
                <dd className="order-1 m-0 font-display text-[40px] leading-none tracking-[-0.03em] text-ink">
                  {isPlaceholder(m.value) ? <Placeholder className="text-[28px] leading-[1.3]">{m.value}</Placeholder> : m.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}
