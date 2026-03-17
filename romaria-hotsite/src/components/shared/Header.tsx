"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "@/app/page.module.css";

type HeaderProps = {
  showProgramacao: boolean;
  showGaleria: boolean;
};

export default function Header({ showProgramacao, showGaleria }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logoAndMenu}>
          <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <Link href="/">
            <img className={styles.headerLogo} src="/figma-assets/logo-title.png" alt="Romaria 2026" />
          </Link>
        </div>

        {isMenuOpen && <div className={styles.menuOverlay} onClick={closeMenu}></div>}

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <div className={styles.mobileNavHeader}>
            <button className={styles.closeButton} onClick={closeMenu} aria-label="Close Menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          {showProgramacao ? <Link href="/#programacao" onClick={closeMenu}>PROGRAMAÇÃO</Link> : null}
          <Link href="/#turisticos" onClick={closeMenu}>PONTOS TURÍSTICOS</Link>
          <Link href="/historia-da-romaria" onClick={closeMenu}>HISTÓRIA DA ROMARIA</Link>
          {showGaleria ? <Link href="/#galeria" onClick={closeMenu}>GALERIA</Link> : null}
        </nav>
      </div>
    </header>
  );
}
