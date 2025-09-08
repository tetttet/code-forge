import type { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";
import { NEXT_URL } from "@/constant/url";

export const metadata: Metadata = generateMetadata({
  title: {
    default: "Дипломные проекты CodeForge",
    template: "%s | Дипломные проекты CodeForge",
  },
  description: "Полезные статьи о веб-разработке и приложениях.",
  openGraph: {
    title: "Дипломные проекты CodeForge",
    url: `${NEXT_URL}/diploma-projects`,
  },
});

export default function DiplomaProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
