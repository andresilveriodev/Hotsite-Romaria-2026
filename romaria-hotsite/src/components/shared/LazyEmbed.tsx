"use client";

import { useEffect, useRef, useState } from "react";

type LazyEmbedProps = {
  children: React.ReactNode;
  placeholderHeight?: string;
  className?: string;
};

export default function LazyEmbed({ 
  children, 
  placeholderHeight = "450px",
  className = ""
}: LazyEmbedProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Carrega 200px antes de entrar na tela
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className} style={{ minHeight: isVisible ? "auto" : placeholderHeight }}>
      {isVisible ? children : <div style={{ height: placeholderHeight, background: 'rgba(0,0,0,0.1)', borderRadius: '8px' }} />}
    </div>
  );
}
