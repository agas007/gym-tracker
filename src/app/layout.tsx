import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';
import "./globals.css";
import PwaInstallPrompt from "@/app/ui/pwa-install-prompt";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atlas Track - Gym Progress Tracker",
  description: "Track your gym workouts, monitor progress, and stay consistent with Atlas Track.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Atlas Track",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${inter.variable} ${inter.className} antialiased`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
          <PwaInstallPrompt />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
