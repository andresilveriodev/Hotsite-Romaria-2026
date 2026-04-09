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
    <div 
      ref={containerRef} 
      className={className} 
      style={{ 
        width: "100%",
        height: "100%",
        minHeight: isVisible ? "100%" : placeholderHeight 
      }}
    >
      {isVisible ? children : <div style={{ height: placeholderHeight, width: "100%", background: 'rgba(0,0,0,0.05)', borderRadius: '12px' }} />}
    </div>
  );
}
