import styles from "@/app/page.module.css";

type AdSectionProps = {
  type: "diamond" | "silver";
};

export default function AdSection({ type }: AdSectionProps) {
  return (
    <section className={styles.adSection} data-reveal>
      <div className={styles.container}>
        {type === "diamond" ? (
          <>
            <div className={styles.adDiamond}>
              <span className={styles.diamondIcon} aria-hidden="true" />
              <p>ANÚNCIO DIAMANTE</p>
            </div>
          </>
        ) : (
          <div className={styles.adSilver}><p>ANÚNCIO PRATA</p></div>
        )}
      </div>
    </section>
  );
}
