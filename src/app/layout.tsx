import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { SitePreloader } from "@/components/site-preloader";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ASKI Studio | Premiumowe remonty wnętrz",
  description:
    "ASKI Studio realizuje kompleksowe remonty wnętrz mieszkalnych i komercyjnych dla klientów premium w Polsce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${manrope.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SitePreloader />
        {children}
      </body>
    </html>
  );
}
