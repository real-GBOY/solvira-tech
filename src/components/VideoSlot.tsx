import { Play } from "lucide-react";
import { ImageSlot } from "./ImageSlot";

interface VideoSlotProps {
  /** Video URL. Until supplied, the slot renders a poster panel with a play mark. */
  src?: string;
  poster?: string;
  title: string;
}

export function VideoSlot({ src, poster, title }: VideoSlotProps) {
  if (src) {
    return (
      <video src={src} poster={poster} controls preload="none" title={title} className="absolute inset-0 size-full object-cover" />
    );
  }
  return (
    <>
      <ImageSlot src={poster} alt="" placeholder="Poster frame for the Solvira story video." />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <span aria-hidden="true" className="flex size-16 items-center justify-center rounded-full bg-teal text-ivory">
          <Play aria-hidden="true" size={22} fill="currentColor" className="ms-0.5" />
        </span>
        <span className="font-mono text-[11px] tracking-[0.12em] text-muted">VIDEO COMING SOON</span>
      </div>
    </>
  );
}
