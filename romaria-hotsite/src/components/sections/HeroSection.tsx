import styles from "@/app/page.module.css";

export default function HeroSection() {
  return (
    <section className={styles.heroSection} data-reveal>
      <img className={styles.heroImage} src="/figma-assets/hero.jpg" alt="Banner principal da Romaria 2026" />
      <img className={styles.handsDivider} src="/figma-assets/hands.png" alt="" aria-hidden="true" />
    </section>
  );
}
