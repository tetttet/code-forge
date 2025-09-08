import type { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata";
import { NEXT_URL } from "@/constant/url";

export const metadata: Metadata = generateMetadata({
  title: {
    default: "Кейсы современных сайтов для бизнеса, учебы и личных проектов | CodeForge",
    template: "%s | Кейсы современных сайтов для бизнеса, учебы и личных проектов | CodeForge",
  },
  description: "Полезные статьи о веб-разработке и приложениях.",
  openGraph: {
    title: "Кейсы современных сайтов для бизнеса, учебы и личных проектов | CodeForge",
    url: `${NEXT_URL}/cases`,
  },
});

export default function CasesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
