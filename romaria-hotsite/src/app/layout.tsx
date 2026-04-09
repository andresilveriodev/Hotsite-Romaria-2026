import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Romaria do Divino Pai Eterno 2026 - Trindade, GO",
  description: "Acompanhe a programação oficial, pontos turísticos, história e transmissão ao vivo da Romaria 2026 em Trindade. Clamamos: Abbá, Pai!",
  keywords: ["Romaria 2026", "Divino Pai Eterno", "Trindade", "Goiás", "Festa de Trindade", "Religião"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${ebGaramond.variable}`}>
      <head>
        <link rel="preconnect" href="https://img.youtube.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://video09.logicahost.com.br" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}

