import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hotsite Romaria 2026",
  description: "Hotsite da Romaria 2026 recriado com base no layout do Figma.",
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

