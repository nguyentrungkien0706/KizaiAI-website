import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Montserrat } from "next/font/google";
import { isLocale, locales } from "@/i18n/config";
import { brand, seoContent } from "@/i18n/seo-content";
import { Analytics } from "@/components/site/analytics";
import { site } from "@/lib/site";
import "../globals.css";

// Montserrat: font thương hiệu của kizai.vn, có đủ dấu tiếng Việt.
const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
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
  const seo = seoContent[locale];
  const ogLocale = { vi: "vi_VN", ja: "ja_JP", en: "en_US" }[locale];
  const verification: Metadata["verification"] = {};
  if (process.env.NEXT_PUBLIC_GSC_VERIFICATION) verification.google = process.env.NEXT_PUBLIC_GSC_VERIFICATION;
  if (process.env.NEXT_PUBLIC_BING_VERIFICATION) verification.other = { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION };
  return {
    metadataBase: new URL(site.url),
    title: seo.home.title,
    description: seo.home.description,
    applicationName: brand.product,
    alternates: {
      canonical: `/${locale}`,
      languages: { ...Object.fromEntries(locales.map((l) => [l, `/${l}`])), "x-default": "/vi" },
    },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    verification,
    openGraph: {
      type: "website",
      siteName: brand.product,
      locale: ogLocale,
      alternateLocale: Object.values({ vi: "vi_VN", ja: "ja_JP", en: "en_US" }).filter((l) => l !== ogLocale),
      url: `/${locale}`,
      title: seo.home.title,
      description: seo.home.description,
      images: [{ url: `/og/og-${locale}.jpg`, width: 1200, height: 630, alt: seo.home.title }],
    },
    twitter: { card: "summary_large_image", title: seo.home.title, description: seo.home.description, images: [`/og/og-${locale}.jpg`] },
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
    <html lang={locale} className={montserrat.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
