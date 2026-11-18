import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Camera, Check, ExternalLink, MessageSquareText, Mic, Plus, X } from "lucide-react";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { brand, seoContent } from "@/i18n/seo-content";
import { smbContent, smbPath } from "@/i18n/smb-content";

import { Navbar } from "@/components/site/navbar";
import { HeroSlider, Photo, type HeroSlide } from "@/components/site/hero-slider";
import { photos } from "@/lib/photos";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { Container, Section, SectionHeading, displayClass } from "@/components/ui/drafting";
import { jsonLd, smbSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";

const ogLocales = { vi: "vi_VN", ja: "ja_JP", en: "en_US" } as const;
const wayIcons = [MessageSquareText, Mic, Camera];
const stepPhotos = [photos.trainingTablet, photos.purchasing, photos.teamDone];

type Params = Promise<{ locale: string }>;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const m = smbContent[locale].seo;
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: `/${locale}${smbPath}`,
      languages: { ...Object.fromEntries(locales.map((l) => [l, `/${l}${smbPath}`])), "x-default": `/vi${smbPath}` },
    },
    openGraph: {
      type: "website",
      siteName: brand.product,
      locale: ogLocales[locale],
      url: `/${locale}${smbPath}`,
      title: m.title,
      description: m.description,
      images: [{ url: `/og/smb-${locale}.jpg`, width: 1200, height: 630, alt: m.title }],
    },
    twitter: { card: "summary_large_image", title: m.title, description: m.description, images: [`/og/smb-${locale}.jpg`] },
  };
}

export default async function SmbPage({ params }: { params: Params }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const t = getDictionary(locale);
  const s = seoContent[locale];
  const c = smbContent[locale];
  const base = `/${locale}`;
  const group = (id: string) => c.skills.groups.find((g) => g.id === id)!;
  const slides: HeroSlide[] = [
    { eyebrow: c.nav, title: c.hero.h1, text: c.hero.sub, image: photos.aiAssistant.src, alt: photos.aiAssistant.alt[locale] },
    { eyebrow: c.ways.title, title: c.compare.after.items[0], text: c.ways.sub, image: photos.phoneNotify.src, alt: photos.phoneNotify.alt[locale], flip: true },
    { eyebrow: group("stock").label, title: group("stock").items[0].title, text: group("stock").items[0].text, image: photos.stockScan.src, alt: photos.stockScan.alt[locale] },
    { eyebrow: group("tax").label, title: c.compare.after.items[3], text: group("tax").items[0].text, image: photos.accounting.src, alt: photos.accounting.alt[locale] },
    { eyebrow: c.grow.items.map((g) => g.name.replace("KIZAI ", "")).join(" · "), title: c.grow.title, text: c.grow.sub, image: photos.smallFactory.src, alt: photos.smallFactory.alt[locale] },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(smbSchema(locale, t))} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-4 focus:py-3 focus:text-white"
      >
        {t.a11y.skipToContent}
      </a>
      <Navbar locale={locale} t={t} base={base} path={smbPath} />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <HeroSlider
          locale={locale}
          headingId="smb-title"
          slides={slides}
          primary={{ href: "#contact", label: c.hero.primary }}
          secondary={{ href: "#viec-ai-lam", label: c.hero.secondary }}
          footer={
            <nav aria-label="Breadcrumb" className="px-1 pt-4">
              <ol className="flex flex-wrap items-center gap-1.5 text-[14px] text-ink-3">
                <li>
                  <a href={base} className="hover:text-ink">
                    {s.labels.home}
                  </a>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-ink-2">
                  {c.breadcrumb}
                </li>
              </ol>
            </nav>
          }
        />

        {/* Vì sao lúc này */}
        <Section aria-labelledby="why-title">
          <Container>
            <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-14">
              <Photo src={photos.ownerFloor.src} alt={photos.ownerFloor.alt[locale]} className="aspect-[4/3] lg:aspect-auto lg:min-h-[520px]" />
              <div className="flex flex-col justify-center">
                <SectionHeading id="why-title" title={c.why.title} sub={c.why.sub} align="left" />
                <ul className="mt-10 divide-y divide-line border-y border-line">
                  {c.why.items.map((w, i) => (
                    <li key={w.title} className="grid grid-cols-[2.5rem_1fr] gap-4 py-6">
                      <span className="text-[14px] font-semibold text-ink-3 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <h3 className="text-[19px] font-semibold tracking-[-0.01em] text-ink">{w.title}</h3>
                        <p className="mt-2 text-[16px] text-ink-3">{w.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[14px] text-ink-3">{c.why.note}</p>
              </div>
            </div>
          </Container>
        </Section>

        {/* So sánh cách cũ và Kizai AI */}
        <Section aria-labelledby="compare-title" className="pt-0 md:pt-0 xl:pt-0">
          <Container>
            <SectionHeading id="compare-title" title={c.compare.title} align="left" />
            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="overflow-hidden rounded-xl border border-line">
                <Photo src={photos.planningBoard.src} alt={photos.planningBoard.alt[locale]} className="aspect-[16/8] rounded-none grayscale-[60%]" />
                <div className="p-7">
                <h3 className="text-[15px] font-semibold text-ink-3">{c.compare.before.label}</h3>
                <ul className="mt-5 space-y-3.5">
                  {c.compare.before.items.map((x) => (
                    <li key={x} className="flex gap-3 text-[16px] text-ink-3">
                      <X aria-hidden="true" className="mt-1 size-4 shrink-0" />
                      {x}
                    </li>
                  ))}
                </ul>
                </div>
              </div>
              <div className="on-night overflow-hidden rounded-xl bg-night">
                <Photo src={photos.dashboard.src} alt={photos.dashboard.alt[locale]} className="aspect-[16/8] rounded-none" />
                <div className="p-7">
                <h3 className="text-[15px] font-semibold text-white">{c.compare.after.label}</h3>
                <ul className="mt-5 space-y-3.5">
                  {c.compare.after.items.map((x) => (
                    <li key={x} className="flex gap-3 text-[16px] text-white">
                      <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-success-tint" />
                      {x}
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Ba cách giao việc */}
        <Section aria-labelledby="ways-title" className="pt-0 md:pt-0 xl:pt-0">
          <Container>
            <div className="on-night grid grid-cols-1 items-center gap-10 overflow-hidden rounded-xl bg-night px-6 py-12 md:px-12 md:py-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] xl:px-16">
              <div>
                <h2 id="ways-title" className={cn(displayClass, "text-[32px] text-white md:text-[44px] [:lang(ja)_&]:text-[28px] md:[:lang(ja)_&]:text-[36px]")}>
                  {c.ways.title}
                </h2>
                <p className="mt-4 max-w-[30rem] text-[17px] text-on-night-2">{c.ways.sub}</p>
              </div>
              <figure className="m-0 rounded-xl bg-night-2 ring-1 ring-night-line">
                <div className="flex items-center justify-between border-b border-night-line px-5 py-3.5">
                  <span className="flex items-center gap-2.5 text-[15px] font-semibold text-white">
                    <span aria-hidden="true" className="inline-flex size-7 items-center justify-center rounded-full bg-white text-[12px] font-bold text-night">
                      AI
                    </span>
                    {c.hero.chatTitle}
                  </span>
                  <span className="text-[12px] text-on-night-2">{c.hero.chatNote}</span>
                </div>
                <ol className="space-y-3 px-5 py-5">
                  {c.hero.chat.map((m, i) => (
                    <li key={i} className={cn("flex", m.from === "user" ? "justify-end" : "justify-start")}>
                      <p
                        className={cn(
                          "max-w-[85%] rounded-2xl px-4 py-2.5 text-[15px] leading-[1.45]",
                          m.from === "user" ? "rounded-br-sm bg-white text-ink" : "rounded-bl-sm bg-night text-white ring-1 ring-night-line",
                        )}
                      >
                        {m.from === "ai" && i === c.hero.chat.length - 1 ? (
                          <Check aria-hidden="true" className="mr-1.5 inline size-4 -translate-y-px text-success-tint" />
                        ) : null}
                        {m.text}
                      </p>
                    </li>
                  ))}
                </ol>
                <figcaption className="sr-only">{c.hero.chatNote}</figcaption>
                <div aria-hidden="true" className="mx-5 mb-5 flex h-11 items-center justify-between rounded-full bg-night px-4 text-[14px] ring-1 ring-night-line">
                  <span>{c.hero.inputPlaceholder}</span>
                  <span className="flex gap-3">
                    <Mic className="size-4" />
                    <Camera className="size-4" />
                  </span>
                </div>
              </figure>
            </div>
            <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
              {c.ways.items.map((w, i) => {
                const Icon = wayIcons[i];
                return (
                  <li key={w.title} className="rounded-xl bg-surface p-7">
                    <Icon aria-hidden="true" className="size-6 text-ink" />
                    <h3 className="mt-5 text-[20px] font-semibold tracking-[-0.01em] text-ink">{w.title}</h3>
                    <p className="mt-2 text-[16px] text-ink-3">{w.text}</p>
                    <p className="mt-5 rounded-lg bg-white px-4 py-3 text-[15px] text-ink-2">{w.example}</p>
                  </li>
                );
              })}
            </ul>
          </Container>
        </Section>

        {/* Thư viện việc AI làm: hiện đầy đủ trong HTML, có lối tắt theo nhóm */}
        <Section id="viec-ai-lam" aria-labelledby="skills-title" className="scroll-mt-20 bg-surface">
          <Container>
            <SectionHeading id="skills-title" title={c.skills.title} sub={c.skills.sub} align="left" />
            <nav aria-label={c.skills.title} className="mt-8">
              <ul className="flex flex-wrap gap-2">
                {c.skills.groups.map((g) => (
                  <li key={g.id}>
                    <a
                      href={`#nhom-${g.id}`}
                      className="inline-flex min-h-10 items-center gap-2 rounded-full bg-white px-4 text-[14px] font-medium text-ink ring-1 ring-line hover:ring-line-strong"
                    >
                      {g.label}
                      <span className="text-ink-3">{g.items.length}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-12 space-y-14">
              {c.skills.groups.map((g) => (
                <div key={g.id} id={`nhom-${g.id}`} className="scroll-mt-24">
                  <h3 className="text-[22px] font-semibold tracking-[-0.01em] text-ink">{g.label}</h3>
                  <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {g.items.map((it) => (
                      <li key={it.title} className="rounded-xl bg-white p-6">
                        <h4 className="text-[17px] font-semibold text-ink">{it.title}</h4>
                        <p className="mt-2 text-[15px] text-ink-3">{it.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Theo ngành */}
        <Section aria-labelledby="industries-title">
          <Container>
            <SectionHeading id="industries-title" title={c.industries.title} sub={c.industries.sub} align="left" />
            <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {c.industries.items.map((ind) => (
                <li key={ind.name} className="rounded-xl border border-line p-6">
                  <h3 className="text-[18px] font-semibold text-ink">{ind.name}</h3>
                  <ul className="mt-4 space-y-2">
                    {ind.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-[15px] text-ink-3">
                        <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-ink" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <li className="flex items-end rounded-xl bg-surface p-6 text-[15px] text-ink-2">
                <a href="#contact" className="font-medium underline decoration-line-strong underline-offset-4 hover:decoration-ink">
                  {c.industries.other}
                </a>
              </li>
            </ul>
          </Container>
        </Section>

        {/* Ba bước bắt đầu: đây là trình tự thật nên đánh số */}
        <Section aria-labelledby="steps-title" className="pt-0 md:pt-0 xl:pt-0">
          <Container>
            <SectionHeading id="steps-title" title={c.steps.title} sub={c.steps.sub} align="left" />
            <ol className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
              {c.steps.items.map((st, i) => (
                <li key={st.title} className="overflow-hidden rounded-xl bg-surface">
                  <Photo src={stepPhotos[i].src} alt={stepPhotos[i].alt[locale]} className="aspect-[16/10] rounded-none" sizes="(min-width: 768px) 33vw, 100vw" />
                  <div className="p-7">
                  <span className="inline-flex size-9 items-center justify-center rounded-full bg-ink text-[15px] font-semibold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-[20px] font-semibold tracking-[-0.01em] text-ink">{st.title}</h3>
                  <p className="mt-2 text-[16px] text-ink-3">{st.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Container>
        </Section>

        {/* Nhắc việc chủ động */}
        <Section aria-labelledby="alerts-title" className="pt-0 md:pt-0 xl:pt-0">
          <Container>
            <div className="on-night relative isolate overflow-hidden rounded-xl bg-night px-6 py-12 md:px-12 md:py-16">
              <Image src={photos.signalTower.src} alt="" fill sizes="100vw" placeholder="blur" className="-z-10 object-cover object-[80%_center] opacity-55" />
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#0f262e_20%,rgba(15,38,46,0.7)_100%)]" />
              <h2 id="alerts-title" className={cn(displayClass, "text-[30px] text-white md:text-[40px] [:lang(ja)_&]:text-[26px] md:[:lang(ja)_&]:text-[34px]")}>
                {c.alerts.title}
              </h2>
              <p className="mt-4 max-w-[40rem] text-[17px] text-on-night-2">{c.alerts.sub}</p>
              <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
                {c.alerts.items.map((a) => (
                  <li key={a.label} className="rounded-xl bg-night-2/85 p-6 ring-1 ring-night-line backdrop-blur-sm">
                    <span className="text-[13px] font-semibold text-redline-bright">{a.label}</span>
                    <p className="mt-3 text-[16px] leading-[1.5] text-white">{a.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>

        {/* Lớn lên cùng Kizai */}
        <Section aria-labelledby="grow-title" className="pt-0 md:pt-0 xl:pt-0">
          <Container>
            <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-2">
              <SectionHeading id="grow-title" title={c.grow.title} sub={c.grow.sub} align="left" />
              <Photo src={photos.ownerMeeting.src} alt={photos.ownerMeeting.alt[locale]} className="aspect-[16/9]" />
            </div>
            <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {c.grow.items.map((g) => (
                <li key={g.name}>
                  <a
                    href={g.href}
                    target="_blank"
                    rel="noopener"
                    className="group flex h-full flex-col rounded-xl border border-line p-6 transition-colors duration-[120ms] hover:border-line-strong hover:bg-surface"
                  >
                    <h3 className="text-[18px] font-semibold text-ink">{g.name}</h3>
                    <p className="mt-2 flex-1 text-[15px] text-ink-3">{g.text}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-ink">
                      {c.grow.link}
                      <ExternalLink aria-hidden="true" className="size-3.5" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </Section>

        {/* FAQ riêng của trang */}
        <Section aria-labelledby="smb-faq-title" className="pt-0 md:pt-0 xl:pt-0">
          <Container className="max-w-[880px]">
            <SectionHeading id="smb-faq-title" title={c.faq.title} />
            <div className="mt-12 border-t border-line">
              {c.faq.items.map((item) => (
                <details key={item.q} className="group border-b border-line">
                  <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-[19px] font-medium tracking-[-0.01em] text-ink [&::-webkit-details-marker]:hidden">
                    <span>{item.q}</span>
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-surface-2 transition-colors group-hover:bg-surface-3">
                      <Plus aria-hidden="true" className="size-4 transition-transform duration-[200ms] ease-standard group-open:rotate-45" />
                    </span>
                  </summary>
                  <p className="max-w-[44rem] pb-6 text-[16px] text-ink-3">{item.a}</p>
                </details>
              ))}
            </div>
          </Container>
        </Section>

        <Contact t={t} locale={locale} />
      </main>
      <Footer t={t} locale={locale} path={smbPath} />
    </>
  );
}
