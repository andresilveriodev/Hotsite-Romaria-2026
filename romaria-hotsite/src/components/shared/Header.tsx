"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "História", href: "/historia-da-romaria" },
  { label: "Oração", href: "/#oracao" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${isMenuOpen ? styles.menuActive : ""}`}>
      <div className={styles.container}>
        <div className={styles.headerMain}>
          <button 
            className={`${styles.mobileToggle} ${isMenuOpen ? styles.active : ""}`} 
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <Link href="/" className={styles.headerBrand} onClick={closeMenu}>
            <Image className={styles.headerLogo} src="/figma-assets/logo-title.webp" alt="Romaria 2026" width={190} height={70} priority />
          </Link>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ""}`}>
          <ul className={styles.navList}>
            {menuItems.map((item) => (
              <li key={item.href} className={styles.navItem}>
                <Link
                  href={item.href}
                  className={`${styles.navLink} ${pathname === item.href ? styles.active : ""}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className={styles.navItem}>
              <Link 
                href="/#transmissao" 
                className={`${styles.navLink} ${styles.liveBadge}`}
                onClick={closeMenu}
              >
                Ao Vivo
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
