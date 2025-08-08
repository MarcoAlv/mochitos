import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Roboto, Inter, Funnel_Sans, Nunito, Inria_Serif } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-sans",
  display: 'swap',
});

const funnelSans = Funnel_Sans({
  subsets: ["latin"],
  variable: "--font-funnel-sans",
  display: 'swap',
});

const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  variable: "--font-inria-serif",
  display: 'swap',
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito-base",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mochitos",
  description: "An app created with love, hard work and a lot of puppies",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const topPadding = true;
  return (
    <html lang="en">
      <body
        className={`
          ${roboto.variable} ${inter.variable} ${funnelSans.variable}
          ${nunito.variable} ${inriaSerif.variable}
          antialiased h-full font-inter min-h-screen flex flex-col
        dark:bg-navy-blue-850 dark:text-white
        `}
      >
        <Header />
        <main className={`flex-1  ${topPadding ? "pt-20" : ""}`}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
