import type { Metadata } from "next";
import Script from "next/script";
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

const SITE_URL = "https://zaaptelas.com.br";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export const metadata: Metadata = {
  title: "Telas Mosquiteiras em Alumínio | Zaap Telas · Florianópolis",
  description:
    "Telas mosquiteiras em alumínio sob medida para janelas, portas e basculantes. Instalação rápida na Grande Florianópolis. Solicite seu orçamento via WhatsApp.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Telas Mosquiteiras em Alumínio | Zaap Telas · Florianópolis",
    description:
      "Telas mosquiteiras em alumínio sob medida para janelas, portas e basculantes. Instalação rápida na Grande Florianópolis.",
    url: SITE_URL,
    siteName: "Zaap Telas",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/og-zaaptelas.jpg",
        width: 1200,
        height: 630,
        alt: "Zaap Telas — Telas mosquiteiras em alumínio sob medida em Florianópolis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Telas Mosquiteiras em Alumínio | Zaap Telas · Florianópolis",
    description:
      "Telas mosquiteiras em alumínio sob medida. Instalação rápida na Grande Florianópolis.",
    images: ["/images/og-zaaptelas.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "Zaap Telas",
      legalName: "Zaaptelas",
      description:
        "Telas mosquiteiras em alumínio sob medida para janelas, portas e basculantes na Grande Florianópolis.",
      url: SITE_URL,
      telephone: "+5548991330508",
      taxID: "20.885.812/0001-79",
      image: `${SITE_URL}/images/og-zaaptelas.jpg`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Florianópolis",
        addressRegion: "SC",
        addressCountry: "BR",
      },
      areaServed: [
        "Campeche",
        "Rio Tavares",
        "Canto da Lagoa",
        "Porto da Lagoa",
        "Lagoa da Conceição",
        "Morro das Pedras",
        "Armação",
        "Pantano do Sul",
        "Açores",
        "Ribeirão da Ilha",
      ],
      paymentAccepted: "Visa, Mastercard, Elo",
      priceRange: "$$",
    },
    {
      "@type": "Product",
      name: "Tela Mosquiteira para Janelas de Correr",
      description:
        "Tela mosquiteira com aro de alumínio para janelas de correr. Remoção fácil para limpeza.",
      brand: { "@type": "Brand", name: "Zaap Telas" },
      material: "Alumínio com tecido de fibra de vidro revestida com PVC",
    },
    {
      "@type": "Product",
      name: "Tela Mosquiteira para Portas",
      description:
        "Tela para portas de correr e portas de abrir. Sob medida, com acabamento perfeito.",
      brand: { "@type": "Brand", name: "Zaap Telas" },
      material: "Alumínio com tecido de fibra de vidro revestida com PVC",
    },
    {
      "@type": "Product",
      name: "Tela Mosquiteira para Basculantes",
      description:
        "Tela fixa para janelas basculantes. Vedação total contra insetos.",
      brand: { "@type": "Brand", name: "Zaap Telas" },
      material: "Alumínio com tecido de fibra de vidro revestida com PVC",
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-creme text-escuro font-sans">
        {GTM_ID && (
          <>
            <Script
              id="gtm-script"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
              }}
            />
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
