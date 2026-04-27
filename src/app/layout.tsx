/// <reference types="react" />
import React from "react";
import "@/styles/global.css";
import Footer from "@/components/global/Footer";
import Navigation from "@/components/global/Navigation";
import Search from "@/components/global/Search";
import ThemeToggle from "@/components/assets/ThemeToggle";

const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme:dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})();`;

export const metadata = {
  title: "Saurabh Jirli — Software Engineer",
  description: "Portfolio of Saurabh Jirli — a software engineer building backend services, data pipelines, and IoT systems at Touchcore Systems, Pune.",
  metadataBase: new URL("https://saurabhjirli.dev"),
  openGraph: {
    title: "Saurabh Jirli — Software Engineer",
    description: "Portfolio of Saurabh Jirli — a software engineer building backend services, data pipelines, and IoT systems at Touchcore Systems, Pune.",
    url: "https://saurabhjirli.dev",
    siteName: "Saurabh Jirli",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://saurabhjirli.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saurabh Jirli — Software Engineer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@saurabhjirli",
    creator: "@saurabhjirli",
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
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex flex-col min-h-[100dvh] bg-white dark:bg-base-950 text-base-900 dark:text-white" suppressHydrationWarning>
        <div className="grain-overlay" aria-hidden="true" />
        <ThemeToggle className="" aria-label="Toggle theme" />
        <Search />
        <Navigation />
        <main className="relative grow overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
