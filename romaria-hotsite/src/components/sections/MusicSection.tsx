import { spotifyEmbedUrl } from "@/data/romaria-content";
import LazyEmbed from "@/components/shared/LazyEmbed";
import styles from "@/app/page.module.css";

export default function MusicSection() {
  return (
    <section className={styles.musicSection} data-reveal>
      <div className={styles.container}>
        <div>
          <article className={styles.musicCard}>
            <LazyEmbed placeholderHeight="152px">
              <iframe
                className={styles.spotifyFrame}
                src={spotifyEmbedUrl}
                title="Spotify Romaria"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </LazyEmbed>
          </article>
        </div>
      </div>
    </section>
  );
}
