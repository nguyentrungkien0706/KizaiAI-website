import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Button theo Design System "Redline" (MASTER.md, mục 6).
 * Disabled dùng viền nét đứt, như cạnh khuất trên bản vẽ kỹ thuật.
 */
export const buttonVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-control font-semibold",
    "transition-colors duration-[120ms] ease-standard",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
    "disabled:cursor-not-allowed disabled:border disabled:border-dashed disabled:border-rule-strong disabled:bg-paper-sunken disabled:text-ink-3",
    "aria-disabled:cursor-not-allowed aria-disabled:border aria-disabled:border-dashed aria-disabled:border-rule-strong aria-disabled:bg-paper-sunken aria-disabled:text-ink-3",
    "[&_svg]:size-5 [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-redline text-white hover:bg-redline-hover active:translate-y-px active:bg-redline-active",
        secondary:
          "bg-ink text-paper hover:bg-ink-hover active:translate-y-px active:bg-ink-active",
        outline:
          "border border-rule-strong bg-transparent text-ink hover:border-ink hover:bg-paper-raised active:bg-paper-sunken",
        link: "h-auto rounded-none px-0 font-medium text-ink underline decoration-rule-strong decoration-1 underline-offset-4 hover:text-redline hover:decoration-redline disabled:border-0 disabled:bg-transparent disabled:no-underline",
      },
      size: {
        md: "h-11 px-5 text-base",
        lg: "h-13 px-7 text-[17px]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
    loadingText?: string;
  };

export function Button({
  className,
  variant,
  size,
  loading = false,
  loadingText,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? (
        <>
          <LoaderCircle className="animate-spin" aria-hidden="true" />
          {loadingText ?? children}
        </>
      ) : (
        children
      )}
    </button>
  );
}
