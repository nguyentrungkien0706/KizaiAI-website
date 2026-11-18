"use client";

import * as React from "react";
import Image, { type StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Container, displayClass } from "@/components/ui/drafting";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

export type HeroSlide = {
  eyebrow: string;
  title: string;
  text: string;
  image: StaticImageData;
  alt: string;
  /** Lật ngang ảnh khi người trong ảnh đứng bên trái, để chữ không che mặt. */
  flip?: boolean;
};

/**
 * Ba kiểu trình bày hero:
 * - "cinema": ảnh tràn toàn màn hình, thanh chương có tên từng khung ở dưới.
 * - "split": nền sáng, chữ tối bên trái, ảnh trong khung bo góc bên phải (gần mẫu AURELIA nhất).
 * - "glass": ảnh tràn trong khối bo góc, chữ nằm trên thẻ kính mờ, ảnh kế tiếp xếp hàng bên phải.
 */
export type HeroDesign = "cinema" | "split" | "glass";
const designs: HeroDesign[] = ["cinema", "split", "glass"];

const ui = {
  vi: { prev: "Ảnh trước", next: "Ảnh tiếp theo", pause: "Tạm dừng tự chuyển", play: "Tự chuyển ảnh", go: "Tới ảnh", region: "Trình chiếu giới thiệu", upNext: "Tiếp theo" },
  ja: { prev: "前へ", next: "次へ", pause: "自動再生を一時停止", play: "自動再生", go: "スライド", region: "紹介スライド", upNext: "次へ" },
  en: { prev: "Previous slide", next: "Next slide", pause: "Pause autoplay", play: "Play autoplay", go: "Go to slide", region: "Introduction slideshow", upNext: "Up next" },
} as const;

const DURATION = 6500;

type Props = {
  slides: HeroSlide[];
  locale: Locale;
  headingId: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
  footer?: React.ReactNode;
  design?: HeroDesign;
};

function useSlider(n: number) {
  const [index, setIndex] = React.useState(0);
  const [playing, setPlaying] = React.useState(true);
  const [hold, setHold] = React.useState(false);
  const [cycle, setCycle] = React.useState(0);

  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
    const onVis = () => setHold(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const go = React.useCallback(
    (to: number) => {
      setIndex(((to % n) + n) % n);
      setCycle((c) => c + 1);
    },
    [n],
  );

  const running = playing && !hold;
  React.useEffect(() => {
    if (!running) return;
    const id = window.setTimeout(() => go(index + 1), DURATION);
    return () => window.clearTimeout(id);
  }, [running, index, cycle, go]);

  return { index, go, playing, setPlaying, setHold, running, cycle };
}

export function HeroSlider(props: Props) {
  const { slides, locale, footer } = props;
  const [design, setDesign] = React.useState<HeroDesign>(props.design ?? "cinema");
  // Xem thử phương án khác qua ?giaodien=cinema|split|glass (chỉ dùng khi duyệt thiết kế).
  React.useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("giaodien") as HeroDesign | null;
    if (q && designs.includes(q)) setDesign(q);
  }, []);
  const s = useSlider(slides.length);
  const touchX = React.useRef<number | null>(null);
  const l = ui[locale];

  const region = {
    role: "region",
    "aria-roledescription": "carousel",
    "aria-label": l.region,
    onMouseEnter: () => s.setHold(true),
    onMouseLeave: () => s.setHold(false),
    onTouchStart: (e: React.TouchEvent) => (touchX.current = e.touches[0].clientX),
    onTouchEnd: (e: React.TouchEvent) => {
      if (touchX.current === null) return;
      const dx = e.changedTouches[0].clientX - touchX.current;
      if (Math.abs(dx) > 50) s.go(s.index + (dx < 0 ? 1 : -1));
      touchX.current = null;
    },
  } as const;

  const ctx = { ...props, s, l, region };

  if (design === "split") return <Split {...ctx}>{footer}</Split>;
  if (design === "glass") return <Glass {...ctx}>{footer}</Glass>;
  return <Cinema {...ctx}>{footer}</Cinema>;
}

type Ctx = Props & {
  s: ReturnType<typeof useSlider>;
  l: (typeof ui)[Locale];
  region: React.HTMLAttributes<HTMLDivElement>;
  children?: React.ReactNode;
};

/* ---------- Mảnh dùng chung ---------- */

function Photos({ slides, index, className, gradient }: { slides: HeroSlide[]; index: number; className?: string; gradient?: string }) {
  return (
    <>
      {slides.map((sl, i) => (
        <div
          key={sl.title}
          aria-hidden={i !== index}
          className={cn(
            "absolute inset-0 transition-opacity duration-[1100ms] ease-standard",
            i === index ? "opacity-100" : "opacity-0",
            sl.flip && "-scale-x-100",
            className,
          )}
        >
          <Image
            src={sl.image}
            alt={i === index ? sl.alt : ""}
            fill
            priority={i === 0}
            placeholder="blur"
            sizes="100vw"
            className={cn(
              "object-cover object-[65%_center] motion-safe:transition-transform motion-safe:duration-[8000ms] motion-safe:ease-linear",
              i === index ? "scale-100" : "scale-[1.08]",
            )}
          />
        </div>
      ))}
      {gradient ? <div aria-hidden="true" className={cn("absolute inset-0", gradient)} /> : null}
    </>
  );
}

function Bar({ active, running, cycle, tone = "light" }: { active: boolean; running: boolean; cycle: number; tone?: "light" | "dark" }) {
  return (
    <span className={cn("relative block h-[3px] w-full overflow-hidden rounded-full", tone === "light" ? "bg-white/25" : "bg-ink/15")}>
      {active ? (
        <span
          key={cycle}
          className={cn("absolute inset-0 origin-left", tone === "light" ? "bg-white" : "bg-brand")}
          style={{ animation: `heroBar ${DURATION}ms linear both`, animationPlayState: running ? "running" : "paused" }}
        />
      ) : null}
    </span>
  );
}

function Copy({ c, tone = "light", size = "lg", compactMobile }: { c: Ctx; tone?: "light" | "dark"; size?: "lg" | "xl"; compactMobile?: boolean }) {
  const sl = c.slides[c.s.index];
  const Heading = c.s.index === 0 ? "h1" : "p";
  const dark = tone === "dark";
  return (
    <div key={c.s.index} aria-live="polite" className="motion-safe:animate-[heroIn_700ms_var(--ease-standard)_both]">
      <p className={cn("flex items-center gap-3 text-[13px] font-semibold tracking-[0.14em] uppercase [:lang(ja)_&]:tracking-[0.04em]", dark ? "text-brand-hover" : "text-white/80")}>
        <span className={cn("tabular-nums", dark ? "text-brand" : "text-white")}>{String(c.s.index + 1).padStart(2, "0")}</span>
        <span aria-hidden="true" className={cn("h-px w-8", dark ? "bg-brand/40" : "bg-white/50")} />
        {sl.eyebrow}
      </p>
      <Heading
        id={c.headingId}
        className={cn(
          displayClass,
          "mt-5",
          dark ? "text-brand" : "text-white",
          size === "xl"
            ? "text-[36px] sm:text-[52px] xl:text-[68px] [:lang(ja)_&]:text-[30px] sm:[:lang(ja)_&]:text-[42px] xl:[:lang(ja)_&]:text-[52px]"
            : "text-[32px] sm:text-[44px] xl:text-[54px] [:lang(ja)_&]:text-[27px] sm:[:lang(ja)_&]:text-[36px] xl:[:lang(ja)_&]:text-[44px]",
          "leading-[1.1] [:lang(ja)_&]:leading-[1.4]",
        )}
      >
        {sl.title}
      </Heading>
      <p className={cn("mt-5 max-w-[34rem] text-[16px] leading-[1.6] font-medium md:text-[17px]", dark ? "text-ink-2" : "text-white/85", compactMobile && "hidden sm:block")}>{sl.text}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href={c.primary.href} className={buttonVariants({ variant: dark ? "primary" : "light", size: "lg" })}>
          {c.primary.label}
          <ChevronRight aria-hidden="true" />
        </a>
        {c.secondary ? (
          <a href={c.secondary.href} className={buttonVariants({ variant: dark ? "secondary" : "ghostNight", size: "lg" })}>
            {c.secondary.label}
          </a>
        ) : null}
      </div>
    </div>
  );
}

function RoundButton({ onClick, label, children, tone = "light", className }: { onClick: () => void; label: string; children: React.ReactNode; tone?: "light" | "dark"; className?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        "inline-flex size-11 shrink-0 items-center justify-center rounded-full transition-colors",
        tone === "light"
          ? "bg-white/10 text-white ring-1 ring-white/30 backdrop-blur-sm hover:bg-white hover:text-night"
          : "bg-white text-brand ring-1 ring-ink/10 shadow-sm hover:bg-brand hover:text-white",
        className,
      )}
    >
      {children}
    </button>
  );
}

function PlayToggle({ c, tone = "light" }: { c: Ctx; tone?: "light" | "dark" }) {
  return (
    <button
      type="button"
      onClick={() => c.s.setPlaying((p) => !p)}
      aria-label={c.s.playing ? c.l.pause : c.l.play}
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-full transition-colors",
        tone === "light" ? "text-white/80 hover:bg-white/10 hover:text-white" : "text-ink-3 hover:bg-surface-2 hover:text-ink",
      )}
    >
      {c.s.playing ? <Pause className="size-4" aria-hidden="true" /> : <Play className="size-4" aria-hidden="true" />}
    </button>
  );
}

/* ---------- Phương án A: Toàn màn hình ---------- */

function Cinema(c: Ctx) {
  const { s, l, slides } = c;
  return (
    <section aria-labelledby={c.headingId}>
      <div
        {...c.region}
        className="on-night relative isolate flex min-h-[640px] flex-col overflow-hidden bg-night text-on-night-2 lg:h-[calc(100svh-64px)] lg:max-h-[880px] lg:min-h-[640px]"
      >
        <Photos
          slides={slides}
          index={s.index}
          className="-z-10"
          gradient="-z-10 bg-[linear-gradient(180deg,rgba(15,38,46,0.2)_0%,rgba(15,38,46,0.6)_45%,rgba(15,38,46,0.97)_100%)] md:bg-[linear-gradient(90deg,rgba(15,38,46,0.94)_0%,rgba(15,38,46,0.75)_36%,rgba(15,38,46,0.15)_70%,rgba(15,38,46,0.05)_100%),linear-gradient(0deg,rgba(15,38,46,0.85)_0%,rgba(15,38,46,0)_30%)]"
        />
        <Container className="flex flex-1 flex-col">
          <div className="flex flex-1 items-end pt-40 pb-6 md:items-center md:pt-16 md:pb-10">
            <div className="max-w-[46rem] md:w-[60%] lg:pl-2">
              <Copy c={c} size="xl" />
            </div>
          </div>
          {/* Thanh chương: tên từng khung, vạch tiến trình ở trên */}
          <div className="flex items-end gap-4 pb-6 md:pb-8">
            <ol className="grid flex-1 grid-flow-col gap-3 md:gap-5" style={{ gridAutoColumns: "minmax(0,1fr)" }}>
              {slides.map((sl, i) => (
                <li key={sl.title}>
                  <button type="button" onClick={() => s.go(i)} aria-label={`${l.go} ${i + 1}: ${sl.eyebrow}`} aria-current={i === s.index} className="group block w-full py-2 text-left">
                    <Bar active={i === s.index} running={s.running} cycle={s.cycle} />
                    <span
                      className={cn(
                        "mt-3 hidden text-[13px] leading-[1.35] font-semibold transition-colors md:line-clamp-2",
                        i === s.index ? "text-white" : "text-white/55 group-hover:text-white/85",
                      )}
                    >
                      <span className="mr-1.5 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                      {sl.eyebrow}
                    </span>
                  </button>
                </li>
              ))}
            </ol>
            <div className="flex items-center gap-2">
              <PlayToggle c={c} />
              <RoundButton onClick={() => s.go(s.index - 1)} label={l.prev}>
                <ChevronLeft className="size-5" aria-hidden="true" />
              </RoundButton>
              <RoundButton onClick={() => s.go(s.index + 1)} label={l.next}>
                <ChevronRight className="size-5" aria-hidden="true" />
              </RoundButton>
            </div>
          </div>
        </Container>
      </div>
      <Container>{c.children}</Container>
    </section>
  );
}

/* ---------- Phương án B: Chia đôi nền sáng ---------- */

function Split(c: Ctx) {
  const { s, l, slides } = c;
  const next = slides[(s.index + 1) % slides.length];
  return (
    <section aria-labelledby={c.headingId}>
      <div
        {...c.region}
        className="relative isolate overflow-hidden bg-[linear-gradient(112deg,rgba(255,255,255,0)_38%,rgba(255,255,255,0.7)_52%,rgba(255,255,255,0)_66%),linear-gradient(100deg,#dbe9ef_0%,#e9f1f4_40%,#f5f8f9_75%,#ffffff_100%)]"
      >
        <Container className="relative">
          <div className="grid grid-cols-1 items-center gap-10 pt-8 pb-8 lg:min-h-[calc(100svh-64px)] lg:max-h-[860px] lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-14 lg:py-14">
            <div className="order-2 lg:order-1 lg:pl-14">
              <Copy c={c} tone="dark" />
              <div className="mt-10 flex items-center gap-2">
                <ol className="flex items-center gap-2">
                  {slides.map((sl, i) => (
                    <li key={sl.title}>
                      <button type="button" onClick={() => s.go(i)} aria-label={`${l.go} ${i + 1}: ${sl.eyebrow}`} aria-current={i === s.index} className="flex h-8 items-center">
                        <span className={cn("block transition-[width] duration-500 ease-standard", i === s.index ? "w-14" : "w-6")}>
                          <Bar active={i === s.index} running={s.running} cycle={s.cycle} tone="dark" />
                        </span>
                      </button>
                    </li>
                  ))}
                </ol>
                <PlayToggle c={c} tone="dark" />
                <span className="ml-auto flex gap-2 lg:hidden">
                  <RoundButton tone="dark" onClick={() => s.go(s.index - 1)} label={l.prev}>
                    <ChevronLeft className="size-5" aria-hidden="true" />
                  </RoundButton>
                  <RoundButton tone="dark" onClick={() => s.go(s.index + 1)} label={l.next}>
                    <ChevronRight className="size-5" aria-hidden="true" />
                  </RoundButton>
                </span>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-[0_30px_60px_-30px_rgba(15,38,46,0.45)] lg:aspect-[5/5.2]">
                <Photos slides={slides} index={s.index} />
              </div>
              {/* Thẻ "tiếp theo" nổi ở góc ảnh */}
              <button
                type="button"
                onClick={() => s.go(s.index + 1)}
                className="absolute -bottom-5 left-5 hidden items-center gap-3 rounded-2xl bg-white p-2 pr-5 text-left shadow-[0_18px_40px_-18px_rgba(15,38,46,0.5)] ring-1 ring-ink/5 transition-transform hover:-translate-y-0.5 sm:flex lg:-left-10"
              >
                <span className="relative block size-14 overflow-hidden rounded-xl">
                  <Image src={next.image} alt="" fill sizes="56px" className={cn("object-cover", next.flip && "-scale-x-100")} />
                </span>
                <span>
                  <span className="block text-[12px] font-semibold tracking-[0.1em] text-ink-3 uppercase">{l.upNext}</span>
                  <span className="mt-0.5 block max-w-[14rem] truncate text-[14px] font-semibold text-ink">{next.eyebrow}</span>
                </span>
              </button>
            </div>
          </div>

          <RoundButton tone="dark" onClick={() => s.go(s.index - 1)} label={l.prev} className="absolute top-1/2 left-2 hidden -translate-y-1/2 lg:inline-flex">
            <ChevronLeft className="size-5" aria-hidden="true" />
          </RoundButton>
          <RoundButton tone="dark" onClick={() => s.go(s.index + 1)} label={l.next} className="absolute top-1/2 right-2 hidden -translate-y-1/2 xl:-right-4 lg:inline-flex">
            <ChevronRight className="size-5" aria-hidden="true" />
          </RoundButton>
        </Container>
      </div>
      <Container>{c.children}</Container>
    </section>
  );
}

/* ---------- Phương án C: Thẻ kính nổi ---------- */

function Glass(c: Ctx) {
  const { s, l, slides } = c;
  const upcoming = [1, 2, 3].map((k) => (s.index + k) % slides.length);
  return (
    <section aria-labelledby={c.headingId} className="pt-3 md:pt-4">
      <Container>
        <div
          {...c.region}
          className="relative isolate flex min-h-[720px] flex-col justify-end overflow-hidden rounded-[24px] bg-night p-3 md:p-6 lg:h-[min(88vh,800px)] lg:min-h-[660px]"
        >
          <Photos
            slides={slides}
            index={s.index}
            className="-z-10"
            gradient="-z-10 bg-[linear-gradient(0deg,rgba(15,38,46,0.6)_0%,rgba(15,38,46,0)_55%)]"
          />
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="on-night rounded-[20px] bg-night/55 p-6 ring-1 ring-white/15 backdrop-blur-xl md:p-9 lg:max-w-[600px]">
              <Copy c={c} compactMobile />
              <div className="mt-8 flex items-center gap-3">
                <span className="w-16 sm:w-24">
                  <Bar active running={s.running} cycle={s.cycle} />
                </span>
                <span className="text-[13px] font-semibold whitespace-nowrap text-white/70 tabular-nums">
                  {String(s.index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                </span>
                <span className="ml-auto flex items-center gap-2">
                  <PlayToggle c={c} />
                  <RoundButton onClick={() => s.go(s.index - 1)} label={l.prev}>
                    <ChevronLeft className="size-5" aria-hidden="true" />
                  </RoundButton>
                  <RoundButton onClick={() => s.go(s.index + 1)} label={l.next}>
                    <ChevronRight className="size-5" aria-hidden="true" />
                  </RoundButton>
                </span>
              </div>
            </div>
            {/* Ba ảnh kế tiếp, bấm để nhảy tới */}
            <ul className="hidden gap-3 lg:flex">
              {upcoming.map((i) => {
                const sl = slides[i];
                return (
                  <li key={sl.title}>
                    <button
                      type="button"
                      onClick={() => s.go(i)}
                      aria-label={`${l.go} ${i + 1}: ${sl.eyebrow}`}
                      className="group relative block h-[200px] w-[150px] overflow-hidden rounded-2xl text-left ring-1 ring-white/20 transition-transform duration-300 hover:-translate-y-1"
                    >
                      <Image src={sl.image} alt="" fill sizes="150px" className={cn("object-cover transition-transform duration-500 group-hover:scale-105", sl.flip && "-scale-x-100")} />
                      <span className="absolute inset-0 bg-[linear-gradient(0deg,rgba(15,38,46,0.9)_0%,rgba(15,38,46,0)_60%)]" />
                      <span className="absolute inset-x-3 bottom-3 text-[12px] leading-[1.3] font-semibold text-white">
                        <span className="block text-white/60 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                        {sl.eyebrow}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {c.children}
      </Container>
    </section>
  );
}

/** Ảnh thật có khung bo góc, dùng xen giữa các mục nội dung. */
export function Photo({
  src,
  alt,
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority,
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-xl bg-surface", className)}>
      <Image src={src} alt={alt} fill sizes={sizes} placeholder="blur" priority={priority} className="object-cover" />
    </div>
  );
}
