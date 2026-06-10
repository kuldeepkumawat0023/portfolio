import type { Metadata } from "next";
import Script from "next/script";
import { defaultSEO } from "@/utils/seoConfig";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/provider/ThemeProvider";
import HydrationGuard from "@/provider/HydrationGuard";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { RouteScrollReset } from "@/components/common/RouteScrollReset";
import { CursorParticles } from "@/components/common/CursorParticles";
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
  metadataBase: defaultSEO.metadataBase,

  title: {
    default: defaultSEO.title,
    template: "%s",
  },

  description: defaultSEO.description,

  keywords: defaultSEO.keywords,

  authors: [
    {
      name: defaultSEO.author,
    },
  ],

  creator: defaultSEO.author,

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: defaultSEO.title,
    description: defaultSEO.description,
    url: defaultSEO.baseUrl,
    siteName: defaultSEO.siteName,
    locale: "en_US",
    type: "website",

    images: [
      {
        url: defaultSEO.ogImage,
        width: 1200,
        height: 630,
        alt: defaultSEO.ogImageAlt,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: defaultSEO.title,
    description: defaultSEO.description,
    images: [defaultSEO.ogImage],
    creator: defaultSEO.twitterCreator,
  },

  alternates: {
    canonical: defaultSEO.baseUrl,
  },
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
            <CursorParticles />
            <Navbar />
            <div className="flex-grow">
              {children}
            </div>
            <Footer />
            <ScrollToTop />
            <Script
              id="person-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Person",
                  name: "Kuldeep Kumawat",
                  jobTitle: "Full Stack Developer",
                  url: defaultSEO.baseUrl,
                  image: defaultSEO.ogImage,
                }),
              }}
            />
          </HydrationGuard>
        </ThemeProvider>
      </body>
    </html>
  );
}
