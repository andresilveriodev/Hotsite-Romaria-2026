import Image from "next/image";
import Link from "next/link";
import styles from "./ResponsiveBanner.module.css";

type ResponsiveBannerProps = {
  desktopSrc: string;
  mobileSrc: string;
  href?: string;
  alt: string;
  marginTop?: number;
  openInNewTab?: boolean;
  priority?: boolean;
  rounded?: boolean;
};

export default function ResponsiveBanner({
  desktopSrc,
  mobileSrc,
  href,
  alt,
  marginTop,
  openInNewTab,
  priority = false,
  rounded = false,
}: ResponsiveBannerProps) {
  const content = (
    <div
      className={styles.container}
      style={{ marginTop: marginTop ? `${marginTop}px` : undefined }}
    >
      <Image
        src={desktopSrc}
        alt={alt}
        className={`${styles.desktopImage} ${rounded ? styles.rounded : ""}`}
        width={1600}
        height={720}
        sizes="100vw"
        priority={priority}
      />
      <Image
        src={mobileSrc}
        alt={alt}
        className={`${styles.mobileImage} ${rounded ? styles.rounded : ""}`}
        width={900}
        height={1200}
        sizes="100vw"
        priority={priority}
      />
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
