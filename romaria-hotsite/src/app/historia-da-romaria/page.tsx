import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "História da Romaria - Romaria do Divino Pai Eterno",
  description: "Conheça a trajetória da fé e devoção ao Divino Pai Eterno em Trindade, de 1840 até os dias de hoje.",
};

type HistoryEntry = {
  year: string;
  description?: string;
};

const historyEntries: HistoryEntry[] = [
  {
    year: "1840",
    description:
      "Achado do medalhão de barro e início público da devoção, com oração do terço em família e com vizinhos no antigo Barro Preto (atual Trindade).",
  },
  {
    year: "1842",
    description:
      "Segundo a tradição, Constantino vai a Pirenópolis e recebe uma imagem esculpida por Veiga Valle; sem recursos, troca o cavalo e retorna a pé, marco simbólico do primeiro romeiro.",
  },
  {
    year: "1843",
    description:
      "Construção de uma primeira capela simples (coberta com folhas de buriti) para acolher o crescente número de devotos.",
  },
  {
    year: "1866",
    description:
      "Com o crescimento da devoção e doações, é erguida uma nova capela (indicada como remanescente em fonte do IBGE).",
  },
  {
    year: "1876",
    description:
      "Fonte institucional registra a construção de uma terceira capela antes da inauguração do primeiro Santuário (1912).",
  },
  {
    year: "1891",
    description:
      "O bispo de Goiás busca apoio para trazer os missionários redentoristas, abrindo caminho para uma reorganização pastoral da devoção.",
  },
  {
    year: "1894",
    description:
      "Chegada dos missionários redentoristas em Goiás (12/12/1894, segundo histórico institucional).",
  },
  {
    year: "1895",
    description:
      "Entrada oficial dos redentoristas em Barro Preto (29/05/1895), iniciando uma fase de maior estruturação eclesial da festa e da peregrinação.",
  },
  {
    year: "1909",
    description:
      "O distrito passa a se chamar Trindade (Lei Municipal nº 5), formalizando a localidade que se tornaria o centro urbano da romaria.",
  },
  {
    year: "1912",
    description:
      "Inauguração do primeiro Santuário, hoje identificado como Igreja Matriz/Santuário Velho de Trindade.",
  },
  {
    year: "1920",
    description:
      "Trindade é elevada à condição de município (instalação em 31/08/1920), consolidando institucionalmente a cidade-sede da festa.",
  },
  {
    year: "1924",
    description:
      "Os redentoristas passam a ter residência fixa em Trindade, reforçando a administração religiosa local do santuário e da romaria.",
  },
  {
    year: "1927",
    description: "Trindade é elevada à categoria de cidade.",
  },
  {
    year: "1938",
    description:
      "O município de Trindade é extinto e anexado a Goiânia (mudança administrativa que afeta a gestão local do território).",
  },
  {
    year: "1943",
    description:
      "No centenário da romaria, é lançada a pedra fundamental do Santuário Novo; também ocorre a restauração do município de Trindade (Decreto-lei Estadual nº 8.305).",
  },
  {
    year: "1948",
    description:
      "Registro patrimonial: usucapião define posse de bens/terras associados ao patrimônio do Divino Pai Eterno em favor dos redentoristas (registro citado pelo IBGE).",
  },
  {
    year: "1955",
    description:
      "Segundo cronologia institucional, apesar dos esforços, a obra do Santuário Novo ainda não havia saído dos alicerces.",
  },
  {
    year: "1957",
    description:
      "Com a criação e instalação da Arquidiocese de Goiânia, é apresentado projeto para a construção do Santuário Novo.",
  },
  {
    year: "1974",
    description:
      "A novena e a festa passam a ocorrer no Santuário Novo, segundo cronologia institucional.",
  },
  {
    year: "1994",
    description:
      "O templo do Santuário Novo passa por reforço/reforma estrutural, consolidando a configuração atual do Santuário/Basílica.",
  },
  {
    year: "2004",
    description:
      "Criação da Associação Filhos do Pai Eterno (Afipe), que passa a apoiar obras sociais e a evangelização, inclusive pelos meios de comunicação.",
  },
  {
    year: "2006",
    description:
      "O Papa Bento XVI concede o título de Basílica Menor ao Santuário; em novembro ocorre a instalação da Sacrossanta Basílica.",
  },
  {
    year: "2009",
  },
  {
    year: "2010",
    description:
      "Anúncio da construção do Novo Santuário para ampliar o acolhimento aos romeiros.",
  },
  {
    year: "2011",
    description:
      "Durante a romaria, é realizado o lançamento da pedra fundamental do Novo Santuário.",
  },
  {
    year: "2012",
    description:
      "Início das obras do Novo Santuário (abril); a Romaria tem tema “Acompanhados, alentados e amados pelo Pai” e contabiliza 2,6 milhões de romeiros segundo registro institucional. A Igreja Matriz completa 100 anos (processo de tombamento/restauro é iniciado ou consolidado no período).",
  },
  {
    year: "2013",
    description:
      "Romaria alinhada ao Ano da Fé, com tema “Pai Eterno: Eu creio em Vós!”. O tombamento e a restauração da Igreja Matriz seguem como marco patrimonial na década (IBGE/Portal Pai Eterno registram o processo).",
  },
  {
    year: "2014",
    description:
      "Romaria com tema “Somos a Família do Pai Eterno”, reunindo cerca de 2,8 milhões de pessoas segundo registro institucional. A restauração da Igreja Matriz é indicada como concluída em 2014 em cronologia institucional.",
  },
  {
    year: "2015",
    description:
      "Romaria com tema “Consagrados ao Pai Eterno”, conforme divulgação institucional.",
  },
  {
    year: "2016",
    description:
      "Romaria com tema “O Pai Eterno é Misericordioso”, com balanço citado em registros institucionais.",
  },
  {
    year: "2017",
    description:
      "Romaria realizada de 23/06 a 02/07; balanço aponta cerca de 2,9 milhões de participantes e tema mariano em sintonia com o Ano Nacional Mariano.",
  },
  {
    year: "2018",
    description:
      "Romaria com tema “Pai Eterno, somos Teus filhos”, inspirada no Ano do Laicato; registro aponta cerca de 3 milhões de participantes.",
  },
  {
    year: "2019",
    description:
      "Romaria com tema “Sede santos como vosso Pai é Santo”, inspirada em documento do Papa Francisco; registros eclesiais indicam participação de cerca de 3,2 milhões.",
  },
  {
    year: "2020",
    description:
      "Em razão da pandemia de covid-19, a romaria ocorre apenas via meios de comunicação (sem presença física), mantendo as datas tradicionais; celebra-se o Jubileu de 180 anos da origem da devoção.",
  },
  {
    year: "2021",
    description:
      "Segundo ano de pandemia: romaria novamente no formato virtual; tema “Pai Eterno, diante de vós somos todos irmãos”, inspirado na encíclica Fratelli Tutti, com programação entre 25/06 e 04/07.",
  },
  {
    year: "2022",
    description:
      "Retomada presencial após dois anos com restrições; tema “Pai Eterno, fazei novas todas as coisas”, com ênfase em recomeço e memória das perdas da pandemia.",
  },
  {
    year: "2023",
    description:
      "Balanço oficial divulgado aponta aproximadamente 3,6 milhões de pessoas; tema “O Pai nos chama e envia”, em sintonia com o Ano Vocacional no Brasil.",
  },
  {
    year: "2024",
    description:
      "Romaria com tema “Pai Eterno, a Vós, nossa oração”, em comunhão com o Ano da Oração; release oficial prevê mais de 3 milhões de participantes e detalha a programação (145 missas, 50 novenas etc.).",
  },
  {
    year: "2025",
    description:
      "Romaria anunciada para 27/06 a 06/07 com tema “Pai Eterno, fazei-nos peregrinos de esperança”.",
  },
  {
    year: "2026",
    description:
      "Tema anunciado: “Clamamos: Abbá, Pai”, com datas divulgadas para 26/06 a 05/07; no momento desta pesquisa (fev/2026).",
  },
];

const bannerYears = new Set([
  "2009",
  "2010",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
  "2025",
  "2026",
]);

function getHistoryImage(year: string) {
  if (bannerYears.has(year)) {
    return `/figma-assets/historia/${year}.png`;
  }

  return "/figma-assets/medalhao.png";
}

function HistoryCard({ year, description }: HistoryEntry) {
  return (
    <article className={styles.card}>
      <div className={styles.imageFrame}>
        <Image
          className={styles.image}
          src={getHistoryImage(year)}
          alt={`Registro visual da Romaria em ${year}`}
          width={400}
          height={300}
        />
      </div>

      <div className={styles.content}>
        <h3 className={styles.year}>{year}</h3>
        {description ? <p className={styles.description}>{description}</p> : null}
      </div>
    </article>
  );
}

export default function HistoriaDaRomariaPage() {
  return (
    <>
      <Header showProgramacao={false} showGaleria={false} />

      <main className={styles.page}>
        <section className={styles.hero}>
          <h1 className={styles.title}>HISTÓRIA DA ROMARIA</h1>
          <h2 className={styles.subtitle}>1840 - 2026</h2>
        </section>

        <section className={styles.timeline}>
          {historyEntries.map((entry) => (
            <HistoryCard key={entry.year} year={entry.year} description={entry.description} />
          ))}
        </section>

        <div className={styles.footerAction}>
          <Link className={styles.homeButton} href="/">
            Voltar para a página home
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
