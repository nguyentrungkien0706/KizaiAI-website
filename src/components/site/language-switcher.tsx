import { localeNames, locales, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = { current: Locale; label: string };

/** Chuyển ngôn ngữ VI / JA / EN, dạng segmented control. */
export function LanguageSwitcher({ current, label }: LanguageSwitcherProps) {
  return (
    <ul
      aria-label={label}
      className="flex items-center rounded-control border border-rule-strong p-0.5"
    >
      {locales.map((l) => {
        const isCurrent = l === current;
        return (
          <li key={l}>
            <a
              href={`/${l}`}
              hrefLang={l}
              lang={l}
              aria-label={localeNames[l].full}
              aria-current={isCurrent ? "true" : undefined}
              className={cn(
                "inline-flex h-11 min-w-11 items-center justify-center rounded-[3px] px-2 text-caption font-medium tabular-nums transition-colors duration-[120ms]",
                isCurrent
                  ? "bg-ink text-paper"
                  : "text-ink-2 hover:bg-paper-sunken hover:text-ink",
              )}
            >
              {localeNames[l].short}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
