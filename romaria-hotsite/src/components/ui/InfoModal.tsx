import styles from "@/app/page.module.css";

type InfoModalProps = {
  title: string;
  text: string;
  images: readonly string[];
  onClose: () => void;
};

export default function InfoModal({ title, text, images, onClose }: InfoModalProps) {
  return (
    <div className={styles.modalOverlay} role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={onClose}>
      <div className={styles.modalCard} onClick={(event) => event.stopPropagation()}>
        <button className={styles.modalClose} type="button" onClick={onClose} aria-label="Fechar">×</button>
        <h2 id="modal-title">{title}</h2>
        <p>{text}</p>
        <div className={styles.modalGallery}>
          {images.map((image) => (
            <img key={image} src={image} alt={title} />
          ))}
        </div>
      </div>
    </div>
  );
}
