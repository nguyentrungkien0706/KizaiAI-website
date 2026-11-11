"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge, Container, Section, SectionHeading } from "@/components/ui/drafting";
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
    <Section id="modules" aria-labelledby="modules-title">
      <Container>
        <SectionHeading id="modules-title" title={m.title} sub={m.sub} />

        <div className="mt-14 grid grid-cols-1 gap-8 rounded-xl border border-line p-4 md:p-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-12 lg:p-12">
          <div role="tablist" aria-label={m.listLabel} aria-orientation="vertical" className="flex flex-col pt-2">
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
                    "rounded-md py-2.5 text-left font-display text-[24px] leading-[1.2] tracking-[-0.02em] transition-colors duration-[120ms] md:text-[28px]",
                    "[:lang(ja)_&]:text-[22px] [:lang(ja)_&]:tracking-normal",
                    selected ? "text-ink" : "text-ink-3 hover:text-ink-2",
                  )}
                >
                  {item.tab}
                </button>
              );
            })}
          </div>

          <div
            id="module-panel"
            role="tabpanel"
            aria-labelledby={`module-tab-${active}`}
            tabIndex={0}
            className="rounded-lg bg-surface p-6 md:p-10"
          >
            <Badge className="bg-white">{current.who}</Badge>
            <h3 className="mt-5 text-[28px] leading-[1.15] font-normal tracking-[-0.025em] md:text-[36px]">{current.name}</h3>
            <p className="mt-3 max-w-[40rem] text-[17px] text-ink-3">{current.desc}</p>

            <ul className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
              {current.features.map((f) => (
                <li key={f.title} className="rounded-lg bg-white p-5">
                  <h4 className="text-[17px] font-semibold tracking-[-0.01em]">{f.title}</h4>
                  <p className="mt-1.5 text-[15px] text-ink-3">{f.text}</p>
                </li>
              ))}
            </ul>

            <a href="#contact" className={cn(buttonVariants({ variant: "primary" }), "mt-8")}>
              {m.cta}
              <ChevronRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
