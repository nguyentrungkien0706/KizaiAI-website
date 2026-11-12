import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { contentUpdated, moduleSlugs } from "@/i18n/seo-content";
import { site } from "@/lib/site";
import { smbPath } from "@/i18n/smb-content";

/** Trang chủ, trang danh sách module, trang hộ kinh doanh + 5 trang module, mỗi trang 3 ngôn ngữ, kèm hreflang. */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/modules", smbPath, ...moduleSlugs.map((s) => `/modules/${s}`)];
  return paths.flatMap((path) => {
    const languages = {
      ...Object.fromEntries(locales.map((l) => [l, `${site.url}/${l}${path}`])),
      "x-default": `${site.url}/vi${path}`,
    };
    return locales.map((l) => ({
      url: `${site.url}/${l}${path}`,
      lastModified: contentUpdated,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: { languages },
    }));
  });
}
