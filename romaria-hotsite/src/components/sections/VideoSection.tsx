import LiveTv from "@/components/LiveTv";
import LazyEmbed from "@/components/shared/LazyEmbed";
import VideoFacade from "@/components/shared/VideoFacade";
import styles from "./VideoSection.module.css";

export default function VideoSection() {
  return (
    <section className={styles.videoSection} data-reveal id="transmissao">
      <div className={styles.container}>
        <div className={styles.videoGrid}>
          <div className={styles.mediaCard}>
            <h3>TV Pai Eterno ao Vivo</h3>
            <div className={styles.embedFrame}>
              <LazyEmbed placeholderHeight="450px">
                <LiveTv />
              </LazyEmbed>
            </div>
          </div>

          <div className={styles.mediaCard}>
            <h3>Clipe Romaria</h3>
            <div className={styles.embedFrame}>
              <VideoFacade 
                videoId="dzwhwW0WFWg" 
                title="Clipe Romaria" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
