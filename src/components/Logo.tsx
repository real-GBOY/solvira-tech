import { cn } from "@/lib/cn";

export function Logo({ className, textClassName }: { className?: string; textClassName?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="size-[9px] rounded-full bg-clay" />
      <span className={cn("font-serif text-[22px] font-normal tracking-[0.24em]", textClassName)}>SOLVIRA</span>
    </span>
  );
}
