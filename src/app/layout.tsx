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
  metadataBase: new URL("https://petruskirsten.com"), // ajusta quando subir
  title: {
    default: "Petrus Kirsten — Portfólio",
    template: "%s — Petrus Kirsten",
  },
  description:
    "Físico Médico (USP) e doutorando em Física Aplicada (USP + CentraleSupélec). Projetos em Data/ML, Full‑stack, visão computacional e eletrônica.",
  openGraph: {
    title: "Petrus Kirsten — Portfólio",
    description: "Projetos em Data/ML, Full‑stack, visão computacional e eletrônica.",
    url: "https://petruskirsten.com",
    siteName: "Petrus Kirsten — Portfólio",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "pt_BR",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100`}
      >
        <ThemeProvider>
          <SiteHeader />
          {/* AQUI entra o container com margens/gutter */}
          <main className="mx-auto max-w-6xl px-6 md:px-8">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
