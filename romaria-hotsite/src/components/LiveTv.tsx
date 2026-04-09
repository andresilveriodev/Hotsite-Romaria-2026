"use client";

import { useEffect, useRef } from "react";

const PORTAL_PAIETERNO_LIVE_URL = "https://video09.logicahost.com.br/paieterno/paieterno/playlist.m3u8";

type LiveTvProps = {
  src?: string;
  poster?: string;
  title?: string;
  fallbackEmbedUrl?: string;
};

export default function LiveTv({
  src = process.env.NEXT_PUBLIC_LIVE_TV_SRC ?? PORTAL_PAIETERNO_LIVE_URL,
  poster = "/figma-assets/live.jpg",
  title = "TV Pai Eterno ao vivo",
  fallbackEmbedUrl = "https://www.youtube.com/embed/yJBT4yVhwPw",
}: LiveTvProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hasStream = Boolean(src);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    let hls: any;

    const initHls = async () => {
      const Hls = (await import("hls.js")).default;
      
      const tryPlay = () => {
        video.play().catch(() => {});
      };

      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
        video.addEventListener("loadedmetadata", tryPlay);
        return;
      }

      if (Hls.isSupported()) {
        hls = new Hls({
          autoStartLoad: true,
          enableWorker: true,
        });

        hls.loadSource(src);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, tryPlay);
      }
    };

    initHls();

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return (
    <>
      {hasStream ? (
        <video
          ref={videoRef}
          controls
          autoPlay
          muted
          playsInline
          poster={poster}
          preload="metadata"
          aria-label={title}
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
    </>
  );
}
