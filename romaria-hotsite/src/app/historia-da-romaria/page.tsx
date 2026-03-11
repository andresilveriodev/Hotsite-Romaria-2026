import Link from "next/link";
import styles from "./page.module.css";

export default function HistoriaDaRomariaPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <img src="/figma-assets/medalhao.png" alt="Medalhão histórico da Romaria" />
        <div>
          <p className={styles.eyebrow}>História da Romaria</p>
          <h1>Origem da devoção ao Divino Pai Eterno</h1>
          <p>
            A devoção ao Divino Pai Eterno nasceu por volta de 1840, quando o casal de lavradores
            Constantino Xavier e Ana Rosa encontrou um medalhão de barro com a imagem da Santíssima
            Trindade coroando Nossa Senhora.
          </p>
          <p>
            A partir desse encontro, a fé foi sendo compartilhada entre os moradores da região e deu
            origem ao movimento de peregrinação que hoje reúne romeiros de todo o Brasil em
            Trindade.
          </p>
          <Link href="/">Voltar para a home</Link>
        </div>
      </section>
    </main>
  );
}
