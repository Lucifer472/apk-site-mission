import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { QueryProvider } from "@/components/query-provider";

import { cn } from "@/lib/utils";
import { SITE_TITLE } from "@/config";

import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: SITE_TITLE + " - Best and Free Android APK Download Service",
  description: "Top 100 free apps. Top 100 free games. Top 100 paid apps.",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", roboto.className)}>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7775590737760034"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        ></Script>
        <QueryProvider>
          <NuqsAdapter>{children}</NuqsAdapter>
        </QueryProvider>
      </body>
    </html>
  );
}
