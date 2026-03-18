import Image from "next/image";
import styles from "@/app/page.module.css";

export default function HeroSection() {
  return (
    <section className={styles.heroSection} data-reveal>
      <Image
        className={styles.heroImage}
        src="/figma-assets/hero.jpg"
        alt="Banner principal da Romaria 2026"
        width={1600}
        height={900}
        sizes="100vw"
        priority
      />
      <Image
        className={styles.handsDivider}
        src="/figma-assets/hands.png"
        alt=""
        aria-hidden="true"
        width={1600}
        height={180}
        sizes="100vw"
        priority
      />
    </section>
  );
}
