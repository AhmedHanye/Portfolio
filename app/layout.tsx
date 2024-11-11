/* eslint-disable @next/next/no-sync-scripts */
import Navbar from "@/components/nav/navbar";
import { TransitionProvider } from "@/utils/transitionContext";
import { SpeedInsights } from "@vercel/speed-insights/next";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmed Hanye",
  description: "Personal website of Ahmed Hanye",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo/favicon.ico" sizes="48x48" />
        <link
          rel="icon"
          href="/logo/favicon.svg"
          sizes="any"
          type="image/svg+xml"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/logo/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logo/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/logo/favicon-16x16.png"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="manifest"
          href="site.webmanifest"
          crossOrigin="use-credentials"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Ahmed Hanye's Portfolio" />
        <meta property="og:site_name" content="Ahmed Hanye" />
        <meta
          property="og:description"
          content="Explore the portfolio of Ahmed Hanye, a full-stack web developer."
        />
        <meta
          property="og:image"
          content="https://ahmedhanye.vercel.app/logo/favicon-32x32.png"
        />
        <meta property="og:url" content="https://ahmedhanye.vercel.app" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ahmed Hanye's Portfolio" />
        <meta
          name="twitter:description"
          content="Explore the portfolio of Ahmed Hanye, a full-stack web developer."
        />
        <meta
          name="twitter:image"
          content="https://ahmedhanye.vercel.app/logo/favicon-32x32.png"
        />

        <script src="/scripts/Theme.min.js"></script>
        <noscript>
          {/* if no js no need to solve fouc */}
          <style>{`.fouc_hide { opacity: 1 !important; }`}</style>
        </noscript>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors1`}
      >
        <TransitionProvider>
          <Navbar />
          {children}
        </TransitionProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
