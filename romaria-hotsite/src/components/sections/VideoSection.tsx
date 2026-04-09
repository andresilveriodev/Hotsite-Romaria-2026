import LiveTv from "@/components/LiveTv";
import LazyEmbed from "@/components/shared/LazyEmbed";
import VideoFacade from "@/components/shared/VideoFacade";
import styles from "@/app/page.module.css";

export default function VideoSection() {
  return (
    <section className={styles.videoSection} data-reveal id="transmissao">
      <div className={styles.container}>
        <div style={{ marginBottom: '40px' }}>
          <div className={styles.mediaCard}>
            <h3>TV Pai Eterno ao Vivo</h3>
            <div className={styles.embedFrame}>
              <LazyEmbed placeholderHeight="450px">
                <LiveTv />
              </LazyEmbed>
            </div>
          </div>
        </div>

        <div className={styles.videoGrid}>
          <div className={styles.mediaCard}>
            <h3>Hino da Romaria</h3>
            <div className={styles.embedFrame}>
              <VideoFacade videoId="RRQLWcjyD7M" title="Hino da Romaria" />
            </div>
          </div>

          <div className={styles.mediaCard}>
            <h3>Abaixo do Olhar do Pai</h3>
            <div className={styles.embedFrame}>
              <VideoFacade videoId="yJBT4yVhwPw" title="Música Abaixo do Olhar do Pai" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
