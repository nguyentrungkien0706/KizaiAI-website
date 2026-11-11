import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, `${site.url}/${l}`]));
  return locales.map((l) => ({
    url: `${site.url}/${l}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: l === "vi" ? 1 : 0.8,
    alternates: { languages },
  }));
}
