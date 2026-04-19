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
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Romaria do Divino Pai Eterno 2026",
    description: "Programação e informações oficiais da Romaria 2026.",
    url: "https://romaria.paieterno.com.br",
    siteName: "Romaria Pai Eterno",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: "https://romaria.paieterno.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${ebGaramond.variable}`} suppressHydrationWarning>
      <head>
        {/* Preconnect hints for better performance */}
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" />
        <link rel="preconnect" href="https://img.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
