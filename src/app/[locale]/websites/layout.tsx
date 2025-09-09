import type { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";
import { NEXT_URL } from "@/constant/url";

export const metadata: Metadata = generateMetadata({
  title: {
    default: "Tools которые мы используем | CodeForge",
    template: "%s | Tools которые мы используем | CodeForge",
  },
  description: `Создаем современные веб-сайты и мобильные приложения. 
                Используем лучшие инструменты.
                Разработка на React, Next.js, Node.js, Flutter и других. 
                Дизайн в Figma, Adobe XD и других.
                Управление проектами в Jira, Trello и других.
                Контроль версий в Git, GitHub, GitLab и других.
                Тестирование с Jest, Cypress и другими.
                Развертывание на Vercel, Netlify, AWS и других.
                Мониторинг с Sentry, New Relic и другими. 
     `,
  openGraph: {
    title: "Tools которые мы используем | CodeForge",
    url: `${NEXT_URL}/websites`,
  },
});

export default function WebsitesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
