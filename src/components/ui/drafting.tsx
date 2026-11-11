import * as React from "react";
import { cn } from "@/lib/utils";

/** Container chuẩn: tối đa 1240px nội dung, lề 16 / 32px. */
export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-[1304px] px-4 md:px-8", className)} {...props} />;
}

/** Section với khoảng cách dọc chuẩn và id để điều hướng. */
export function Section({ className, ...props }: React.ComponentProps<"section">) {
  return <section className={cn("py-16 md:py-24 xl:py-32", className)} {...props} />;
}

/** Tiêu đề section: h2 + đoạn mở đầu. */
export function SectionHeading({
  id,
  title,
  sub,
  className,
}: {
  id?: string;
  title: string;
  sub?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-[44rem]", className)}>
      <h2
        id={id}
        className="text-[30px] leading-[1.2] font-semibold tracking-[-0.01em] text-balance md:text-[38px] xl:text-[44px] [:lang(ja)_&]:leading-[1.4] [:lang(ja)_&]:tracking-normal"
      >
        {title}
      </h2>
      {sub ? (
        <p className="mt-4 max-w-[68ch] text-lg leading-[1.6] text-ink-2 md:text-xl [:lang(ja)_&]:leading-[1.85]">
          {sub}
        </p>
      ) : null}
    </div>
  );
}

/** Dấu góc căn chỉnh của tờ bản vẽ. Đặt trong phần tử có `relative`. */
export function CornerMarks({ className }: { className?: string }) {
  const base = "pointer-events-none absolute size-3 border-ink";
  return (
    <span aria-hidden="true" className={className}>
      <span className={cn(base, "-top-px -left-px border-t-[1.5px] border-l-[1.5px]")} />
      <span className={cn(base, "-top-px -right-px border-t-[1.5px] border-r-[1.5px]")} />
      <span className={cn(base, "-bottom-px -left-px border-b-[1.5px] border-l-[1.5px]")} />
      <span className={cn(base, "-right-px -bottom-px border-r-[1.5px] border-b-[1.5px]")} />
    </span>
  );
}

/** "Tờ bản vẽ": nền giấy nổi, viền mảnh, dấu góc. */
export function Sheet({
  className,
  children,
  marks = true,
  ...props
}: React.ComponentProps<"div"> & { marks?: boolean }) {
  return (
    <div
      className={cn("relative rounded-sheet border border-rule bg-paper-raised", className)}
      {...props}
    >
      {marks ? <CornerMarks /> : null}
      {children}
    </div>
  );
}

/** Đường kích thước dùng làm vạch chia: đường mảnh với hai vạch chặn ở đầu. */
export function DimensionRule({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("relative h-3", className)}>
      <span className="absolute inset-x-0 top-1/2 h-px bg-rule" />
      <span className="absolute top-0 left-0 h-3 w-px bg-rule-strong" />
      <span className="absolute top-0 right-0 h-3 w-px bg-rule-strong" />
    </div>
  );
}

type BadgeTone = "neutral" | "ai" | "success" | "warning" | "danger";

const badgeTones: Record<BadgeTone, string> = {
  neutral: "bg-paper-sunken text-ink-2",
  ai: "bg-redline-tint text-redline",
  success: "bg-success-tint text-success",
  warning: "bg-warning-tint text-warning",
  danger: "bg-danger-tint text-danger",
};

/** Nhãn revision. */
export function Badge({
  tone = "neutral",
  className,
  ...props
}: React.ComponentProps<"span"> & { tone?: BadgeTone }) {
  return (
    <span
      className={cn(
        "inline-flex min-h-6 items-center gap-1.5 rounded-control px-2 text-caption leading-[1.45] font-medium",
        badgeTones[tone],
        className,
      )}
      {...props}
    />
  );
}

/** Ô placeholder cho dữ liệu chưa có (logo, số liệu, trích dẫn). */
export function Placeholder({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-control border border-dashed border-rule-strong px-2 text-ink-3",
        className,
      )}
      {...props}
    />
  );
}

/** Có phải chuỗi placeholder dạng [ ... ] không. */
export function isPlaceholder(text: string) {
  return /^\[.*\]%?$/.test(text.trim());
}
