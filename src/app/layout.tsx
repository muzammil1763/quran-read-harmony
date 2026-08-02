import type { Metadata, Viewport } from "next";
import { Inter, Scheherazade_New } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const scheherazade = Scheherazade_New({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-scheherazade",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1a1a2e",
};

const SITE_URL = "https://qariabdulmateenshaheen.com";
const SITE_NAME = "Qari Abdul Mateen Shaheen";
const SITE_DESCRIPTION =
  "Read and listen to the Holy Quran recited by Qari Abdul Mateen Shaheen. All 114 surahs with Arabic text, English and Urdu translations. Free online Quran reader with beautiful recitation.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Qari Abdul Mateen Shaheen — Read & Listen to the Holy Quran Online",
    template: "%s | Qari Abdul Mateen Shaheen",
  },
  description: SITE_DESCRIPTION,

  keywords: [
    "Quran online",
    "read Quran",
    "listen Quran",
    "Quran recitation",
    "Qari Abdul Mateen Shaheen",
    "Abdul Mateen Shaheen",
    "Quran with translation",
    "Quran Arabic text",
    "Quran English translation",
    "Quran Urdu translation",
    "surah",
    "ayah",
    "Islamic website",
    "Holy Quran",
    "Quran MP3",
    "Quran audio",
    "قرآن",
    "قاری عبدالمتین شاہین",
    "قرآن آنلاین",
  ],

  authors: [{ name: "Qari Abdul Mateen Shaheen", url: SITE_URL }],
  creator: "Qari Abdul Mateen Shaheen",
  publisher: "Qari Abdul Mateen Shaheen",

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Qari Abdul Mateen Shaheen — Read & Listen to the Holy Quran Online",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/Qari.png`,
        width: 1200,
        height: 630,
        alt: "Qari Abdul Mateen Shaheen — Holy Quran Recitation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Qari Abdul Mateen Shaheen — Read & Listen to the Holy Quran Online",
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/Qari.png`],
    creator: "@qariabdulmateen",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/icon.png",
  },

  manifest: "/manifest.json",

  category: "religion",
};

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: ["en", "ar", "ur"],
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "Read & Listen to the Holy Quran Online | Qari Abdul Mateen Shaheen",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      description: SITE_DESCRIPTION,
      inLanguage: ["en", "ar", "ur"],
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Qari Abdul Mateen Shaheen",
      alternateName: ["Abdul Mateen Shaheen", "قاری عبدالمتین شاہین"],
      url: SITE_URL,
      image: {
        "@type": "ImageObject",
        url: `${SITE_URL}/Qari.png`,
        caption: "Qari Abdul Mateen Shaheen",
      },
      jobTitle: "Quran Reciter (Qari)",
      description:
        "Qari Abdul Mateen Shaheen is a renowned Quran reciter known for his beautiful and melodious recitation of the Holy Quran.",
      sameAs: [SITE_URL],
    },
    {
      "@type": "AudioObject",
      name: "Holy Quran Recitation by Qari Abdul Mateen Shaheen",
      description:
        "Complete recitation of all 114 surahs of the Holy Quran by Qari Abdul Mateen Shaheen",
      creator: { "@id": `${SITE_URL}/#person` },
      inLanguage: "ar",
      about: {
        "@type": "Book",
        name: "The Holy Quran",
        alternateName: ["القرآن الكريم", "Al-Quran"],
        inLanguage: "ar",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Quran Reader",
          item: SITE_URL,
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${scheherazade.variable}`}>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Canonical already set via metadata but explicit for older crawlers */}
        <link rel="canonical" href={SITE_URL} />
      </head>
      <body
        className="font-sans antialiased"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
