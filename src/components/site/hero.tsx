import Image from "next/image";
import { ChevronRight } from "lucide-react";
import heroPhoto from "@/assets/images/hero-cnc.webp";
import { partners } from "@/lib/partners";
import { buttonVariants } from "@/components/ui/button";
import { Badge, Container, displayClass } from "@/components/ui/drafting";
import type { Dictionary } from "@/i18n/dictionaries/vi";
import { cn } from "@/lib/utils";

export function Hero({ t }: { t: Dictionary }) {
  const h = t.hero;
  const c = t.customers;
  return (
    <section aria-labelledby="hero-title" className="pt-3 md:pt-4">
      <Container>
        <div className="on-night relative overflow-hidden rounded-xl bg-night text-on-night-2">
          {/* Ảnh xưởng CNC làm nền, phủ tối dần sang trái để chữ luôn đọc rõ */}
          <Image
            src={heroPhoto}
            alt={h.photoAlt}
            fill
            priority
            placeholder="blur"
            sizes="(min-width: 1328px) 1280px, 100vw"
            className="object-cover object-[70%_center] opacity-80"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,38,46,0.55)_0%,rgba(15,38,46,0.92)_55%,#0f262e_100%)] lg:bg-[linear-gradient(90deg,#0f262e_0%,rgba(15,38,46,0.9)_38%,rgba(15,38,46,0.45)_70%,rgba(15,38,46,0.6)_100%)]"
          />
          <div className="relative grid grid-cols-1 items-center gap-10 px-6 pt-12 pb-8 md:px-12 md:pt-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-12 lg:py-20 xl:px-16">
            <div>
              <Badge tone="night">{h.badge}</Badge>
              <h1
                id="hero-title"
                className={cn(
                  displayClass,
                  "mt-6 text-[36px] text-white sm:text-[48px] xl:text-[56px] [:lang(ja)_&]:text-[32px] sm:[:lang(ja)_&]:text-[42px] xl:[:lang(ja)_&]:text-[50px]",
                )}
              >
                {h.title}
              </h1>
              <p className="mt-6 max-w-[34rem] text-[17px] leading-[1.55] font-medium text-on-night-2">{h.sub}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className={buttonVariants({ variant: "light", size: "lg" })}>
                  {h.cta1}
                  <ChevronRight aria-hidden="true" />
                </a>
                <a href="#modules" className={buttonVariants({ variant: "ghostNight", size: "lg" })}>
                  {h.cta2}
                </a>
              </div>
            </div>

            <figure className="m-0 rounded-xl bg-night/80 p-4 ring-1 ring-white/10 backdrop-blur-sm md:p-6">
              <BracketDrawing label={h.drawing.label} partName={h.drawing.partName} />
              <figcaption className="mt-4 rounded-lg bg-night-2 p-4 text-[14px] ring-1 ring-night-line md:p-5">
                <p className="font-semibold text-white">{h.drawing.reviewTitle}</p>
                <ol className="mt-2.5 space-y-1.5">
                  {h.drawing.findings.map((f, i) => (
                    <li key={f} className="flex gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 inline-flex size-[18px] shrink-0 items-center justify-center rounded-full bg-redline-bright text-[11px] leading-none font-semibold text-night"
                      >
                        {i + 1}
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-2.5">{h.drawing.similar}</p>
                <p className="mt-2.5 text-[12px]">{h.drawing.note}</p>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Dải logo đối tác và khách hàng thật, lấy từ kizai.vn */}
        <div id="customers-strip" className="py-12 md:py-16">
          <p className="text-center text-[15px] text-ink-3">{c.title}</p>
          <ul
            aria-label={c.logosLabel}
            className="mx-auto mt-8 grid max-w-[1120px] grid-cols-3 items-center gap-x-6 gap-y-7 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 lg:gap-x-8"
          >
            {partners.map((p) => (
              <li key={p.id} className="flex h-10 items-center justify-center">
                <Image
                  src={p.logo}
                  alt={p.name}
                  sizes="120px"
                  className="max-h-10 w-auto max-w-full object-contain opacity-60 mix-blend-multiply grayscale transition duration-200 hover:opacity-100 hover:grayscale-0"
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

/** Loop vẽ tay quanh một điểm, dùng cho nét khoanh đỏ. */
function loop(cx: number, cy: number, rx: number, ry: number) {
  return [
    `M ${cx - rx * 0.9} ${cy - ry * 0.35}`,
    `C ${cx - rx * 0.8} ${cy - ry * 1.15}, ${cx + rx * 0.85} ${cy - ry * 1.2}, ${cx + rx} ${cy - ry * 0.15}`,
    `C ${cx + rx * 1.1} ${cy + ry * 0.75}, ${cx - rx * 0.35} ${cy + ry * 1.15}, ${cx - rx * 0.9} ${cy + ry * 0.55}`,
    `C ${cx - rx * 1.1} ${cy + ry * 0.15}, ${cx - rx * 1.0} ${cy - ry * 0.3}, ${cx - rx * 0.65} ${cy - ry * 0.65}`,
  ].join(" ");
}

function BracketDrawing({ label, partName }: { label: string; partName: string }) {
  const thin = { stroke: "rgb(255 255 255 / 0.55)", strokeWidth: 0.75, fill: "none" };
  const center = { ...thin, strokeDasharray: "14 3 2 3" };
  const dimText = "fill-white/70 text-[11px] tabular-nums";

  return (
    <svg
      viewBox="0 0 600 440"
      role="img"
      aria-label={label}
      className="block h-auto w-full"
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      {/* Khung giấy */}
      <rect x="10" y="10" width="580" height="420" rx="6" fill="rgb(255 255 255 / 0.03)" stroke="rgb(255 255 255 / 0.35)" strokeWidth="1" />

      {/* Khung tên */}
      <g stroke="rgb(255 255 255 / 0.7)" strokeWidth="1" fill="none">
        <rect x="372" y="356" width="218" height="74" />
        <line x1="372" y1="393" x2="590" y2="393" />
        <line x1="470" y1="356" x2="470" y2="430" />
      </g>
      <text x="380" y="380" className="fill-white/80 text-[13px]">{partName}</text>
      <text x="478" y="381" className="fill-white text-[16px] font-semibold tabular-nums">BR-2041</text>
      <text x="380" y="416" className="fill-white/60 text-[12px]">SS400</text>
      <text x="478" y="416" className="fill-white/60 text-[12px] tabular-nums">1:1</text>

      {/* Chi tiết: tấm giá đỡ */}
      <path
        d="M 100 90 H 410 Q 420 90 420 100 V 290 Q 420 300 410 300 H 100 Q 90 300 90 290 V 100 Q 90 90 100 90 Z"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
      />
      {/* Hốc phay, góc trong sắc */}
      <rect x="150" y="135" width="110" height="120" fill="none" stroke="#ffffff" strokeWidth="2" />
      {/* Lỗ lớn Ø24 */}
      <circle cx="340" cy="195" r="26" fill="none" stroke="#ffffff" strokeWidth="2" />
      {/* Lỗ bắt vít */}
      <circle cx="390" cy="118" r="8" fill="none" stroke="#ffffff" strokeWidth="2" />
      <circle cx="390" cy="272" r="8" fill="none" stroke="#ffffff" strokeWidth="2" />

      {/* Đường tâm */}
      <line x1="300" y1="195" x2="380" y2="195" {...center} />
      <line x1="340" y1="155" x2="340" y2="235" {...center} />
      <line x1="390" y1="100" x2="390" y2="290" {...center} />
      <line x1="374" y1="118" x2="406" y2="118" {...center} />
      <line x1="374" y1="272" x2="406" y2="272" {...center} />

      {/* Kích thước tổng: rộng */}
      <g {...thin}>
        <line x1="90" y1="305" x2="90" y2="338" />
        <line x1="420" y1="305" x2="420" y2="338" />
        <line x1="90" y1="332" x2="420" y2="332" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
      </g>
      <text x="255" y="327" textAnchor="middle" className={dimText}>120</text>

      {/* Kích thước tổng: cao */}
      <g {...thin}>
        <line x1="85" y1="90" x2="52" y2="90" />
        <line x1="85" y1="300" x2="52" y2="300" />
        <line x1="58" y1="90" x2="58" y2="300" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
      </g>
      <text x="52" y="195" textAnchor="middle" transform="rotate(-90 52 195)" className={dimText}>80</text>

      {/* Kích thước hốc với dung sai chặt */}
      <g {...thin}>
        <line x1="90" y1="85" x2="90" y2="50" />
        <line x1="150" y1="130" x2="150" y2="50" />
        <line x1="90" y1="56" x2="150" y2="56" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
      </g>
      <text x="120" y="50" textAnchor="middle" className={dimText}>22 ±0.01</text>

      {/* Ghi chú bán kính góc trong */}
      <g {...thin}>
        <line x1="260" y1="135" x2="292" y2="112" />
        <line x1="292" y1="112" x2="318" y2="112" />
      </g>
      <text x="296" y="107" className={dimText}>R0.5</text>

      {/* Ghi chú lỗ */}
      <g {...thin}>
        <line x1="326" y1="218" x2="306" y2="272" />
        <line x1="306" y1="272" x2="262" y2="272" />
      </g>
      <text x="264" y="267" className={dimText}>Ø24 H7</text>

      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 2 L 10 5 L 0 8 z" fill="rgb(255 255 255 / 0.55)" />
        </marker>
      </defs>

      {/* Nét khoanh đỏ của AI: khoảnh khắc chuyển động duy nhất của trang */}
      <g fill="none" stroke="var(--color-redline-bright)" strokeWidth="2.5" strokeLinecap="round">
        <path className="redline-draw" style={{ animationDelay: "500ms" }} pathLength={1} d={loop(262, 133, 26, 22)} />
        <path className="redline-draw" style={{ animationDelay: "1100ms" }} pathLength={1} d={loop(120, 46, 46, 16)} />
      </g>
      <g className="redline-fade" style={{ animationDelay: "1000ms" }}>
        <circle cx="296" cy="146" r="10" fill="var(--color-redline-bright)" />
        <text x="296" y="150" textAnchor="middle" className="fill-night text-[12px] font-semibold">1</text>
      </g>
      <g className="redline-fade" style={{ animationDelay: "1600ms" }}>
        <circle cx="176" cy="40" r="10" fill="var(--color-redline-bright)" />
        <text x="176" y="44" textAnchor="middle" className="fill-night text-[12px] font-semibold">2</text>
      </g>
    </svg>
  );
}
