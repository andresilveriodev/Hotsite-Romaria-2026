"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/app/page.module.css";

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
        loading="lazy"
      />
    );
  }

  return (
    <div 
      className={styles.videoFacade} 
      onClick={() => setIsLoaded(true)}
      style={{ cursor: "pointer", position: "relative", width: "100%", height: "100%" }}
    >
      <Image
        src={thumbnailUrl}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{ objectFit: "cover" }}
      />
      <div className={styles.playButtonOverlay}>
        <div className={styles.playIcon}>
          <svg viewBox="0 0 24 24" width="48" height="48" fill="white">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      
      <style jsx>{`
        .videoFacade:hover .playIcon {
          transform: scale(1.1);
          background: rgba(126, 29, 26, 0.9);
        }
        .playButtonOverlay {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          background: rgba(0, 0, 0, 0.2);
          transition: background 0.3s ease;
        }
        .videoFacade:hover .playButtonOverlay {
          background: rgba(0, 0, 0, 0.1);
        }
        .playIcon {
          width: 80px;
          height: 80px;
          background: rgba(126, 29, 26, 0.8);
          border-radius: 50%;
          display: grid;
          place-items: center;
          transition: transform 0.3s ease, background 0.3s ease;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
}
