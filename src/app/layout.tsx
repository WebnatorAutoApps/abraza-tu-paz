import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abraza tu Paz | Psicologia Integral — Maria Laurentin",
  description:
    "Consulta de psicologia integral en Madrid. Maria Gabriela Laurentin te acompana en tu camino hacia el bienestar emocional, el equilibrio y la paz interior.",
  keywords: [
    "psicologia",
    "psicologia integral",
    "bienestar emocional",
    "terapia Madrid",
    "ansiedad laboral",
    "Maria Laurentin",
    "Abraza tu Paz",
  ],
  openGraph: {
    title: "Abraza tu Paz | Psicologia Integral",
    description:
      "Consulta de psicologia integral en Madrid. Encuentra tu equilibrio emocional con Maria Gabriela Laurentin.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
