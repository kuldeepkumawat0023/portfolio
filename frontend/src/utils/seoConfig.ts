const BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL ||
  "https://your-domain.com";

export const defaultSEO = {
  siteName: "Kuldeep Kumawat",

  author: "Kuldeep Kumawat",

  title: "Kuldeep Kumawat | Full Stack Developer",

  description:
    "Full Stack Developer specializing in React.js, Next.js, Node.js, Express.js, MongoDB and MySQL.",

  baseUrl: BASE_URL,

  metadataBase: new URL(BASE_URL),

  ogImage: `${BASE_URL}/og-image.jpg`,

  ogImageAlt: "Kuldeep Kumawat - Full Stack Developer",

  locale: "en_US",

  twitterCreator: "@kuldeepkumawat",

  keywords: [
    "Kuldeep Kumawat",
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Portfolio",
    "MERN Stack Developer",
  ],
};