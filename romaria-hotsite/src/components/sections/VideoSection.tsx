import LiveTv from "@/components/LiveTv";
import LazyEmbed from "@/components/shared/LazyEmbed";
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
              <LazyEmbed placeholderHeight="315px">
                <LiveTv />
              </LazyEmbed>
            </div>
          </article>
          <article className={styles.mediaCard}>
            <h3>Hino da Romaria</h3>
            <div className={styles.embedFrame}>
              <LazyEmbed placeholderHeight="315px">
                <iframe
                  src={clipeEmbedUrl}
                  title="Clipe da Romaria"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </LazyEmbed>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
