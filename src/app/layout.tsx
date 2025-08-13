import { ThemeProvider } from "next-themes";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jet = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  title       : "Petrus Kirsten — Portfolio",
  description : "Tech • Science • Creativity • Maker • Ph.D.",
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
