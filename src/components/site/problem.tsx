import { Container, Placeholder, Section, SectionHeading, Sheet, isPlaceholder } from "@/components/ui/drafting";
import type { Dictionary } from "@/i18n/dictionaries/vi";

export function Problem({ t }: { t: Dictionary }) {
  const p = t.problem;
  return (
    <Section aria-labelledby="problem-title" className="border-t border-rule">
      <Container>
        <SectionHeading id="problem-title" title={p.title} sub={p.sub} />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
          <ul className="grid gap-x-10 sm:grid-cols-2">
            {p.items.map((item) => (
              <li key={item.title} className="border-t border-ink py-6">
                <h3 className="text-lg leading-[1.4] font-semibold md:text-xl">{item.title}</h3>
                <p className="mt-2 text-ink-2">{item.text}</p>
              </li>
            ))}
          </ul>

          <Sheet className="self-start p-6 md:p-8">
            <h3 className="text-xl font-semibold">{p.impactTitle}</h3>
            <p className="mt-1 text-small text-ink-3">{p.impactNote}</p>
            <dl className="mt-6 divide-y divide-rule border-y border-rule">
              {p.impact.map((m) => (
                <div key={m.label} className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-baseline gap-4 py-4">
                  <dt className="order-2 text-small text-ink-2">{m.label}</dt>
                  <dd className="order-1 m-0 text-2xl font-semibold tabular-nums">
                    {isPlaceholder(m.value) ? <Placeholder className="text-lg">{m.value}</Placeholder> : m.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Sheet>
        </div>
      </Container>
    </Section>
  );
}
