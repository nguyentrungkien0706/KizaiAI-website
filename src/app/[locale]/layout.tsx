import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Montserrat, Noto_Sans_JP } from "next/font/google";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { site } from "@/lib/site";
import "../globals.css";

// Montserrat: font thương hiệu của kizai.vn, có đủ dấu tiếng Việt.
const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const notoJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-jp",
  display: "swap",
  preload: false,
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  const ogLocale = { vi: "vi_VN", ja: "ja_JP", en: "en_US" }[locale];
  return {
    metadataBase: new URL(site.url),
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { ...Object.fromEntries(locales.map((l) => [l, `/${l}`])), "x-default": "/vi" },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: ogLocale,
      url: `/${locale}`,
      title: t.meta.title,
      description: t.meta.description,
      images: [{ url: `/og/og-${locale}.jpg`, width: 1200, height: 630, alt: t.meta.title }],
    },
    twitter: { card: "summary_large_image", title: t.meta.title, description: t.meta.description, images: [`/og/og-${locale}.jpg`] },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale} className={`${montserrat.variable} ${notoJp.variable}`}>
      <body>{children}</body>
    </html>
  );
}
