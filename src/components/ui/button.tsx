import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

/** Button theo Design System v0.2 "Studio" (MASTER.md, mục 6). */
export const buttonVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold tracking-[-0.005em]",
    "transition-colors duration-[120ms] ease-standard",
    "disabled:cursor-not-allowed disabled:bg-surface disabled:text-ink-3",
    "[&_svg]:size-4 [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        primary: "bg-ink text-white hover:bg-ink-hover active:bg-black",
        secondary: "bg-surface-2 text-ink hover:bg-surface-3 active:bg-surface-3",
        light: "bg-white text-ink hover:bg-surface-2 active:bg-surface-3",
        ghostNight: "bg-white/10 text-white hover:bg-white/20 active:bg-white/25",
        link: "h-auto rounded-none px-0 font-medium text-ink underline decoration-line-strong underline-offset-4 hover:decoration-ink disabled:bg-transparent",
      },
      size: {
        md: "h-11 px-4 text-[15px]",
        lg: "h-12 px-5 text-base",
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
