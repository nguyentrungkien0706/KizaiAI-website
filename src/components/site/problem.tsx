import { Container, Section, SectionHeading } from "@/components/ui/drafting";
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

      </Container>
    </Section>
  );
}
