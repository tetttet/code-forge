import type { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";
import { NEXT_URL } from "@/constant/url";

export const metadata: Metadata = generateMetadata({
  title: {
    default: "Веб и мобильные приложения CodeForge",
    template: "%s | Веб и мобильные приложения CodeForge",
  },
  description: "Создаем современные веб-сайты и мобильные приложения.",
  openGraph: {
    title: "Веб и мобильные приложения CodeForge",
    url: `${NEXT_URL}/web-and-mobile-apps`,
  },
});

export default function WebAndMobileAppsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
