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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Qari Abdul Mateen Shaheen — Quran Recitation",
  description:
    "Listen to and read the Holy Quran recited by Qari Abdul Mateen Shaheen. Browse all 114 surahs with Arabic text, English and Urdu translations.",
  icons: {
    icon: "/Qari.png",
    apple: "/Qari.png",
  },
  openGraph: {
    title: "Qari Abdul Mateen Shaheen — Quran Recitation",
    description:
      "Listen to and read the Holy Quran recited by Qari Abdul Mateen Shaheen.",
    type: "website",
    images: [{ url: "/Qari.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/Qari.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${scheherazade.variable}`}>
      <body className="font-sans antialiased" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
