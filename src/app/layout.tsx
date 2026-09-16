import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site, siteUrl } from "@/data/site";

/* Tipografia: serifada editorial para títulos, sem serifa para leitura. */
const display = Lora({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

const corpo = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-corpo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | ${site.teacher}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Geografia, Geopolítica, Atualidades e Formação Política para vestibulares.",
  applicationName: site.name,
  authors: [{ name: site.teacher }],
  keywords: [
    "vestibular",
    "ENEM",
    "FUVEST",
    "UNICAMP",
    "UNESP",
    "Geografia",
    "Geopolítica",
    "Atualidades",
    "Formação Política",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    title: `${site.name} | ${site.teacher}`,
    description:
      "Geografia, Geopolítica, Atualidades e Formação Política para vestibulares.",
    // PLACEHOLDER: envie a arte para /public/assets/og/og-ponto-de-vista.png
    images: [
      {
        url: "/assets/og/og-ponto-de-vista.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.edition}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.teacher}`,
    description:
      "Geografia, Geopolítica, Atualidades e Formação Política para vestibulares.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#5B2A86",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${corpo.variable}`}>
      <body className="min-h-dvh bg-white font-sans antialiased">
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
