import Image from "next/image";
import styles from "@/app/page.module.css";

export default function Footer() {
  return (
    <>
      <section className={styles.footerTop} data-reveal>
        <Image src="/figma-assets/clamamos.png" alt="Clamamos Abbá, Pai!" width={649} height={120} sizes="(max-width: 768px) 100vw, 649px" />
        <div className={styles.announcements}>
          <div className={styles.announceGroup}>
            <strong>Realização:</strong>
            <div className={styles.logoSlots}>
              <Image src="/figma-assets/logo/Santuario_Pai_Eterno.png" alt="Santuário Pai Eterno" width={135} height={60} />
              <Image src="/figma-assets/logo/arquidiocese_de_goiania.png" alt="Arquidiocese de Goiânia" width={135} height={60} />
              <Image src="/figma-assets/logo/provincia_de_brasilia.png" alt="Província de Brasília" width={135} height={60} />
              <Image src="/figma-assets/logo/paroquia_divino_pai_eterno.png" alt="Paróquia Divino Pai Eterno" width={135} height={60} />
              <Image src="/figma-assets/logo/vila_sao_cottolengo.png" alt="Vila São Cottolengo" width={135} height={60} />
            </div>
          </div>
          <div className={styles.announceGroup}>
            <strong>Apoio:</strong>
            <div className={styles.logoSlots}>
              <Image src="/figma-assets/logo/gov_go.png" alt="Governo de Goiás" width={135} height={60} />
              <Image src="/figma-assets/logo/trindade.png" alt="Prefeitura de Trindade" width={135} height={60} />
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer} data-reveal>
        <div className={styles.footerLogos}>
          <Image src="/figma-assets/logo/Santuario_Pai_Eterno_Branca.png" alt="Santuário Pai Eterno" width={96} height={96} />
          <Image src="/figma-assets/footer-tv.png" alt="TV Pai Eterno" width={33} height={33} />
        </div>
        <p>Copyright 2026 Afipe - Associação Filhos do Pai Eterno</p>
      </footer>
    </>
  );
}
