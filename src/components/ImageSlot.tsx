import { cn } from "@/lib/cn";

interface ImageSlotProps {
  /** Photo URL. Until supplied, the slot renders a decorative brand panel. */
  src?: string;
  alt?: string;
  /** Art-direction brief for the photo this slot is waiting on. Documentation only; never rendered. */
  placeholder: string;
  className?: string;
}

export function ImageSlot({ src, alt = "", className }: ImageSlotProps) {
  if (src) return <img src={src} alt={alt} className={cn("absolute inset-0 size-full object-cover", className)} />;
  return (
    <div
      aria-hidden="true"
      className={cn("absolute inset-0 overflow-hidden bg-gradient-to-br from-sage-tint via-cream to-parchment", className)}
    >
      <svg className="absolute inset-0 size-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" fill="none">
        <circle cx="200" cy="150" r="140" stroke="#d2ccbe" strokeWidth="1" />
        <circle cx="200" cy="150" r="92" stroke="#d2ccbe" strokeWidth="1" />
        <circle cx="200" cy="150" r="24" fill="#c98268" opacity="0.85" />
      </svg>
    </div>
  );
}
