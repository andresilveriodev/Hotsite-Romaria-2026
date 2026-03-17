import styles from "@/app/page.module.css";

export default function Footer() {
  return (
    <>
      <section className={styles.footerTop} data-reveal>
        <img src="/figma-assets/clamamos.png" alt="Clamamos Abbá, Pai!" />
        <div className={styles.announcements}>
          <div className={styles.announceGroup}>
            <strong>Realização:</strong>
            <div className={styles.logoSlots}>
              <img src="/figma-assets/logo/Santuario_Pai_Eterno.png" alt="Santuário Pai Eterno" />
              <img src="/figma-assets/logo/arquidiocese_de_goiania.png" alt="Arquidiocese de Goiânia" />
              <img src="/figma-assets/logo/provincia_de_brasilia.png" alt="Província de Brasília" />
              <img src="/figma-assets/logo/paroquia_divino_pai_eterno.png" alt="Paróquia Divino Pai Eterno" />
              <img src="/figma-assets/logo/vila_sao_cottolengo.png" alt="Vila São Cottolengo" />
            </div>
          </div>
          <div className={styles.announceGroup}>
            <strong>Apoio:</strong>
            <div className={styles.logoSlots}>
              <img src="/figma-assets/logo/brasil.png" alt="Governo Federal - Brasil" />
              <img src="/figma-assets/logo/gov_go.png" alt="Governo de Goiás" />
              <img src="/figma-assets/logo/trindade.png" alt="Prefeitura de Trindade" />
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer} data-reveal>
        <div className={styles.footerLogos}>
          <img src="/figma-assets/logo/Santuario_Pai_Eterno_Branca.png" alt="Afipe" />
          <img src="/figma-assets/footer-tv.png" alt="TV Pai Eterno" />
        </div>
        <p>© Copyright, 2026 Afipe - Associação Filhos do Pai Eterno</p>
      </footer>
    </>
  );
}
