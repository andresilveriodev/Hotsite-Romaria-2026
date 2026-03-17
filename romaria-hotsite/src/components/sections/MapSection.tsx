import { touristPoints } from "@/data/romaria-content";
import styles from "@/app/page.module.css";

type MapSectionProps = {
  activeMapId: string;
  onSelectMapId: (mapId: string) => void;
  marginTop?: number;
};

export default function MapSection({ activeMapId, onSelectMapId, marginTop }: MapSectionProps) {
  const activeMap = touristPoints.find((point) => point.id === activeMapId) ?? touristPoints[0];

  return (
    <section
      className={styles.mapSection}
      id="turisticos"
      data-reveal
      style={{ marginTop: marginTop ? `${marginTop}px` : undefined }}
    >
      <div className={styles.container}>
        <p className={styles.mapEyebrow}>Mapa interativo dos pontos turísticos</p>
        <h2 className={styles.sectionTitleDark}>PONTOS TURÍSTICOS</h2>
        <div className={styles.mapGrid}>
          <div className={styles.pointList}>
            {touristPoints.map((point) => (
              <button
                key={point.id}
                type="button"
                className={`${styles.pointCard} ${activeMap?.id === point.id ? styles.pointCardActive : ""}`}
                onClick={() => onSelectMapId(point.id)}
              >
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </button>
            ))}
          </div>
          <div className={styles.mapFrame}>
            <iframe
              src={activeMap.embedUrl}
              title={activeMap.title}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
