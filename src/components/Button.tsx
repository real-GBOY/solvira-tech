import type { ComponentProps } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "light" | "ghost-light" | "clay";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-teal text-ivory hover:bg-teal-deep",
  outline: "border border-teal bg-transparent text-teal hover:bg-teal hover:text-ivory",
  light: "bg-ivory text-teal hover:bg-[#e9e3d3]",
  "ghost-light": "border border-[#8fa7a2] bg-transparent text-ivory hover:border-ivory",
  clay: "bg-clay font-semibold text-[#1b1e1b] hover:bg-[#d5937b]",
};

interface ButtonProps extends ComponentProps<typeof motion.button> {
  variant?: Variant;
  compact?: boolean;
}

export function Button({ variant = "primary", compact, className, children, ...rest }: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={cn(
        "inline-flex items-center justify-center gap-3 rounded-full font-medium transition-colors duration-200",
        compact ? "px-5 py-[11px] text-sm" : "min-h-[52px] px-[26px] text-base",
        VARIANTS[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
