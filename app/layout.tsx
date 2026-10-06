import type { Metadata, Viewport } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://acauainiciativa.com.br"),
  title: "Acuã Iniciativa | Tecnologia, Marketing & Segurança",
  description:
    "Soluções integradas e orientadas a dados: tecnologia, marketing e segurança digital.",
  openGraph: {
    title: "Acuã Iniciativa",
    description: "Tecnologia, marketing e segurança digital.",
    type: "website",
    locale: "pt_BR",
    images: ["/img/og.jpg"], // 1200×630
  },
};

export const viewport: Viewport = { themeColor: "#000000" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={josefin.variable}>
      <body className="bg-paper font-body text-ink antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-4 focus:py-3 focus:text-ink"
        >
          Ir para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}