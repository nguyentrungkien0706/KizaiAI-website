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

const ui = {
  vi: { prev: "Ảnh trước", next: "Ảnh tiếp theo", pause: "Tạm dừng tự chuyển", play: "Tự chuyển ảnh", go: "Tới ảnh", region: "Trình chiếu giới thiệu" },
  ja: { prev: "前へ", next: "次へ", pause: "自動再生を一時停止", play: "自動再生", go: "スライド", region: "紹介スライド" },
  en: { prev: "Previous slide", next: "Next slide", pause: "Pause autoplay", play: "Play autoplay", go: "Go to slide", region: "Introduction slideshow" },
} as const;

const DURATION = 6000;

/**
 * Hero dạng trình chiếu: 5 khung tự chuyển, chữ bên trái, ảnh thật phủ toàn khối.
 * Mũi tên hai bên, vạch tiến trình ở dưới (vạch đang chạy dài hơn và tự lấp đầy).
 * Dừng khi rê chuột, khi tab bị ẩn và khi người dùng chọn giảm chuyển động.
 */
export function HeroSlider({
  slides,
  locale,
  headingId,
  primary,
  secondary,
  footer,
}: {
  slides: HeroSlide[];
  locale: Locale;
  headingId: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
  footer?: React.ReactNode;
}) {
  const l = ui[locale];
  const [index, setIndex] = React.useState(0);
  const [playing, setPlaying] = React.useState(true);
  const [hover, setHover] = React.useState(false);
  const [cycle, setCycle] = React.useState(0);
  const touchX = React.useRef<number | null>(null);
  const n = slides.length;

  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
  }, []);

  const go = React.useCallback(
    (to: number) => {
      setIndex(((to % n) + n) % n);
      setCycle((c) => c + 1);
    },
    [n],
  );

  const running = playing && !hover;
  React.useEffect(() => {
    if (!running) return;
    const id = window.setTimeout(() => go(index + 1), DURATION);
    return () => window.clearTimeout(id);
  }, [running, index, cycle, go]);

  React.useEffect(() => {
    const onVis = () => setHover(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const s = slides[index];
  const Heading = index === 0 ? "h1" : "p";

  return (
    <section aria-labelledby={headingId} className="pt-3 md:pt-4">
      <Container>
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label={l.region}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
            touchX.current = null;
          }}
          className="on-night relative isolate flex min-h-[640px] flex-col overflow-hidden rounded-xl bg-night text-on-night-2 md:min-h-[600px] lg:h-[min(86vh,760px)] lg:min-h-[620px]"
        >
          {/* Ảnh: xếp chồng, chuyển mờ và phóng nhẹ (Ken Burns) */}
          {slides.map((sl, i) => (
            <div
              key={sl.title}
              aria-hidden={i !== index}
              className={cn(
                "absolute inset-0 -z-10 transition-opacity duration-[1100ms] ease-standard",
                i === index ? "opacity-100" : "opacity-0",
                sl.flip && "-scale-x-100",
              )}
            >
              <Image
                src={sl.image}
                alt={i === index ? sl.alt : ""}
                fill
                priority={i === 0}
                placeholder="blur"
                sizes="(min-width: 1328px) 1280px, 100vw"
                className={cn(
                  "object-cover object-[65%_center] motion-safe:transition-transform motion-safe:duration-[7000ms] motion-safe:ease-linear",
                  i === index ? "scale-100" : "scale-[1.08]",
                )}
              />
            </div>
          ))}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(15,38,46,0.15)_0%,rgba(15,38,46,0.55)_45%,rgba(15,38,46,0.96)_100%)] md:bg-[linear-gradient(90deg,rgba(15,38,46,0.96)_0%,rgba(15,38,46,0.82)_34%,rgba(15,38,46,0.25)_68%,rgba(15,38,46,0.1)_100%)]"
          />

          {/* Chữ */}
          <div className="flex flex-1 items-end px-6 pt-40 pb-6 md:items-center md:px-12 md:pt-16 md:pb-24 xl:px-16">
            <div key={index} aria-live="polite" className="max-w-[40rem] motion-safe:animate-[heroIn_700ms_var(--ease-standard)_both] md:w-[min(640px,52%)]">
              <p className="flex items-center gap-3 text-[13px] font-semibold tracking-[0.14em] text-white/80 uppercase [:lang(ja)_&]:tracking-[0.04em]">
                <span className="tabular-nums text-white">{String(index + 1).padStart(2, "0")}</span>
                <span aria-hidden="true" className="h-px w-8 bg-white/50" />
                {s.eyebrow}
              </p>
              <Heading
                id={headingId}
                className={cn(
                  displayClass,
                  "mt-5 text-[34px] leading-[1.12] text-white sm:text-[46px] xl:text-[58px] [:lang(ja)_&]:text-[28px] [:lang(ja)_&]:leading-[1.4] sm:[:lang(ja)_&]:text-[38px] xl:[:lang(ja)_&]:text-[46px]",
                )}
              >
                {s.title}
              </Heading>
              <p className="mt-5 max-w-[34rem] text-[16px] leading-[1.6] font-medium text-white/85 md:text-[17px]">{s.text}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={primary.href} className={buttonVariants({ variant: "light", size: "lg" })}>
                  {primary.label}
                  <ChevronRight aria-hidden="true" />
                </a>
                {secondary ? (
                  <a href={secondary.href} className={buttonVariants({ variant: "ghostNight", size: "lg" })}>
                    {secondary.label}
                  </a>
                ) : null}
              </div>
            </div>
          </div>

          {/* Điều khiển */}
          <div className="flex items-center justify-between gap-4 px-6 pb-6 md:absolute md:inset-x-0 md:bottom-0 md:px-12 md:pb-8 xl:px-16">
            <ol className="flex items-center gap-2">
              {slides.map((sl, i) => (
                <li key={sl.title}>
                  <button
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`${l.go} ${i + 1}: ${sl.eyebrow}`}
                    aria-current={i === index}
                    className="group flex h-8 items-center"
                  >
                    <span
                      className={cn(
                        "relative block h-[3px] overflow-hidden rounded-full bg-white/30 transition-[width] duration-500 ease-standard group-hover:bg-white/50",
                        i === index ? "w-12 md:w-16" : "w-5 md:w-7",
                      )}
                    >
                      {i === index ? (
                        <span
                          key={cycle}
                          className="absolute inset-y-0 left-0 w-full origin-left bg-white"
                          style={{
                            animation: `heroBar ${DURATION}ms linear both`,
                            animationPlayState: running ? "running" : "paused",
                          }}
                        />
                      ) : null}
                    </span>
                  </button>
                </li>
              ))}
            </ol>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPlaying((p) => !p)}
                aria-label={playing ? l.pause : l.play}
                className="inline-flex size-11 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {playing ? <Pause className="size-4" aria-hidden="true" /> : <Play className="size-4" aria-hidden="true" />}
              </button>
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label={l.prev}
                className="inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/25 backdrop-blur-sm transition-colors hover:bg-white hover:text-night"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label={l.next}
                className="inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/25 backdrop-blur-sm transition-colors hover:bg-white hover:text-night"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        {footer}
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
