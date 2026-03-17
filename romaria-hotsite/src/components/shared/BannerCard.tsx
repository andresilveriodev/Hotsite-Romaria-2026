import type { ReactNode } from "react";
import styles from "@/app/page.module.css";

type BannerCardItemProps = {
  /** Imagem decorativa de fundo (posicionada à direita) */
  decorImage?: string;
  /** Opacidade da imagem decorativa (0 a 1), padrão: 0.9 */
  decorOpacity?: number;
  /** Classe CSS do card (ex: styles.storyCard, styles.donationCard) */
  cardClassName?: string;

  /** Classe CSS do conteúdo interno (ex: styles.trenzinhoContent, styles.donationCopy) */
  contentClassName?: string;
  /** Se true, a imagem irá preencher todo o card ao invés de ficar apenas na direita */
  fillCard?: boolean;
  /** Conteúdo do card (títulos, textos, botões, etc.) */
  children: ReactNode;
};

type BannerSectionProps = {
  /** ID da section (ex: "historia", "contato") */
  id?: string;
  /** Classe CSS do grid (ex: styles.dualBannerGrid, styles.historyGrid) */
  gridClassName?: string;
  /** Cards do banner */
  children: ReactNode;
};

/** Wrapper da seção com background e container */
export function BannerSection({ id, gridClassName, children }: BannerSectionProps) {
  return (
    <section
      style={{ background: "url('/figma-assets/background.png') center/cover no-repeat", borderRadius: "24px" }}
      id={id}
      data-reveal
    >
      <div className={styles.container}>
        <div className={gridClassName}>
          {children}
        </div>
      </div>
    </section>
  );
}

/** Card individual dentro do banner */
export default function BannerCard({
  decorImage,
  decorOpacity = 0.9,
  cardClassName,
  contentClassName,
  fillCard = false,
  children,
}: BannerCardItemProps) {
  return (
    <article className={cardClassName}>
      {decorImage && (
        <img
          className={fillCard ? styles.donationDecorFill : styles.donationDecor}
          src={decorImage}
          alt=""
          aria-hidden="true"
          style={decorOpacity !== 0.9 ? { opacity: decorOpacity } : undefined}
        />
      )}
      <div className={contentClassName}>
        {children}
      </div>
    </article>
  );
}
