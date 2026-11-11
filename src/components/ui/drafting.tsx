import * as React from "react";
import { cn } from "@/lib/utils";

/** Container: nội dung tối đa 1280px, lề 16 / 24px. */
export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-[1328px] px-4 md:px-6", className)} {...props} />;
}

/** Section với khoảng cách dọc rộng. */
export function Section({ className, ...props }: React.ComponentProps<"section">) {
  return <section className={cn("py-20 md:py-28 xl:py-32", className)} {...props} />;
}

/** Cỡ chữ tiêu đề dùng chung. */
export const displayClass =
  "font-normal tracking-[-0.02em] text-balance [:lang(ja)_&]:font-medium [:lang(ja)_&]:tracking-[0.01em]";

/** Tiêu đề section: chữ lớn nét mảnh, căn giữa hoặc căn trái. */
export function SectionHeading({
  id,
  title,
  sub,
  align = "center",
  className,
}: {
  id?: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-[52rem] text-center" : "max-w-[44rem]", className)}>
      <h2 id={id} className={cn(displayClass, "text-[34px] md:text-[44px] xl:text-[52px] [:lang(ja)_&]:text-[28px] md:[:lang(ja)_&]:text-[38px]")}>
        {title}
      </h2>
      {sub ? (
        <p className={cn("mt-5 text-lg leading-[1.55] text-ink-3", align === "center" && "mx-auto max-w-[40rem]")}>
          {sub}
        </p>
      ) : null}
    </div>
  );
}

type BadgeTone = "neutral" | "ai" | "success" | "danger" | "night";

const badgeTones: Record<BadgeTone, string> = {
  neutral: "bg-surface-2 text-ink-2",
  ai: "bg-redline-tint text-redline",
  success: "bg-success-tint text-success",
  danger: "bg-danger-tint text-danger",
  night: "bg-white/10 text-white",
};

export function Badge({
  tone = "neutral",
  className,
  ...props
}: React.ComponentProps<"span"> & { tone?: BadgeTone }) {
  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center gap-1.5 rounded-full px-3 text-[13px] leading-none font-medium",
        badgeTones[tone],
        className,
      )}
      {...props}
    />
  );
}

/** Ô placeholder cho dữ liệu chưa có. */
export function Placeholder({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-dashed border-line-strong px-1.5 text-ink-3",
        className,
      )}
      {...props}
    />
  );
}

export function isPlaceholder(text: string) {
  return /^\[.*\]%?$/.test(text.trim());
}
