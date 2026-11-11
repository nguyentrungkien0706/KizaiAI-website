import "server-only";
import type { Locale } from "./config";
import vi from "./dictionaries/vi";
import ja from "./dictionaries/ja";
import en from "./dictionaries/en";

const dictionaries = { vi, ja, en };

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
