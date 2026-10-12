import { cn } from "@/lib/cn";

/** Numbered editorial eyebrow: "01 ── THE HUMAN INSIGHT". */
export function SectionLabel({ n, children, className }: { n: string; children: string; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3 font-mono text-xs tracking-[0.14em] text-muted", className)}>
      <span>{n}</span>
      <span className="h-px w-7 bg-current" />
      <span>{children}</span>
    </div>
  );
}
