import LiveTv from "@/components/LiveTv";
import { clipeEmbedUrl } from "@/data/romaria-content";
import styles from "@/app/page.module.css";

export default function VideoSection() {
  return (
    <section className={styles.videoSection} data-reveal>
      <div className={styles.container}>
        <div className={styles.videoGrid}>
          <article className={styles.mediaCard}>
            <h3>TV ao Vivo</h3>
            <div className={styles.embedFrame}>
              <LiveTv />
            </div>
          </article>
          <article className={styles.mediaCard}>
            <h3>Clipe da Romaria</h3>
            <div className={styles.embedFrame}>
              <iframe
                src={clipeEmbedUrl}
                title="Clipe da Romaria"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
