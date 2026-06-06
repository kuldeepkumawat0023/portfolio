import { Metadata } from "next";
import { defaultSEO } from "@/utils/seoConfig";

interface SEOProps {
  title: string;
  description?: string;
  url?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function SEO({
  title,
  description = defaultSEO.description,
  url = "/",
  ogImage = defaultSEO.ogImage,
  noIndex = false,
}: SEOProps): Metadata {

  const fullUrl =
    `${defaultSEO.baseUrl.replace(/\/$/, "")}${url}`;

  return {
    metadataBase: defaultSEO.metadataBase,

    title,
    description,

    keywords: defaultSEO.keywords,

    authors: [
      {
        name: defaultSEO.author,
      },
    ],

    creator: defaultSEO.author,

    publisher: defaultSEO.author,

    alternates: {
      canonical: fullUrl,
    },

    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },

    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: defaultSEO.siteName,

      locale: defaultSEO.locale,

      type: "website",

      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: defaultSEO.ogImageAlt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: defaultSEO.twitterCreator,
      images: [ogImage],
    },
  };
}