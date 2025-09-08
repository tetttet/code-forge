import type { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";
import { NEXT_URL } from "@/constant/url";

export const metadata: Metadata = generateMetadata({
  title: {
    default: "Курсовые проекты CodeForge",
    template: "%s | Курсовые проекты CodeForge",
  },
  description: "Полезные статьи о веб-разработке и приложениях.",
  openGraph: {
    title: "Курсовые проекты CodeForge",
    url: `${NEXT_URL}/course-work`,
  },
});

export default function CourseWorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
