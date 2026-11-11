import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Problem } from "@/components/site/problem";
import { Modules } from "@/components/site/modules";
import { Platform } from "@/components/site/platform";
import { Integrations } from "@/components/site/integrations";
import { Customers } from "@/components/site/customers";
import { About } from "@/components/site/about";
import { Pricing } from "@/components/site/pricing";
import { Faq } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { homeSchema, jsonLd } from "@/lib/schema";
import { seoContent } from "@/i18n/seo-content";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(homeSchema(locale, t))} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-4 focus:py-3 focus:text-white"
      >
        {t.a11y.skipToContent}
      </a>
      <Navbar locale={locale} t={t} />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero t={t} />
        <Problem t={t} />
        <Modules t={t} locale={locale} detailLabel={seoContent[locale].labels.detail} />
        <Platform t={t} />
        <Integrations t={t} />
        <Customers t={t} />
        <About t={t} />
        <Pricing t={t} />
        <Faq t={t} />
        <Contact t={t} locale={locale} />
      </main>
      <Footer t={t} locale={locale} />
    </>
  );
}
