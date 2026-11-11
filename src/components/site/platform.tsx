import { Container, Section, SectionHeading } from "@/components/ui/drafting";
import { AskDemo } from "@/components/site/ask-demo";
import type { Dictionary } from "@/i18n/dictionaries/vi";

export function Platform({ t }: { t: Dictionary }) {
  const p = t.platform;
  return (
    <Section id="platform" aria-labelledby="platform-title" className="border-t border-rule">
      <Container>
        <SectionHeading id="platform-title" title={p.title} sub={p.sub} />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:gap-16">
          {/* Bốn tầng: thật sự là một trình tự, nên được đánh số */}
          <ol className="relative">
            {p.layers.map((layer, i) => (
              <li key={layer.name} className="relative grid grid-cols-[3rem_minmax(0,1fr)] gap-x-5 pb-10 last:pb-0">
                {i < p.layers.length - 1 ? (
                  <span aria-hidden="true" className="absolute top-12 bottom-0 left-6 w-px border-l border-dashed border-rule-strong" />
                ) : null}
                <span
                  aria-hidden="true"
                  className="relative z-10 flex size-12 items-center justify-center rounded-control border-[1.5px] border-ink bg-paper-raised text-lg font-semibold tabular-nums"
                >
                  {i + 1}
                </span>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold">
                    <span className="sr-only">
                      {p.layerLabel} {i + 1}:{" "}
                    </span>
                    {layer.name}
                  </h3>
                  <p className="mt-0.5 font-medium text-ink-2">{layer.short}</p>
                  <p className="mt-3 max-w-[60ch] text-ink-2">{layer.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {layer.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-control border border-rule bg-paper-raised px-2 py-0.5 text-caption leading-[1.45] text-ink-2"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <AskDemo t={p.ask} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
