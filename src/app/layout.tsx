import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/data";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} Photography | Finest Wedding, Maternity & Baby Photographer in Hyderabad, Nellore & Kavali`,
      template: `%s | ${siteConfig.name} Photography`,
    },
    description: siteConfig.description,
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.name,
      images: [{ url: "/homepage.png", width: 1200, height: 630 }],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
