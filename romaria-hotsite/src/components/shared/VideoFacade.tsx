"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./VideoFacade.module.css";

type VideoFacadeProps = {
  videoId: string;
  title: string;
  poster?: string;
};

export default function VideoFacade({ videoId, title, poster }: VideoFacadeProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Fallback for poster if not provided
  const thumbnailUrl = poster || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (isLoaded) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ width: "100%", height: "100%", border: 0 }}
      />
    );
  }

  return (
    <div 
      className={styles.videoFacade} 
      onClick={() => setIsLoaded(true)}
      aria-label={`Reproduzir vídeo: ${title}`}
      role="button"
    >
      <Image
        src={thumbnailUrl}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{ objectFit: "cover" }}
        priority={false}
      />
      <div className={styles.playButtonOverlay}>
        <div className={styles.playIcon}>
          <svg viewBox="0 0 24 24" width="40" height="40" fill="white">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
