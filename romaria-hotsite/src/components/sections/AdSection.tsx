import styles from "./AdSection.module.css";

type AdSectionProps = {
  type: "diamond" | "silver";
};

export default function AdSection({ type }: AdSectionProps) {
  return (
    <section className={styles.adSection} data-reveal>
      <div className={styles.container}>
        {type === "diamond" ? (
          <div className={styles.adDiamond}>
            <p>ANUNCIE AQUI</p>
          </div>
        ) : (
          <div className={styles.adSilver}>
            <p>ANUNCIE AQUI</p>
          </div>
        )}
      </div>
    </section>
  );
}
