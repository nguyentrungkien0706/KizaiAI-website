import { Container, Section, SectionHeading } from "@/components/ui/drafting";
import { AskDemo } from "@/components/site/ask-demo";
import type { Dictionary } from "@/i18n/dictionaries/vi";

export function Platform({ t }: { t: Dictionary }) {
  const p = t.platform;
  return (
    <Section id="platform" aria-labelledby="platform-title" className="pt-0 md:pt-0 xl:pt-0">
      <Container>
        <SectionHeading id="platform-title" title={p.title} sub={p.sub} />

        {/* Bốn tầng nối tiếp nhau, nên được đánh số */}
        <ol className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {p.layers.map((layer, i) => (
            <li key={layer.name} className="flex flex-col">
              <div className="flex aspect-[4/3] flex-col justify-between rounded-xl bg-surface p-6">
                <span aria-hidden="true" className="font-display font-bold text-[56px] leading-none tracking-[-0.04em] text-ink-4">
                  {i + 1}
                </span>
                <ul className="flex flex-wrap gap-1.5">
                  {layer.tags.map((tag) => (
                    <li key={tag} className="rounded-full bg-white px-3 py-1 text-[13px] font-medium text-ink-2">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <h3 className="mt-5 text-[22px] leading-[1.25] font-medium tracking-[-0.015em]">
                <span className="sr-only">
                  {p.layerLabel} {i + 1}:{" "}
                </span>
                {layer.name}
              </h3>
              <p className="mt-1 text-[15px] font-medium text-ink-2">{layer.short}</p>
              <p className="mt-3 text-[15px] leading-[1.6] text-ink-3">{layer.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-20">
          <AskDemo t={p.ask} />
        </div>
      </Container>
    </Section>
  );
}
