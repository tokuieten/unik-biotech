import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unikbiotech.com"),

  title: {
    default: "UNIK BIOTECH RESEARCH",
    template: "%s | UNIK BIOTECH RESEARCH",
  },

  description:
    "UNIK BIOTECH RESEARCH is a leading agricultural biotechnology company providing premium fertilizers, plant growth regulators, micronutrients, crop nutrition, and innovative farming solutions across India.",

  keywords: [
    "Unik Biotech",
    "Agriculture",
    "Biotechnology",
    "Fertilizers",
    "Micronutrients",
    "Crop Nutrition",
    "Plant Growth Regulators",
    "Organic Farming",
    "Agriculture India",
    "Nashik",
  ],

  authors: [
    {
      name: "UNIK BIOTECH RESEARCH",
    },
  ],

  creator: "UNIK BIOTECH RESEARCH",

  publisher: "UNIK BIOTECH RESEARCH",

  applicationName: "UNIK BIOTECH RESEARCH",

  category: "Agriculture",

  openGraph: {
    title: "UNIK BIOTECH RESEARCH",

    description:
      "Advanced agricultural biotechnology solutions for healthier crops and higher yields.",

    url: "https://unikbiotech.com",

    siteName: "UNIK BIOTECH RESEARCH",

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "UNIK BIOTECH RESEARCH",

    description:
      "Premium agricultural biotechnology products trusted by farmers across India.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`
          ${inter.variable}
          ${manrope.variable}
          min-h-screen
          bg-(--color-background)
          text-(--color-text)
          antialiased
        `}
      >
        <div
          className="
            relative
            flex
            min-h-screen
            flex-col
          "
        >
          <Header />

          <main
            id="main-content"
            className="
              relative
              z-0
              flex-1
            "
          >
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}