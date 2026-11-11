"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { moduleImages } from "@/lib/module-images";
import { buttonVariants } from "@/components/ui/button";
import { Badge, Container, Section, SectionHeading } from "@/components/ui/drafting";
import type { Dictionary } from "@/i18n/dictionaries/vi";
import type { Locale } from "@/i18n/config";
import { moduleSlugs } from "@/i18n/seo-content";
import { cn } from "@/lib/utils";

export function Modules({ t, locale, detailLabel }: { t: Dictionary; locale: Locale; detailLabel: string }) {
  const m = t.modules;
  const [active, setActive] = React.useState(0);
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

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
                  aria-controls={`module-panel-${i}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={cn(
                    "rounded-md py-2.5 text-left font-display text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] transition-colors duration-[120ms] md:text-[24px]",
                    "[:lang(ja)_&]:text-[22px] [:lang(ja)_&]:tracking-normal",
                    selected ? "text-ink" : "text-ink-3 hover:text-ink-2",
                  )}
                >
                  {item.tab}
                </button>
              );
            })}
          </div>

          {/* Dựng sẵn cả 5 panel vào HTML để Google và AI đọc được; panel không chọn được ẩn bằng thuộc tính hidden. */}
          {m.items.map((item, i) => (
            <div
              key={item.tab}
              id={`module-panel-${i}`}
              role="tabpanel"
              aria-labelledby={`module-tab-${i}`}
              hidden={i !== active}
              tabIndex={0}
              className="rounded-lg bg-surface p-6 md:p-10"
            >
              <div className="relative -mx-2 -mt-2 mb-8 aspect-[16/9] overflow-hidden rounded-lg bg-night md:-mx-4 md:-mt-4">
                <Image
                  src={moduleImages[i]}
                  alt={item.imageAlt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1280px) 760px, (min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
              <Badge className="bg-white">{item.who}</Badge>
              <h3 className="mt-5 text-[28px] leading-[1.15] font-bold tracking-[-0.025em] md:text-[36px]">{item.name}</h3>
              <p className="mt-3 max-w-[40rem] text-[17px] text-ink-3">{item.desc}</p>

              <ul className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
                {item.features.map((f) => (
                  <li key={f.title} className="rounded-lg bg-white p-5">
                    <h4 className="text-[17px] font-semibold tracking-[-0.01em]">{f.title}</h4>
                    <p className="mt-1.5 text-[15px] text-ink-3">{f.text}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className={buttonVariants({ variant: "primary" })}>
                  {m.cta}
                  <ChevronRight aria-hidden="true" />
                </a>
                <a href={`/${locale}/modules/${moduleSlugs[i]}`} className={buttonVariants({ variant: "light" })}>
                  {detailLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
