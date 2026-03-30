"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ResponsiveBanner from "@/components/ui/ResponsiveBanner";

import CounterBarSection from "@/components/sections/CounterBarSection";

import GallerySection from "@/components/sections/GallerySection";
import HeroSection from "@/components/sections/HeroSection";

import MapSection from "@/components/sections/MapSection";
import MottoSection from "@/components/sections/MottoSection";
import MusicSection from "@/components/sections/MusicSection";
import ScheduleSection from "@/components/sections/ScheduleSection";
import VideoSection from "@/components/sections/VideoSection";


import AdSection from "@/components/sections/AdSection";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import InfoModal from "@/components/ui/InfoModal";
import { touristPoints } from "@/data/romaria-content";
import { SHOW_FORMULARIO_ENVIO_FOTO, SHOW_GALERIA, SHOW_PROGRAMACAO, infoModals } from "@/lib/landing-config";
import { CategoryFilter, ModalKey } from "@/types/landing";
import styles from "./page.module.css";


export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [selectedDate, setSelectedDate] = useState("26-06");
  const [activeMapId, setActiveMapId] = useState(touristPoints[0]?.id ?? "");
  const [openModal, setOpenModal] = useState<ModalKey>(null);

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
      <Header showProgramacao={SHOW_PROGRAMACAO} showGaleria={SHOW_GALERIA} />

      <CounterBarSection />
      <HeroSection />
      <MottoSection />

      {SHOW_PROGRAMACAO ? (
        <ScheduleSection
          selectedCategory={selectedCategory}
          selectedDate={selectedDate}
          onSelectCategory={setSelectedCategory}
          onSelectDate={setSelectedDate}
        />
      ) : null}

      <VideoSection />
      <ResponsiveBanner
        desktopSrc="/figma-assets/banners/banner_desktop_e-book.png"
        mobileSrc="/figma-assets/banners/banner_mobile_e-book.png"
        alt="Livro de cânticos e orações da Romaria 2026"
        href="https://pay.hotmart.com/H104953182H"
        marginTop={72}
        openInNewTab
      />
      <ResponsiveBanner
        desktopSrc="/figma-assets/banners/banner_treizinho.png"
        mobileSrc="/figma-assets/banners/banner_treizinho_mobile.png"
        alt="Trenzinho"
        marginTop={72}
        priority
      />
      <ResponsiveBanner
        desktopSrc="/figma-assets/banners/banner_faça_sua_doação_vermelhor.png"
        mobileSrc="/figma-assets/banners/banner_faça_sua_doação_vermelhor_mobile.png"
        alt="Faca sua doacao"
        href="https://doe.paieterno.com.br/"
        marginTop={32}
        openInNewTab
      />


      <AdSection type="diamond" />


      {SHOW_GALERIA ? <GallerySection showFormularioEnvioFoto={SHOW_FORMULARIO_ENVIO_FOTO} /> : null}


      <MusicSection />
      <ResponsiveBanner
        desktopSrc="/figma-assets/banners/banner_historia_da_romaria.png"
        mobileSrc="/figma-assets/banners/banner_treizinho_mobile.png"
        alt="Historia da Romaria"
        href="/historia-da-romaria"
      />
      <ResponsiveBanner
        desktopSrc="/figma-assets/banners/banner_faça_sua_doação_marron.png"
        mobileSrc="/figma-assets/banners/banner_faça_sua_doação_marron_mobile.png"
        alt="Faca sua doacao"
        href="https://doe.paieterno.com.br/"
        openInNewTab
        marginTop={72}
      />
      <MapSection activeMapId={activeMapId} onSelectMapId={setActiveMapId} marginTop={72} />
      <ResponsiveBanner
        desktopSrc="/figma-assets/banners/banner_vox_patris.png"
        mobileSrc="/figma-assets/banners/banner_vox_patris_mobile.png"
        alt="Vox Patris"
        marginTop={72}
      />
      <ResponsiveBanner
        marginTop={72}
        desktopSrc="/figma-assets/banners/banner_faça_sua_doação_vermelhor.png"
        mobileSrc="/figma-assets/banners/banner_faça_sua_doação_vermelhor_mobile.png"
        alt="Faca sua doacao"
        href="https://doe.paieterno.com.br/"
        openInNewTab
      />
      <ResponsiveBanner
        marginTop={72}
        desktopSrc="/figma-assets/banners/banner_app.png"
        mobileSrc="/figma-assets/banners/banner_app_mobile.png"
        alt="Aplicativo Pai Eterno"
      />
      <div className={styles.appLinksContainer}>
        <a href="https://play.google.com/store/search?q=pai%20eterno&c=apps&hl=pt_BR" target="_blank" rel="noopener noreferrer">
          <Image src="/figma-assets/banners/google_play.png" alt="Google Play" className={styles.appLinkLogo} width={210} height={62} />
        </a>
        <a href="https://apps.apple.com/br/app/pai-eterno/id6745186850" target="_blank" rel="noopener noreferrer">
          <Image src="/figma-assets/banners/app_store.png" alt="App Store" className={styles.appLinkLogo} width={210} height={62} />
        </a>
      </div>
      <ResponsiveBanner
        marginTop={72}
        desktopSrc="/figma-assets/banners/banner_faça_sua_doação_vermelhor.png"
        mobileSrc="/figma-assets/banners/banner_faça_sua_doação_vermelhor_mobile.png"
        alt="Faca sua doacao"
        href="https://doe.paieterno.com.br/"
        openInNewTab
      />

      <AdSection type="silver" />

      <Footer />

      {activeModal ? (
        <InfoModal title={activeModal.title} text={activeModal.text} images={activeModal.images} onClose={() => setOpenModal(null)} />
      ) : null}
    </main>
  );
}
