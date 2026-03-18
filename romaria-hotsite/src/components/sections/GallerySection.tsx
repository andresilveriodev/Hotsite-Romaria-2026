import { galleryImages } from "@/lib/landing-config";
import styles from "@/app/page.module.css";

type GallerySectionProps = {
  showFormularioEnvioFoto: boolean;
};

export default function GallerySection({ showFormularioEnvioFoto }: GallerySectionProps) {
  return (
    <section className={styles.gallerySection} id="galeria" data-reveal>
      <div className={styles.container}>
        <h2 className={styles.sectionTitleDark}>COMPARTILHE SUA JORNADA NA ROMARIA 2026</h2>
        <div className={styles.galleryGrid}>
          {galleryImages.map((image, index) => (
            <div className={styles.galleryCard} key={image}>
              <img src={image} alt={`Registro da Romaria ${index + 1}`} />
            </div>
          ))}
        </div>
        {showFormularioEnvioFoto ? (
          <button className={styles.galleryButton} type="button" disabled>
            Formul�rio de envio de foto ser� liberado na vers�o 2
          </button>
        ) : null}
      </div>
    </section>
  );
}
