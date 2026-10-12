import { cn } from "@/lib/cn";

interface ImageSlotProps {
  /** Photo URL. Until supplied, the slot renders the art-direction brief on a striped placeholder. */
  src?: string;
  alt?: string;
  placeholder: string;
  className?: string;
}

export function ImageSlot({ src, alt = "", placeholder, className }: ImageSlotProps) {
  if (src) return <img src={src} alt={alt} className={cn("absolute inset-0 size-full object-cover", className)} />;
  return (
    <div
      role="img"
      aria-label={placeholder}
      className={cn("placeholder-stripes absolute inset-0 grid place-items-center p-6", className)}
    >
      <p className="max-w-[28ch] text-center font-mono text-[11px] leading-relaxed tracking-[0.06em] text-muted">
        {placeholder}
      </p>
    </div>
  );
}
