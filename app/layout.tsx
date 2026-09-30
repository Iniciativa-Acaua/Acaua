import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Acuã Iniciativa",
  description:
    "Tecnologia, marketing e segurança para organizações e negócios.",
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