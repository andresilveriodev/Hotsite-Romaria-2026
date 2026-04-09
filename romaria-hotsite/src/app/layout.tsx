import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

