"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import Link from "next/link";
import styles from "@/app/page.module.css";

type HeaderProps = {
  showProgramacao: boolean;
  showGaleria: boolean;
};

export default function Header({ showProgramacao, showGaleria }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationId = useId();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((currentState) => !currentState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logoAndMenu}>
          <button
            type="button"
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu principal" : "Abrir menu principal"}
            aria-expanded={isMenuOpen}
            aria-controls={navigationId}
          >
            <span className={styles.menuButtonBox} aria-hidden="true">
              <span className={`${styles.menuButtonLine} ${isMenuOpen ? styles.menuButtonLineTopOpen : ""}`} />
              <span className={`${styles.menuButtonLine} ${isMenuOpen ? styles.menuButtonLineMiddleOpen : ""}`} />
              <span className={`${styles.menuButtonLine} ${isMenuOpen ? styles.menuButtonLineBottomOpen : ""}`} />
            </span>
          </button>

          <Link href="/" className={styles.headerBrand} onClick={closeMenu}>
            <Image className={styles.headerLogo} src="/figma-assets/logo-title.png" alt="Romaria 2026" width={190} height={70} priority />
          </Link>
        </div>

        {isMenuOpen ? (
          <button type="button" className={styles.menuOverlay} onClick={closeMenu} aria-label="Fechar menu" />
        ) : null}

        <nav
          id={navigationId}
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
          aria-label="Menu principal"
        >
          <div className={styles.mobileNavHeader}>
            <p className={styles.mobileNavEyebrow}>Navegação</p>
            <button type="button" className={styles.closeButton} onClick={closeMenu} aria-label="Fechar menu principal">
              Fechar
            </button>
          </div>

          {showProgramacao ? <Link href="/#programacao" onClick={closeMenu}>Programação</Link> : null}
          <Link href="/#turisticos" onClick={closeMenu}>Pontos turísticos</Link>
          <Link href="/historia-da-romaria" onClick={closeMenu}>História da Romaria</Link>
          {showGaleria ? <Link href="/#galeria" onClick={closeMenu}>Galeria</Link> : null}
          <Link href="/#contato" onClick={closeMenu}>Contato</Link>
        </nav>
      </div>
    </header>
  );
}
