/// <reference types="react" />
import React from "react";
import "@/styles/global.css";
import Footer from "@/components/global/Footer";
import Navigation from "@/components/global/Navigation";
import Search from "@/components/global/Search";
import ThemeToggle from "@/components/assets/ThemeToggle";

export const metadata = {
  title: "Your Page Title",
  description: "A detailed description of your page content.",
  metadataBase: new URL("https://yourwebsite.com"),
  openGraph: {
    title: "Your Page Title",
    description: "A detailed description of your page content.",
    url: "https://yourwebsite.com/current-page",
    siteName: "Your Site Name",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Open Graph Image Alt",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourwebsite",
    creator: "@yourhandle",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body className="flex flex-col bg-white min-h-svh dark:bg-base-950 transition-colors duration-300">
        <ThemeToggle className="" aria-label="Toggle theme" />
        <Search />
        <Navigation />
        <main className="relative grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
