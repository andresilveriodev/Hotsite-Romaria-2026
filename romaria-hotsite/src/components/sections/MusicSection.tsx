import { spotifyEmbedUrl, youtubeMemberUrl } from "@/data/romaria-content";
import styles from "@/app/page.module.css";

export default function MusicSection() {
  return (
    <section className={styles.musicSection} data-reveal>
      <div className={styles.container}>
        <div>
          <article className={styles.musicCard}>
            <iframe
              className={styles.spotifyFrame}
              src={spotifyEmbedUrl}
              title="Spotify Romaria"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </article>
        </div>
      </div>
    </section>
  );
}
