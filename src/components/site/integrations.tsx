import { Container, Section, SectionHeading } from "@/components/ui/drafting";
import type { Dictionary } from "@/i18n/dictionaries/vi";

export function Integrations({ t }: { t: Dictionary }) {
  const it = t.integrations;
  return (
    <Section id="integrations" aria-labelledby="integrations-title" className="pt-0 md:pt-0 xl:pt-0">
      <Container>
        <SectionHeading id="integrations-title" title={it.title} sub={it.sub} />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {it.groups.map((g) => (
            <div key={g.group} className="rounded-xl bg-surface p-7">
              <h3 className="text-[15px] font-semibold tracking-normal text-ink-3">{g.group}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li key={item} className="rounded-md bg-white px-3 py-1.5 text-[15px] font-medium text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="sr-only">{it.securityTitle}</h3>
        <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          {it.security.map((s) => (
            <li key={s.title} className="rounded-xl border border-line p-7">
              <h4 className="text-[20px] font-medium tracking-[-0.015em]">{s.title}</h4>
              <p className="mt-2 text-[15px] text-ink-3">{s.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
