"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import LiveTv from "@/components/LiveTv";
import {
  appStoreUrl,
  clipeEmbedUrl,
  countdownInitialDays,
  countdownStartDate,
  dateScheduleEntries,
  donationUrl,
  fixedScheduleGroups,
  googlePlayUrl,
  scheduleCategories,
  scheduleDays,
  spotifyEmbedUrl,
  touristPoints,
  youtubeMemberUrl,
} from "@/data/romaria-content";
import styles from "./page.module.css";

const galleryImages = [
  "/figma-assets/gallery-4.jpg",
  "/figma-assets/gallery-5.jpg",
  "/figma-assets/gallery-6.jpg",
  "/figma-assets/gallery-7.jpg",
  "/figma-assets/gallery-8.jpg",
  "/figma-assets/sanctuary.jpg",
];

const infoModals = {
  trenzinho: {
    title: "Trenzinho Família de Amor",
    text: "Um passeio pelos espaços de peregrinação de Trindade, com destaque para os pontos de fé e devoção presentes na Romaria.",
    images: ["/figma-assets/trenzinho.png", "/figma-assets/bell.jpg"],
  },
  vox: {
    title: "VOX PATRIS",
    text: "Ouvir a voz de alguém vai além do conteúdo das palavras. É sobre reconhecer quem está por trás delas, num mundo cada vez mais digital.",
    images: ["/figma-assets/vox-card.png", "/figma-assets/medalhao.png"],
  },
} as const;

type ModalKey = keyof typeof infoModals | null;
type CategoryFilter = (typeof scheduleCategories)[number]["id"];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [selectedDate, setSelectedDate] = useState("all");
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [activeMapId, setActiveMapId] = useState(touristPoints[0]?.id ?? "");
  const [openModal, setOpenModal] = useState<ModalKey>(null);

  const selectedDateItem = useMemo(
    () => scheduleDays.find((day) => day.id === selectedDate) ?? scheduleDays[0],
    [selectedDate]
  );

  const daysLeft = useMemo(() => {
    const start = new Date(countdownStartDate);
    const now = new Date();
    const startOnly = new Date(start.getFullYear(), start.getMonth(), start.getDate());
    const nowOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diffMs = nowOnly.getTime() - startOnly.getTime();
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffDays < 0) return countdownInitialDays;
    return Math.max(0, countdownInitialDays - diffDays);
  }, []);

  const visibleFixedGroups = useMemo(() => {
    if (selectedDate !== "all") {
      return [];
    }

    return fixedScheduleGroups
      .map((group) => ({
        ...group,
        items: group.items.filter((item) => selectedCategory === "all" || item.category === selectedCategory),
      }))
      .filter((group) => group.items.length > 0);
  }, [selectedCategory, selectedDate]);

  const visibleDateGroups = useMemo(() => {
    const filtered = dateScheduleEntries.filter((entry) => {
      const categoryMatch = selectedCategory === "all" || entry.category === selectedCategory;
      const dateMatch = selectedDate === "all" || entry.dateId === selectedDate;
      const hideDailyOnSpecificDate = selectedDate !== "all" && entry.category === "daily";
      return categoryMatch && dateMatch && !hideDailyOnSpecificDate;
    });

    return filtered.reduce<Record<string, typeof filtered>>((acc, entry) => {
      const key = entry.dateLabel ?? entry.dateId ?? "Sem data";
      acc[key] ??= [];
      acc[key].push(entry);
      return acc;
    }, {});
  }, [selectedCategory, selectedDate]);

  const activeMap = touristPoints.find((point) => point.id === activeMapId) ?? touristPoints[0];
  const activeModal = openModal ? infoModals[openModal] : null;

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <img className={styles.headerLogo} src="/figma-assets/logo-title.png" alt="Romaria 2026" />
          <nav className={styles.nav}>
            <a href="#programacao">PROGRAMAÇÃO</a>
            <a href="#turisticos">PONTOS TURÍSTICOS</a>
            <Link href="/historia-da-romaria">HISTÓRIA DA ROMARIA</Link>
            <a href="#galeria">GALERIA</a>
            <a href="#contato">CONTATO</a>
          </nav>
        </div>
      </header>

      <section className={styles.counterBar} data-reveal>
        <p>{daysLeft === 1 ? `FALTA ${daysLeft} DIA PARA A ROMARIA 2026` : `FALTAM ${daysLeft} DIAS PARA A ROMARIA 2026`}</p>
      </section>

      <section className={styles.heroSection} data-reveal>
        <img className={styles.heroImage} src="/figma-assets/hero.jpg" alt="Banner principal da Romaria 2026" />
        <img className={styles.handsDivider} src="/figma-assets/hands.png" alt="" aria-hidden="true" />
      </section>

      <section className={styles.mottoSection} data-reveal>
        <img className={styles.mottoImage} src="/figma-assets/clamamos.png" alt="Clamamos Abbá, Pai!" />
      </section>

      <section className={styles.scheduleSection} id="programacao" data-reveal>
        <img className={`${styles.arch} ${styles.archLeft}`} src="/figma-assets/arco.png" alt="" aria-hidden="true" />
        <img className={`${styles.arch} ${styles.archRight}`} src="/figma-assets/arco.png" alt="" aria-hidden="true" />
        <div className={styles.container}>
          <h2 className={styles.sectionTitleDark}>PROGRAMAÇÃO DIÁRIA</h2>

          <div className={styles.filterRow}>
            {scheduleCategories.map((filter) => (
              <button
                key={filter.id}
                className={`${styles.filterPill} ${selectedCategory === filter.id ? styles.filterPillActive : ""}`}
                type="button"
                onClick={() => setSelectedCategory(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className={styles.datePickerBar}>
            <button
              type="button"
              className={styles.datePickerTrigger}
              onClick={() => setIsDatePickerOpen(true)}
            >
              {selectedDate === "all"
                ? "TODAS | Todas DATAS"
                : `${selectedDateItem.weekDay} ${selectedDateItem.label}/${selectedDateItem.month}`}
            </button>
          </div>

          {selectedDate === "all" && (selectedCategory === "all" || selectedCategory === "daily" || selectedCategory === "missas") ? (
            <div className={styles.scheduleBlocks}>
              {visibleFixedGroups.map((group) => (
                <section className={styles.scheduleBlock} key={group.id}>
                  <h3>{group.title}</h3>
                  <div className={styles.scheduleList}>
                    {group.items.map((item) => (
                      <article className={styles.scheduleItem} key={item.id}>
                        <p className={styles.scheduleTime}>{item.time}</p>
                        <div>
                          <h4>{item.title}</h4>
                          <p>{item.location}</p>
                          {item.details ? <small>{item.details}</small> : null}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : null}

          <div className={styles.scheduleBlocks}>
            {Object.entries(visibleDateGroups).map(([group, items]) => (
              <section className={styles.scheduleBlock} key={group}>
                <h3>{group}</h3>
                <div className={styles.scheduleList}>
                  {items.map((item) => (
                    <article className={styles.scheduleItem} key={item.id}>
                      <p className={styles.scheduleTime}>{item.time}</p>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.location}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.videoSection} data-reveal>
        <div className={styles.container}>
          <div className={styles.videoGrid}>
            <article className={styles.mediaCard}>
              <div className={styles.liveCard}>
                <LiveTv />
              </div>
            </article>
            <article className={styles.mediaCard}>
              <h3>Clipe da Romaria</h3>
              <div className={styles.embedFrame}>
                <iframe
                  src={clipeEmbedUrl}
                  title="Clipe da Romaria"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.dualBannerSection} data-reveal>
        <img className={styles.paperTop} src="/figma-assets/paper.png" alt="" aria-hidden="true" />
        <div className={styles.container}>
          <div className={styles.dualBannerGrid}>
            <article className={styles.storyCard}>
              <div>
                <h2>Atrações Trenzinho</h2>
                <h3>Trenzinho Família de Amor: um passeio pelos espaços de peregrinação de Trindade</h3>
                <button className={styles.linkButton} type="button" onClick={() => setOpenModal("trenzinho")}>Clique para saber mais</button>
              </div>
              <img src="/figma-assets/trenzinho.png" alt="Trenzinho Família de Amor" />
            </article>

            <article className={styles.donationCard}>
              <img className={styles.donationDecor} src="/figma-assets/donation-bg.png" alt="" aria-hidden="true" />
              <div className={styles.donationCopy}>
                <h2>Faça parte da<br />FAMÍLIA DE AMOR</h2>
                <p>Com sua doação, levamos fé, solidariedade e transformação a quem mais precisa!</p>
                <a className={styles.ctaLink} href={donationUrl} target="_blank" rel="noreferrer">FAÇA SUA DOAÇÃO</a>
              </div>
            </article>
          </div>
        </div>
        <img className={styles.paperBottom} src="/figma-assets/paper.png" alt="" aria-hidden="true" />
      </section>

      <section className={styles.adSection} data-reveal>
        <div className={styles.container}>
          <div className={styles.adDiamond}>
            <span className={styles.diamondIcon} aria-hidden="true" />
            <p>ANÚNCIO DIAMANTE</p>
          </div>
          <a className={styles.prayerButton} href="https://www.youtube.com/watch?v=a16EkOwj7UM" target="_blank" rel="noreferrer">Pai Eterno, a Vós, Nossa Oração</a>
        </div>
      </section>

      <section className={styles.historySection} id="historia" data-reveal>
        <div className={styles.container}>
          <div className={styles.historyGrid}>
            <article className={styles.historyCard}>
              <img src="/figma-assets/medalhao.png" alt="Medalhão histórico" />
              <div className={styles.textOverlay}>
                <p className={styles.eyebrow}>HISTÓRIA DA ROMARIA</p>
                <p>A devoção ao Divino Pai Eterno nasceu por volta de 1840, quando Constantino Xavier e Ana Rosa encontraram um medalhão de barro com a imagem da Santíssima Trindade coroando Nossa Senhora.</p>
                <Link className={styles.secondaryLink} href="/historia-da-romaria">Ir para a página de história</Link>
              </div>
            </article>
            <article className={styles.historyDonationCard}>
              <img src="/figma-assets/camada15.png" alt="" aria-hidden="true" />
              <div className={styles.historyDonationCopy}>
                <p className={styles.eyebrow}>Faça parte da FAMÍLIA DE AMOR</p>
                <p>Com sua doação, levamos fé, solidariedade e transformação a quem mais precisa!</p>
                <a className={styles.ctaLink} href={donationUrl} target="_blank" rel="noreferrer">FAÇA SUA DOAÇÃO</a>
              </div>
            </article>
          </div>
        </div>
      </section>

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
          <button className={styles.galleryButton} type="button" disabled>
            Formulário de envio de foto será liberado na versão 2
          </button>
        </div>
      </section>

      <section className={styles.voxSection} data-reveal>
        <img className={styles.paperTop} src="/figma-assets/paper.png" alt="" aria-hidden="true" />
        <div className={styles.container}>
          <div className={styles.voxGrid}>
            <article className={styles.voxInfoCard}>
              <h3>“VOX PATRIS”: símbolo da voz do Pai Eterno</h3>
              <p>Ouvir a voz de alguém vai além do conteúdo das palavras, é sobre reconhecer quem está por trás delas. Num mundo cada vez mais digital.</p>
              <button className={styles.linkButton} type="button" onClick={() => setOpenModal("vox")}>Clique para saber mais</button>
            </article>
            <div className={styles.voxBellWrap}>
              <img src="/figma-assets/vox-card.png" alt="Vox Patris" />
            </div>
            <article className={styles.voxDonationCard}>
              <img src="/figma-assets/vox-bg.png" alt="" aria-hidden="true" />
              <div className={styles.historyDonationCopy}>
                <p className={styles.eyebrow}>Faça parte da FAMÍLIA DE AMOR</p>
                <p>Com sua doação, levamos fé, solidariedade e transformação a quem mais precisa!</p>
                <a className={styles.ctaLink} href={donationUrl} target="_blank" rel="noreferrer">FAÇA SUA DOAÇÃO</a>
              </div>
            </article>
          </div>
        </div>
        <img className={styles.paperBottom} src="/figma-assets/paper.png" alt="" aria-hidden="true" />
      </section>

      <section className={styles.musicSection} data-reveal>
        <div className={styles.container}>
          <div className={styles.musicGrid}>
            <article className={styles.musicCard}>
              <h3>Banner Música Romaria Sporty</h3>
              <iframe
                className={styles.spotifyFrame}
                src={spotifyEmbedUrl}
                title="Spotify Romaria"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </article>
            <article className={styles.memberCard}>
              <h3>Banner Seja Membro no YouTube</h3>
              <p>Acesse o conteúdo indicado no material e abra em uma nova aba.</p>
              <a className={styles.ctaLink} href={youtubeMemberUrl} target="_blank" rel="noreferrer">ABRIR NO YOUTUBE</a>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.mapSection} id="turisticos" data-reveal>
        <div className={styles.container}>
          <p className={styles.mapEyebrow}>Mapa interativo dos pontos turísticos</p>
          <h2 className={styles.sectionTitleDark}>PONTOS TURÍSTICOS</h2>
          <div className={styles.mapGrid}>
            <div className={styles.pointList}>
              {touristPoints.map((point) => (
                <button
                  key={point.id}
                  type="button"
                  className={`${styles.pointCard} ${activeMap?.id === point.id ? styles.pointCardActive : ""}`}
                  onClick={() => setActiveMapId(point.id)}
                >
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </button>
              ))}
            </div>
            <div className={styles.mapFrame}>
              <iframe
                src={activeMap.embedUrl}
                title={activeMap.title}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.appSection} id="contato" data-reveal>
        <img className={styles.paperTop} src="/figma-assets/paper.png" alt="" aria-hidden="true" />
        <div className={styles.container}>
          <div className={styles.appGrid}>
            <article className={styles.appCard}>
              <h2>Novo App do Pai Eterno</h2>
              <p>A sua fé na palma da mão, a qualquer hora, em qualquer lugar.</p>
              <div className={styles.storeButtons}>
                <a href={googlePlayUrl} target="_blank" rel="noreferrer"><img src="/figma-assets/google-play.png" alt="Google Play" /></a>
                <a href={appStoreUrl} target="_blank" rel="noreferrer"><img src="/figma-assets/app-store.png" alt="App Store" /></a>
              </div>
              <img className={styles.appImage} src="/figma-assets/app-object.png" alt="Aplicativo Pai Eterno" />
            </article>
            <article className={styles.donationCard}>
              <img className={styles.donationDecor} src="/figma-assets/donation-bg.png" alt="" aria-hidden="true" />
              <div className={styles.donationCopy}>
                <h2>Faça parte da<br />FAMÍLIA DE AMOR</h2>
                <p>Com sua doação, levamos fé, solidariedade e transformação a quem mais precisa!</p>
                <a className={styles.ctaLink} href={donationUrl} target="_blank" rel="noreferrer">FAÇA SUA DOAÇÃO</a>
              </div>
            </article>
          </div>
        </div>
        <img className={styles.paperBottom} src="/figma-assets/paper.png" alt="" aria-hidden="true" />
      </section>

      <section className={styles.adSection} data-reveal>
        <div className={styles.container}>
          <div className={styles.adSilver}><p>ANÚNCIO PRATA</p></div>
        </div>
      </section>

      <section className={styles.footerTop} data-reveal>
        <img src="/figma-assets/clamamos.png" alt="Clamamos Abbá, Pai!" />
        <div className={styles.announcements}>
          <div className={styles.announceGroup}>
            <strong>Realização:</strong>
            <div className={styles.logoSlots}>{Array.from({ length: 5 }).map((_, index) => <span key={`realizacao-${index}`}>Logo {index + 1}</span>)}</div>
          </div>
          <div className={styles.announceGroup}>
            <strong>Apoio:</strong>
            <div className={styles.logoSlots}>{Array.from({ length: 3 }).map((_, index) => <span key={`apoio-${index}`}>Logo {index + 1}</span>)}</div>
          </div>
        </div>
      </section>

      <footer className={styles.footer} data-reveal>
        <div className={styles.footerLogos}>
          <img src="/figma-assets/footer-logo.png" alt="Afipe" />
          <img src="/figma-assets/footer-tv.png" alt="TV Pai Eterno" />
        </div>
        <p>© Copyright, 2026 Afipe - Associação Filhos do Pai Eterno</p>
      </footer>

      {isDatePickerOpen ? (
        <div className={styles.datePickerOverlay} onClick={() => setIsDatePickerOpen(false)}>
          <div className={styles.datePickerPanel} onClick={(event) => event.stopPropagation()}>
            <div className={styles.datePickerHeader}>
              <h3>Selecione a data</h3>
              <button type="button" onClick={() => setIsDatePickerOpen(false)} aria-label="Fechar">×</button>
            </div>
            <div className={styles.datePickerList}>
              {scheduleDays.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`${styles.datePickerItem} ${selectedDate === item.id ? styles.dayCardActive : ""}`}
                  onClick={() => {
                    setSelectedDate(item.id);
                    setIsDatePickerOpen(false);
                  }}
                >
                  <span className={styles.datePickerLabel}>{item.id === "all" ? "TODAS | Todas DATAS" : `${item.weekDay} ${item.label}/${item.month}`}</span>
                  <span className={styles.datePickerMeta}>{item.id === "all" ? "Mostra todas as datas" : "Mostra apenas a programação deste dia"}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {activeModal ? (
        <div className={styles.modalOverlay} role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={() => setOpenModal(null)}>
          <div className={styles.modalCard} onClick={(event) => event.stopPropagation()}>
            <button className={styles.modalClose} type="button" onClick={() => setOpenModal(null)} aria-label="Fechar">×</button>
            <h2 id="modal-title">{activeModal.title}</h2>
            <p>{activeModal.text}</p>
            <div className={styles.modalGallery}>
              {activeModal.images.map((image) => (
                <img key={image} src={image} alt={activeModal.title} />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}

