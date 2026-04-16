import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://petruskirsten.com"),
  title: {
    default: "Petrus Kirsten — Portfolio",
    template: "%s — Petrus Kirsten",
  },
  description:
    "Physicist, Ph.D. candidate, and developer working across data, scientific computing, and software.",
  openGraph: {
    title: "Petrus Kirsten — Portfolio",
    description:
      "Projects across data, scientific computing, software, and technical problem-solving.",
    url: "https://petruskirsten.com",
    siteName: "Petrus Kirsten — Portfolio",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100`}
      >
        <ThemeProvider>
          <SiteHeader />
          <main className="mx-auto max-w-6xl px-6 pb-16 md:px-8">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
