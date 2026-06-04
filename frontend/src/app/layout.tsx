import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/provider/ThemeProvider";
import HydrationGuard from "@/provider/HydrationGuard";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { RouteScrollReset } from "@/components/common/RouteScrollReset";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevPortfolio - Full Stack Developer",
  description: "Modern, responsive and scalable web applications portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <HydrationGuard>
            <RouteScrollReset />
            <Navbar />
            <div className="flex-grow">
              {children}
            </div>
            <Footer />
            <ScrollToTop />
          </HydrationGuard>
        </ThemeProvider>
      </body>
    </html>
  );
}
