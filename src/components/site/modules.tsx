"use client";

import * as React from "react";
import { buttonVariants } from "@/components/ui/button";
import { Badge, Container, Section, SectionHeading, Sheet } from "@/components/ui/drafting";
import type { Dictionary } from "@/i18n/dictionaries/vi";
import { cn } from "@/lib/utils";

export function Modules({ t }: { t: Dictionary }) {
  const m = t.modules;
  const [active, setActive] = React.useState(0);
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
  const current = m.items[active];

  function onKeyDown(e: React.KeyboardEvent, index: number) {
    const last = m.items.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = index === last ? 0 : index + 1;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <Section id="modules" aria-labelledby="modules-title" className="border-t border-rule">
      <Container>
        <SectionHeading id="modules-title" title={m.title} sub={m.sub} />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-10">
          <div
            role="tablist"
            aria-label={m.listLabel}
            aria-orientation="vertical"
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 md:-mx-8 md:px-8 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:border-t lg:border-rule lg:p-0"
          >
            {m.items.map((item, i) => {
              const selected = i === active;
              return (
                <button
                  key={item.tab}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`module-tab-${i}`}
                  aria-selected={selected}
                  aria-controls="module-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={cn(
                    "group flex min-h-11 shrink-0 items-center gap-3 rounded-control border px-4 text-left text-[15px] font-medium whitespace-nowrap transition-colors duration-[120ms]",
                    "lg:min-h-16 lg:rounded-none lg:border-0 lg:border-b lg:border-rule lg:px-0 lg:text-lg lg:whitespace-normal",
                    selected
                      ? "border-ink bg-ink text-paper lg:bg-transparent lg:text-ink"
                      : "border-rule-strong text-ink-2 hover:border-ink hover:text-ink lg:hover:text-redline",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "hidden h-full w-0.5 self-stretch lg:block",
                      selected ? "bg-redline" : "bg-transparent",
                    )}
                  />
                  <span className="lg:py-4">{item.tab}</span>
                </button>
              );
            })}
          </div>

          <Sheet
            id="module-panel"
            role="tabpanel"
            aria-labelledby={`module-tab-${active}`}
            tabIndex={0}
            className="p-6 md:p-10"
          >
            <Badge>{current.who}</Badge>
            <h3 className="mt-4 text-[26px] leading-[1.25] font-semibold md:text-[30px]">{current.name}</h3>
            <p className="mt-3 max-w-[60ch] text-lg text-ink-2">{current.desc}</p>

            <ul className="mt-8 grid gap-x-8 md:grid-cols-2">
              {current.features.map((f) => (
                <li key={f.title} className="border-t border-rule py-5">
                  <h4 className="text-lg font-semibold">{f.title}</h4>
                  <p className="mt-1.5 text-ink-2">{f.text}</p>
                </li>
              ))}
            </ul>

            <a href="#contact" className={cn(buttonVariants({ variant: "secondary" }), "mt-6")}>
              {m.cta}
            </a>
          </Sheet>
        </div>
      </Container>
    </Section>
  );
}
