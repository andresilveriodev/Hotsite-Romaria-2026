import Link from "next/link";
import styles from "./ResponsiveBanner.module.css";

type ResponsiveBannerProps = {
  desktopSrc: string;
  mobileSrc: string;
  href?: string;
  alt: string;
  marginTop?: number;
  openInNewTab?: boolean;
};

export default function ResponsiveBanner({
  desktopSrc,
  mobileSrc,
  href,
  alt,
  marginTop,
  openInNewTab,
}: ResponsiveBannerProps) {
  const content = (
    <div
      className={styles.container}
      style={{ marginTop: marginTop ? `${marginTop}px` : undefined }}
    >
      <img src={desktopSrc} alt={alt} className={styles.desktopImage} />
      <img src={mobileSrc} alt={alt} className={styles.mobileImage} />
    </div>
  );

  if (href) {
    if (href.startsWith("http")) {
      return (
        <a
          href={href}
          target={openInNewTab ? "_blank" : undefined}
          rel={openInNewTab ? "noopener noreferrer" : undefined}
          className={styles.link}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={styles.link}>
        {content}
      </Link>
    );
  }

  return content;
}
