"use client";

import { useEffect, useRef } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
  /** For aspect-ratio wrappers (CollectionSection cards) */
  fill?: boolean;
}

/**
 * Loads the video src only when the element enters the viewport.
 * Falls back gracefully if IntersectionObserver is unavailable.
 */
export default function LazyVideo({ src, className, fill }: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (!("IntersectionObserver" in window)) {
      // Fallback: load immediately
      video.src = src;
      video.load();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.src = src;
            video.load();
            observer.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      className={className}
      style={fill ? { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" } : undefined}
    />
  );
}
