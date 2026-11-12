import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/vi";
import { brand, moduleSlugs, seoContent, type ModuleSlug } from "@/i18n/seo-content";
import { site } from "@/lib/site";

/**
 * JSON-LD (schema.org) dùng chung. Chỉ ghi dữ liệu có thật: không có giá, đánh giá hay số liệu hiệu quả.
 */

const inLanguage: Record<Locale, string> = { vi: "vi-VN", ja: "ja-JP", en: "en" };

export const ids = {
  org: `${site.url}/#organization`,
  website: `${site.url}/#website`,
  product: `${site.url}/#software`,
};

function organization(t: Dictionary) {
  return {
    "@type": "Organization",
    "@id": ids.org,
    name: brand.company,
    url: "https://kizai.vn",
    logo: { "@type": "ImageObject", url: `${site.url}/icon.png`, width: 512, height: 512 },
    email: t.contact.info.email,
    telephone: "+84 38 631 2345",
    address: {
      "@type": "PostalAddress",
      streetAddress: "X5, Tráng Việt",
      addressLocality: "Mê Linh",
      addressRegion: "Hà Nội",
      addressCountry: "VN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: t.contact.info.email,
      telephone: "+84 38 631 2345",
      availableLanguage: ["Vietnamese", "Japanese", "English"],
    },
    sameAs: ["https://kizai.vn", ...t.footer.social.map((s) => s.href)],
  };
}

function website(locale: Locale) {
  return {
    "@type": "WebSite",
    "@id": ids.website,
    url: site.url,
    name: brand.product,
    publisher: { "@id": ids.org },
    inLanguage: ["vi-VN", "ja-JP", "en"],
    description: seoContent[locale].home.description,
  };
}

function software(locale: Locale, t: Dictionary) {
  return {
    "@type": "SoftwareApplication",
    "@id": ids.product,
    name: brand.product,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Manufacturing data platform",
    operatingSystem: "Web, Cloud, On-premise",
    url: `${site.url}/${locale}`,
    description: seoContent[locale].home.description,
    publisher: { "@id": ids.org },
    featureList: t.modules.items.map((m) => m.name),
  };
}

function faqPage(t: Dictionary, url: string, locale: Locale) {
  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    inLanguage: inLanguage[locale],
    mainEntity: t.faq.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function homeSchema(locale: Locale, t: Dictionary) {
  const url = `${site.url}/${locale}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization(t),
      website(locale),
      software(locale, t),
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: seoContent[locale].home.title,
        description: seoContent[locale].home.description,
        inLanguage: inLanguage[locale],
        isPartOf: { "@id": ids.website },
        about: { "@id": ids.product },
        primaryImageOfPage: { "@type": "ImageObject", url: `${site.url}/og/og-${locale}.jpg` },
      },
      faqPage(t, url, locale),
    ],
  };
}

export function moduleSchema(locale: Locale, t: Dictionary, slug: ModuleSlug) {
  const url = `${site.url}/${locale}/modules/${slug}`;
  const s = seoContent[locale];
  const m = s.modules[slug];
  const item = t.modules.items[moduleSlugs.indexOf(slug)];
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization(t),
      website(locale),
      software(locale, t),
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: m.title,
        description: m.description,
        inLanguage: inLanguage[locale],
        isPartOf: { "@id": ids.website },
        about: { "@id": ids.product },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        primaryImageOfPage: { "@type": "ImageObject", url: `${site.url}/og/modules/${locale}-${slug}.jpg` },
        mainEntity: {
          "@type": "Thing",
          name: item.name,
          description: m.intro,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: s.labels.home, item: `${site.url}/${locale}` },
          { "@type": "ListItem", position: 2, name: s.labels.modules, item: `${site.url}/${locale}/modules` },
          { "@type": "ListItem", position: 3, name: item.name, item: url },
        ],
      },
    ],
  };
}

export function modulesSchema(locale: Locale, t: Dictionary) {
  const url = `${site.url}/${locale}/modules`;
  const s = seoContent[locale];
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization(t),
      website(locale),
      software(locale, t),
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: s.modulesPage.title,
        description: s.modulesPage.description,
        inLanguage: inLanguage[locale],
        isPartOf: { "@id": ids.website },
        about: { "@id": ids.product },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: moduleSlugs.map((slug, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: t.modules.items[i].name,
            url: `${site.url}/${locale}/modules/${slug}`,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: s.labels.home, item: `${site.url}/${locale}` },
          { "@type": "ListItem", position: 2, name: s.labels.modules, item: url },
        ],
      },
    ],
  };
}

/** Chèn JSON-LD an toàn (chặn chuỗi đóng thẻ script). */
export function jsonLd(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
