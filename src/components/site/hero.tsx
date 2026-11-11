import { buttonVariants } from "@/components/ui/button";
import { Badge, Container, Sheet } from "@/components/ui/drafting";
import type { Dictionary } from "@/i18n/dictionaries/vi";
import { cn } from "@/lib/utils";

export function Hero({ t }: { t: Dictionary }) {
  const h = t.hero;
  return (
    <section aria-labelledby="hero-title" className="pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div>
          <Badge tone="ai">{h.badge}</Badge>
          <h1
            id="hero-title"
            className="mt-5 text-[40px] leading-[1.15] font-semibold tracking-[-0.015em] text-balance sm:text-5xl lg:text-[56px] xl:text-[64px] [:lang(ja)_&]:text-[34px] [:lang(ja)_&]:leading-[1.35] [:lang(ja)_&]:tracking-normal sm:[:lang(ja)_&]:text-[44px] xl:[:lang(ja)_&]:text-[52px]"
          >
            {h.title}
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg leading-[1.6] text-ink-2 md:text-xl [:lang(ja)_&]:leading-[1.85]">
            {h.sub}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className={buttonVariants({ variant: "primary", size: "lg" })}>
              {h.cta1}
            </a>
            <a href="#modules" className={buttonVariants({ variant: "outline", size: "lg" })}>
              {h.cta2}
            </a>
          </div>
          <p className="mt-6 max-w-[56ch] text-small text-ink-3">{h.formats}</p>
        </div>

        <figure className="m-0">
          <Sheet className="shadow-sheet p-2 sm:p-3">
            <BracketDrawing label={h.drawing.label} partName={h.drawing.partName} />
          </Sheet>
          <figcaption className="mt-5 grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
            <div>
              <p className="text-base font-semibold text-ink">{h.drawing.reviewTitle}</p>
              <ol className="mt-3 space-y-2">
                {h.drawing.findings.map((f, i) => (
                  <li key={f} className="flex gap-3 text-small text-ink-2">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-redline text-[12px] leading-none font-semibold text-white tabular-nums"
                    >
                      {i + 1}
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-3 text-small text-ink-2">{h.drawing.similar}</p>
            </div>
            <p className="text-caption text-ink-3 md:text-right">{h.drawing.note}</p>
          </figcaption>
        </figure>
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
  const thin = { stroke: "var(--color-ink-2)", strokeWidth: 0.75, fill: "none" };
  const center = { ...thin, strokeDasharray: "14 3 2 3" };
  const dimText = "fill-ink-2 text-[11px] tabular-nums";

  return (
    <svg
      viewBox="0 0 600 440"
      role="img"
      aria-label={label}
      className="block h-auto w-full"
      style={{ fontFamily: "var(--font-plex), sans-serif" }}
    >
      {/* Khung giấy */}
      <rect x="10" y="10" width="580" height="420" fill="none" stroke="var(--color-ink)" strokeWidth="1.5" />

      {/* Khung tên */}
      <g stroke="var(--color-ink)" strokeWidth="1" fill="none">
        <rect x="372" y="356" width="218" height="74" />
        <line x1="372" y1="393" x2="590" y2="393" />
        <line x1="470" y1="356" x2="470" y2="430" />
      </g>
      <text x="380" y="380" className="fill-ink text-[13px]">{partName}</text>
      <text x="478" y="381" className="fill-ink text-[16px] font-semibold tabular-nums">BR-2041</text>
      <text x="380" y="416" className="fill-ink-2 text-[12px]">SS400</text>
      <text x="478" y="416" className="fill-ink-2 text-[12px] tabular-nums">1:1</text>

      {/* Chi tiết: tấm giá đỡ */}
      <path
        d="M 100 90 H 410 Q 420 90 420 100 V 290 Q 420 300 410 300 H 100 Q 90 300 90 290 V 100 Q 90 90 100 90 Z"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="2"
      />
      {/* Hốc phay, góc trong sắc */}
      <rect x="150" y="135" width="110" height="120" fill="none" stroke="var(--color-ink)" strokeWidth="2" />
      {/* Lỗ lớn Ø24 */}
      <circle cx="340" cy="195" r="26" fill="none" stroke="var(--color-ink)" strokeWidth="2" />
      {/* Lỗ bắt vít */}
      <circle cx="390" cy="118" r="8" fill="none" stroke="var(--color-ink)" strokeWidth="2" />
      <circle cx="390" cy="272" r="8" fill="none" stroke="var(--color-ink)" strokeWidth="2" />

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
          <path d="M 0 2 L 10 5 L 0 8 z" fill="var(--color-ink-2)" />
        </marker>
      </defs>

      {/* Nét khoanh đỏ của AI: khoảnh khắc chuyển động duy nhất của trang */}
      <g fill="none" stroke="var(--color-redline)" strokeWidth="2.25" strokeLinecap="round">
        <path className="redline-draw" style={{ animationDelay: "500ms" }} pathLength={1} d={loop(262, 133, 26, 22)} />
        <path className="redline-draw" style={{ animationDelay: "1100ms" }} pathLength={1} d={loop(120, 46, 46, 16)} />
      </g>
      <g className={cn("redline-fade")} style={{ animationDelay: "1000ms" }}>
        <circle cx="296" cy="146" r="10" fill="var(--color-redline)" />
        <text x="296" y="150" textAnchor="middle" className="fill-white text-[12px] font-semibold">1</text>
      </g>
      <g className="redline-fade" style={{ animationDelay: "1600ms" }}>
        <circle cx="176" cy="40" r="10" fill="var(--color-redline)" />
        <text x="176" y="44" textAnchor="middle" className="fill-white text-[12px] font-semibold">2</text>
      </g>
    </svg>
  );
}
