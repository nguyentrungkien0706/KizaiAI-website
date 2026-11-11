export const locales = ["vi", "ja", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "vi";

export const localeNames: Record<Locale, { short: string; full: string }> = {
  vi: { short: "VI", full: "Tiếng Việt" },
  ja: { short: "JA", full: "日本語" },
  en: { short: "EN", full: "English" },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
