import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { brand, isModuleSlug, moduleSlugs, seoContent } from "@/i18n/seo-content";

import { Navbar } from "@/components/site/navbar";
import { Platform } from "@/components/site/platform";
import { Integrations } from "@/components/site/integrations";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { buttonVariants } from "@/components/ui/button";
import { Badge, Container, Section, displayClass } from "@/components/ui/drafting";
import { moduleImages } from "@/lib/module-images";
import { jsonLd, moduleSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";

const ogLocales = { vi: "vi_VN", ja: "ja_JP", en: "en_US" } as const;

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return locales.flatMap((locale) => moduleSlugs.map((slug) => ({ locale, slug })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isModuleSlug(slug)) return {};
  const m = seoContent[locale].modules[slug];
  const path = `/modules/${slug}`;
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

export default async function ModulePage({ params }: { params: Params }) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale) || !isModuleSlug(slug)) notFound();
  const locale: Locale = rawLocale;
  const t = getDictionary(locale);
  const s = seoContent[locale];
  const index = moduleSlugs.indexOf(slug);
  const item = t.modules.items[index];
  const m = s.modules[slug];
  const base = `/${locale}`;
  const path = `/modules/${slug}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(moduleSchema(locale, t, slug))} />
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
              <li>
                <a href={`${base}#modules`} className="hover:text-ink">
                  {s.labels.modules}
                </a>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink-2">
                {item.name}
              </li>
            </ol>
          </nav>

          <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:gap-14">
            <div>
              <Badge>{item.who}</Badge>
              <h1
                className={cn(
                  displayClass,
                  "mt-5 text-[36px] leading-[1.1] md:text-[48px] [:lang(ja)_&]:text-[30px] md:[:lang(ja)_&]:text-[40px]",
                )}
              >
                {m.h1}
              </h1>
              <p className="mt-3 text-[15px] font-semibold text-ink-2">{item.name}</p>
              <p className="mt-5 max-w-[40rem] text-lg leading-[1.6] text-ink-3">{m.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className={buttonVariants({ variant: "primary", size: "lg" })}>
                  {s.labels.ctaButton}
                  <ChevronRight aria-hidden="true" />
                </a>
                <a href={`${base}#modules`} className={buttonVariants({ variant: "secondary", size: "lg" })}>
                  {s.labels.backToModules}
                </a>
              </div>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-night">
              <Image
                src={moduleImages[index]}
                alt={item.imageAlt}
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 1024px) 640px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>

        <Section aria-labelledby="features-title">
          <Container>
            <h2 id="features-title" className={cn(displayClass, "text-[30px] md:text-[40px] [:lang(ja)_&]:text-[26px] md:[:lang(ja)_&]:text-[34px]")}>
              {s.labels.features}
            </h2>
            <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {item.features.map((f) => (
                <li key={f.title} className="rounded-xl bg-surface p-6 md:p-8">
                  <h3 className="text-[20px] font-semibold tracking-[-0.01em]">{f.title}</h3>
                  <p className="mt-2 text-[16px] text-ink-3">{f.text}</p>
                </li>
              ))}
            </ul>
          </Container>
        </Section>

        <Platform t={t} />
        <Integrations t={t} />

        <Section aria-labelledby="other-title" className="pt-0 md:pt-0 xl:pt-0">
          <Container>
            <h2 id="other-title" className={cn(displayClass, "text-[30px] md:text-[40px] [:lang(ja)_&]:text-[26px] md:[:lang(ja)_&]:text-[34px]")}>
              {s.labels.other}
            </h2>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {moduleSlugs
                .map((other, i) => ({ other, i }))
                .filter(({ other }) => other !== slug)
                .map(({ other, i }) => (
                  <li key={other}>
                    <a
                      href={`${base}/modules/${other}`}
                      className="group flex h-full flex-col rounded-xl border border-line p-6 transition-colors duration-[120ms] hover:border-line-strong hover:bg-surface"
                    >
                      <span className="text-[13px] font-medium text-ink-3">{t.modules.items[i].tab}</span>
                      <span className="mt-2 text-[19px] font-semibold tracking-[-0.01em] text-ink">{t.modules.items[i].name}</span>
                      <span className="mt-2 text-[15px] text-ink-3">{s.modules[other].description}</span>
                    </a>
                  </li>
                ))}
            </ul>
          </Container>
        </Section>

        <Contact t={t} locale={locale} />
      </main>
      <Footer t={t} locale={locale} path={path} />
    </>
  );
}
