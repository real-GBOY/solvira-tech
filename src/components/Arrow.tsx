import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

/** Directional arrow that mirrors in right-to-left layouts. */
export function Arrow({ className }: { className?: string }) {
  return <ArrowRight aria-hidden="true" size={16} strokeWidth={1.75} className={cn("inline-block flex-none rtl:-scale-x-100", className)} />;
}
