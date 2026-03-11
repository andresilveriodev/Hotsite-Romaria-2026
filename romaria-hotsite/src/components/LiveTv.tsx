"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";

type LiveTvProps = {
  src?: string;
  poster?: string;
  title?: string;
  fallbackEmbedUrl?: string;
};

export default function LiveTv({
  src = process.env.NEXT_PUBLIC_LIVE_TV_SRC ?? "",
  poster = "/figma-assets/live.jpg",
  title = "TV ao Vivo",
  fallbackEmbedUrl = "https://www.youtube.com/embed/OkZUJrsQLsQ?autoplay=1&mute=1&rel=0",
}: LiveTvProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hasStream = Boolean(src);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      return;
    }

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);

      return () => {
        hls.destroy();
      };
    }
  }, [src]);

  return (
    <div>
      <h3>{title}</h3>
      <div>
        {hasStream ? (
          <video
            ref={videoRef}
            controls
            autoPlay
            muted
            playsInline
            poster={poster}
            preload="metadata"
          />
        ) : (
          <iframe
            src={fallbackEmbedUrl}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}
