"use client";

import * as React from "react";
import { ArrowUp } from "lucide-react";
import { Badge } from "@/components/ui/drafting";
import type { Dictionary } from "@/i18n/dictionaries/vi";
import { cn } from "@/lib/utils";

type AskCopy = Dictionary["platform"]["ask"];

/** Khối "Thử hỏi Kizai": câu trả lời mẫu, không gọi AI thật. */
export function AskDemo({ t }: { t: AskCopy }) {
  const [selected, setSelected] = React.useState<number | null>(null);
  const [shown, setShown] = React.useState<number | null>(null);
  const [loading, setLoading] = React.useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  function ask(index: number) {
    if (timer.current) clearTimeout(timer.current);
    setSelected(index);
    setLoading(true);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    timer.current = setTimeout(
      () => {
        setShown(index);
        setLoading(false);
      },
      reduce ? 0 : 650,
    );
  }

  const answer = shown !== null ? t.answers[shown] : null;

  return (
    <div className="on-night grid grid-cols-1 gap-8 overflow-hidden rounded-xl bg-night p-6 text-on-night-2 md:p-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-12 xl:p-14">
      <div>
        <h3 className="text-[30px] leading-[1.15] font-normal tracking-[-0.025em] text-white md:text-[40px] [:lang(ja)_&]:text-[28px]">
          {t.title}
        </h3>

        <p id="ask-suggestions" className="mt-8 text-[14px] font-medium">
          {t.suggestions}
        </p>
        <ul aria-labelledby="ask-suggestions" className="mt-3 flex flex-wrap gap-2">
          {t.chips.map((chip, i) => (
            <li key={chip}>
              <button
                type="button"
                aria-pressed={selected === i}
                onClick={() => ask(i)}
                className={cn(
                  "min-h-11 rounded-full px-4 text-[15px] font-medium transition-colors duration-[120ms]",
                  selected === i ? "bg-white text-ink" : "bg-white/10 text-white hover:bg-white/20",
                )}
              >
                {chip}
              </button>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-[13px]">{t.note}</p>
      </div>

      <div className="flex min-h-[22rem] flex-col rounded-lg bg-night-2 ring-1 ring-night-line">
        <div aria-live="polite" className="flex-1 p-5 md:p-6">
          {loading ? (
            <div>
              <p className="text-[14px]">{t.loading}</p>
              <div aria-hidden="true" className="mt-4 space-y-3">
                <div className="h-3.5 w-3/4 animate-pulse rounded-sm bg-white/10" />
                <div className="h-3.5 w-full animate-pulse rounded-sm bg-white/10" />
                <div className="h-3.5 w-5/6 animate-pulse rounded-sm bg-white/10" />
              </div>
            </div>
          ) : answer ? (
            <div>
              <Badge tone="night">Kizai AI</Badge>
              <p className="mt-4 text-[17px] font-semibold text-white">{answer.title}</p>
              <ul className="mt-3 space-y-2.5">
                {answer.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px]">
                    <span aria-hidden="true" className="mt-[0.75em] h-px w-3 shrink-0 bg-redline-bright" />
                    <span>{renderWithPlaceholders(item)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-[15px]">{t.empty}</p>
          )}
        </div>

        <form
          className="border-t border-night-line p-3"
          onSubmit={(e) => {
            e.preventDefault();
            ask(selected ?? 0);
          }}
        >
          <label htmlFor="ask-input" className="sr-only">
            {t.label}
          </label>
          <div className="flex items-center gap-2 rounded-md bg-white/5 p-1.5 pl-3.5 ring-1 ring-white/10 focus-within:ring-white/40">
            <input
              id="ask-input"
              readOnly
              value={selected !== null ? t.answers[selected].q : ""}
              placeholder={t.placeholder}
              className="h-9 min-w-0 flex-1 bg-transparent text-[15px] text-white placeholder:text-on-night-2 focus:outline-none"
            />
            <button
              type="submit"
              aria-label={t.send}
              disabled={loading}
              className="inline-flex size-9 shrink-0 items-center justify-center rounded-sm bg-white text-ink transition-colors hover:bg-surface-2 disabled:opacity-60"
            >
              <ArrowUp aria-hidden="true" className="size-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/** Hiển thị các đoạn [ ... ] như ô placeholder. */
function renderWithPlaceholders(text: string) {
  return text.split(/(\[[^\]]*\]%?)/g).map((part, i) =>
    /^\[.*\]%?$/.test(part) ? (
      <span key={i} className="mx-0.5 rounded-sm border border-dashed border-white/40 px-1.5 text-on-night-2">
        {part}
      </span>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    ),
  );
}
