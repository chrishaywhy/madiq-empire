import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Madiq Empire — Independent Record Label",
    template: "%s — Madiq Empire",
  },
  description:
    "Madiq Empire is an independent record label and creative force built around distinctive artists, original music, and a new generation of sound.",
  icons: {
    icon: "/images/madiq-logo-favicon.webp",
  },
  keywords: [
    "Madiq Empire",
    "record label",
    "independent record label",
    "Nigerian record label",
    "Afrobeats",
    "Afrosounds",
    "Nigerian music",
    "African music",
    "Lordmoon",
    "Emmadbest",
    "Boixtiz",
    "Boyraven",
    "Kaysmark",
  ],
  authors: [{ name: "Madiq Empire" }],
  creator: "Madiq Empire",
  publisher: "Madiq Empire",
  manifest: "/manifest.webmanifest",
  metadataBase: new URL("http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
    openGraph: {
    title: "Madiq Empire — Independent Record Label",
    description:
      "Discover artists, music, and the creative world of Madiq Empire.",
    type: "website",
    locale: "en_NG",
    siteName: "Madiq Empire",
    images: [
      {
        url: "/images/madiq-preview.webp",
        width: 1200,
        height: 630,
        alt: "Madiq Empire — Independent Record Label",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  <StructuredData />
  {children}
</body>
    </html>
  );
}
