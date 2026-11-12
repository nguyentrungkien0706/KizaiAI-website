import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { brand, moduleSlugs, seoContent } from "@/i18n/seo-content";

import { Navbar } from "@/components/site/navbar";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { Container, Section, displayClass } from "@/components/ui/drafting";
import { moduleImages } from "@/lib/module-images";
import { jsonLd, modulesSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";

const ogLocales = { vi: "vi_VN", ja: "ja_JP", en: "en_US" } as const;
const path = "/modules";

type Params = Promise<{ locale: string }>;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const m = seoContent[locale].modulesPage;
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: { ...Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])), "x-default": `/vi${path}` },
    },
    openGraph: {
      type: "website",
      siteName: brand.product,
      locale: ogLocales[locale],
      url: `/${locale}${path}`,
      title: m.title,
      description: m.description,
      images: [{ url: `/og/og-${locale}.jpg`, width: 1200, height: 630, alt: m.title }],
    },
    twitter: { card: "summary_large_image", title: m.title, description: m.description, images: [`/og/og-${locale}.jpg`] },
  };
}

export default async function ModulesPage({ params }: { params: Params }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const t = getDictionary(locale);
  const s = seoContent[locale];
  const m = s.modulesPage;
  const base = `/${locale}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(modulesSchema(locale, t))} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-4 focus:py-3 focus:text-white"
      >
        {t.a11y.skipToContent}
      </a>
      <Navbar locale={locale} t={t} base={base} path={path} />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Container className="pt-8 md:pt-10">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-[14px] text-ink-3">
              <li>
                <a href={base} className="hover:text-ink">
                  {s.labels.home}
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink-2">
                {s.labels.modules}
              </li>
            </ol>
          </nav>
          <h1
            className={cn(
              displayClass,
              "mt-8 max-w-[52rem] text-[36px] leading-[1.1] md:text-[48px] [:lang(ja)_&]:text-[30px] md:[:lang(ja)_&]:text-[40px]",
            )}
          >
            {m.h1}
          </h1>
          <p className="mt-5 max-w-[44rem] text-lg leading-[1.6] text-ink-3">{m.intro}</p>
        </Container>

        <Section aria-label={s.labels.modules} className="pt-10 md:pt-12 xl:pt-14">
          <Container>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {moduleSlugs.map((slug, i) => {
                const item = t.modules.items[i];
                return (
                  <li key={slug}>
                    <a
                      href={`${base}/modules/${slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-xl border border-line transition-colors duration-[120ms] hover:border-line-strong hover:bg-surface"
                    >
                      <div className="relative aspect-[16/10] bg-night">
                        <Image
                          src={moduleImages[i]}
                          alt={item.imageAlt}
                          fill
                          placeholder="blur"
                          sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <span className="text-[13px] font-medium text-ink-3">{item.tab}</span>
                        <h2 className="mt-2 text-[20px] font-semibold tracking-[-0.01em] text-ink">{item.name}</h2>
                        <p className="mt-2 flex-1 text-[15px] text-ink-3">{s.modules[slug].description}</p>
                        <span className="mt-5 inline-flex items-center gap-1 text-[15px] font-semibold text-ink">
                          {s.labels.detail}
                          <ChevronRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </Container>
        </Section>

        <Contact t={t} locale={locale} />
      </main>
      <Footer t={t} locale={locale} path={path} />
    </>
  );
}
