import { localeNames, locales, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = { current: Locale; label: string; className?: string };

/** Chuyển ngôn ngữ VI / JA / EN. */
export function LanguageSwitcher({ current, label, className }: LanguageSwitcherProps) {
  return (
    <ul aria-label={label} className={cn("flex w-fit items-center gap-0.5 rounded-md bg-surface-2 p-0.5", className)}>
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
                "inline-flex h-10 min-w-10 items-center justify-center rounded-sm px-2 text-[13px] font-semibold transition-colors duration-[120ms]",
                isCurrent ? "bg-white text-ink shadow-[0_1px_2px_rgb(0_0_0/0.12)]" : "text-ink-3 hover:text-ink",
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
