import { ThemeProvider } from "next-themes";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jet = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {

  title      : "Petrus Kirsten — Portfolio",
  description: "Tech • Science • Creativity • Maker • Ph.D.",

  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon-180.png", sizes: "180x180", type: "image/png" }],
  },

  openGraph: {
    title       : "Petrus Kirsten — Portfolio",
    description : "Tech • Science • Creativity • Maker • Ph.D.",
    url         : "https://petruskirsten.dev",
    siteName    : "Petrus Kirsten",
    images      : [{ url: "/og.png", width: 1200, height: 630 }],
    locale      : "en_US",
    type        : "website",
  },

  twitter: {
    card        : "summary_large_image",
    title       : "Petrus Kirsten — Portfolio",
    description : "Tech • Science • Creativity • Maker • Ph.D.",
    images      : ["/og.png"],
  },

};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${jet.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
