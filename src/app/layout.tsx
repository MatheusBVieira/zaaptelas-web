import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Telas Mosquiteiras em Alumínio | Zaap Telas · Florianópolis",
  description:
    "Telas mosquiteiras em alumínio sob medida para janelas, portas e basculantes. Instalação rápida na Grande Florianópolis. Solicite seu orçamento via WhatsApp.",
  openGraph: {
    title: "Telas Mosquiteiras em Alumínio | Zaap Telas · Florianópolis",
    description:
      "Telas mosquiteiras em alumínio sob medida para janelas, portas e basculantes. Instalação rápida na Grande Florianópolis.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col bg-creme text-escuro font-sans">
        {children}
      </body>
    </html>
  );
}
