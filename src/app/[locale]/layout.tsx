import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IBM_Plex_Sans, IBM_Plex_Sans_JP } from "next/font/google";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import "../globals.css";

const plex = IBM_Plex_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
});

const plexJp = IBM_Plex_Sans_JP({
  weight: ["400", "500", "600"],
  variable: "--font-plex-jp",
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
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
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
    <html lang={locale} className={`${plex.variable} ${plexJp.variable}`}>
      <body>{children}</body>
    </html>
  );
}
