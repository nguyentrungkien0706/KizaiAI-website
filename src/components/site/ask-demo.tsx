"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Badge, Placeholder, Sheet } from "@/components/ui/drafting";
import type { Dictionary } from "@/i18n/dictionaries/vi";
import { cn } from "@/lib/utils";

type AskCopy = Dictionary["platform"]["ask"];

/** Khối "Thử hỏi Kizai": câu trả lời mẫu, không gọi AI thật. */
export function AskDemo({ t }: { t: AskCopy }) {
  const [selected, setSelected] = React.useState<number | null>(null);
  const [shown, setShown] = React.useState<number | null>(null);
  const [loading, setLoading] = React.useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  function ask(index: number) {
    if (timer.current) clearTimeout(timer.current);
    setSelected(index);
    setLoading(true);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    timer.current = setTimeout(() => {
      setShown(index);
      setLoading(false);
    }, reduce ? 0 : 650);
  }

  const answer = shown !== null ? t.answers[shown] : null;

  return (
    <Sheet className="shadow-sheet p-5 md:p-8">
      <h3 className="text-xl font-semibold">{t.title}</h3>

      <form
        className="mt-5"
        onSubmit={(e) => {
          e.preventDefault();
          ask(selected ?? 0);
        }}
      >
        <label htmlFor="ask-input" className="text-caption font-medium text-ink-2">
          {t.label}
        </label>
        <div className="mt-1.5 flex flex-col gap-2 sm:flex-row">
          <input
            id="ask-input"
            readOnly
            value={selected !== null ? t.answers[selected].q : ""}
            placeholder={t.placeholder}
            className="h-11 min-w-0 flex-1 rounded-control border border-rule-strong bg-paper px-3.5 text-[17px] text-ink placeholder:text-ink-3 focus:border-ink"
          />
          <Button type="submit" variant="secondary" loading={loading} loadingText={t.send}>
            {t.send}
          </Button>
        </div>
      </form>

      <p id="ask-suggestions" className="mt-5 text-caption font-medium text-ink-2">
        {t.suggestions}
      </p>
      <ul aria-labelledby="ask-suggestions" className="mt-2 flex flex-wrap gap-2">
        {t.chips.map((chip, i) => (
          <li key={chip}>
            <button
              type="button"
              aria-pressed={selected === i}
              onClick={() => ask(i)}
              className={cn(
                "min-h-11 rounded-full border px-4 text-[15px] transition-colors duration-[120ms]",
                selected === i
                  ? "border-ink bg-ink text-paper"
                  : "border-rule-strong bg-paper text-ink hover:border-ink",
              )}
            >
              {chip}
            </button>
          </li>
        ))}
      </ul>

      <div aria-live="polite" className="mt-6 min-h-[12rem] border-t border-rule pt-5">
        {loading ? (
          <div>
            <p className="text-small text-ink-2">{t.loading}</p>
            <div aria-hidden="true" className="mt-4 space-y-3">
              <div className="h-4 w-3/4 rounded-control bg-paper-sunken" />
              <div className="h-4 w-full rounded-control bg-paper-sunken" />
              <div className="h-4 w-5/6 rounded-control bg-paper-sunken" />
            </div>
          </div>
        ) : answer ? (
          <div>
            <Badge tone="ai">Kizai AI</Badge>
            <p className="mt-3 font-semibold">{answer.title}</p>
            <ul className="mt-3 space-y-2">
              {answer.items.map((item) => (
                <li key={item} className="flex gap-3 text-ink-2">
                  <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-redline" />
                  <span>{renderWithPlaceholders(item)}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-ink-3">{t.empty}</p>
        )}
      </div>

      <p className="mt-4 text-caption text-ink-3">{t.note}</p>
    </Sheet>
  );
}

/** Hiển thị các đoạn [ ... ] như ô placeholder. */
function renderWithPlaceholders(text: string) {
  return text.split(/(\[[^\]]*\]%?)/g).map((part, i) =>
    /^\[.*\]%?$/.test(part) ? (
      <Placeholder key={i} className="mx-0.5 text-small">
        {part}
      </Placeholder>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    ),
  );
}
