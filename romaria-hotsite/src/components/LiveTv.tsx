"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";

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

    const tryPlay = () => {
      video
        .play()
        .catch(() => {
          // Ignore autoplay rejections and keep controls available for manual start.
        });
    };

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.addEventListener("loadedmetadata", tryPlay);

      return () => {
        video.removeEventListener("loadedmetadata", tryPlay);
      };
    }

    if (!Hls.isSupported()) {
      return;
    }

    const hls = new Hls({
      autoStartLoad: true,
      enableWorker: true,
    });

    hls.loadSource(src);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, tryPlay);

    return () => {
      hls.destroy();
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
