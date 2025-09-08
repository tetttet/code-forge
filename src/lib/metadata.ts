import type { Metadata } from "next";

const baseMetadata: Metadata = {
  title: {
    default: "CodeForge — разработка сайтов, приложений и дипломных работ",
    template: "%s | CodeForge",
  },
  description:
    "CodeForge — это сервис, где мы разрабатываем веб-сайты, мобильные приложения, дипломные и курсовые проекты, а также предлагаем IT-решения для бизнеса.",
  icons: {
    icon: "/logo/site-logo.png",
  },
  openGraph: {
    title: "CodeForge — разработка сайтов, приложений и дипломных работ",
    description:
      "Мы делаем современные веб-сайты, мобильные приложения и помогаем студентам с дипломными и курсовыми проектами.",
    url: "https://codeforge.kz",
    siteName: "CodeForge",
    images: [
      {
        url: "/logo/site-logo.png",
        width: 512,
        height: 512,
        alt: "CodeForge Logo",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeForge",
    description:
      "Разработка сайтов, приложений и помощь с дипломами — CodeForge.",
    images: ["/logo/site-logo.png"],
  },
};

export function generateMetadata(overrides: Metadata = {}): Metadata {
  return {
    ...baseMetadata,
    ...overrides,
    title:
      overrides.title !== undefined
        ? overrides.title
        : baseMetadata.title,
    openGraph: {
      ...baseMetadata.openGraph,
      ...overrides.openGraph,
    },
    twitter: {
      ...baseMetadata.twitter,
      ...overrides.twitter,
    },
  };
}
