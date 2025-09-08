"use client";
import Websites from "@/components/cases/Websites";
import MobileApps from "@/components/cases/MobileApps";
import Diploma from "@/components/cases/Diploma";
import Coursework from "@/components/cases/Coursework";
import { useTranslations } from "next-intl";
import { useSearchParams, useRouter } from "next/navigation";

const Page = () => {
  const t = useTranslations("Cases");
  const router = useRouter();
  const searchParams = useSearchParams();

  const cases = [
    { slug: "websites", title: t("array.0"), component: <Websites /> },
    { slug: "mobile", title: t("array.1"), component: <MobileApps /> },
    { slug: "diploma", title: t("array.2"), component: <Diploma /> },
    { slug: "coursework", title: t("array.3"), component: <Coursework /> },
  ];

  // читаем параметр из URL
  const caseSlug = searchParams.get("case") || "websites";
  const activeIndex = cases.findIndex((c) => c.slug === caseSlug);

  // переключение таба
  const setActiveCase = (slug: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set("case", slug);
    router.push(`?${params.toString()}`);
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Sidebar (desktop) */}
      <aside className="hidden md:block w-72 bg-white border-r border-gray-200 p-4">
        <h2 className="text-xl text-red uppercase font-bold mb-6">
          {t("title")}
        </h2>
        <ul>
          {cases.map((item) => (
            <li
              key={item.slug}
              onClick={() => setActiveCase(item.slug)}
              className={`cursor-pointer p-2 uppercase transition rounded-lg ${
                item.slug === caseSlug
                  ? "bg-indigo-500 text-white font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </aside>

      {/* Tabs (mobile) */}
      <div className="md:hidden bg-white shadow-sm border-b border-gray-200 overflow-x-auto">
        <ul className="flex space-x-2 p-2">
          {cases.map((item) => (
            <li
              key={item.slug}
              onClick={() => setActiveCase(item.slug)}
              className={`cursor-pointer px-4 py-2 whitespace-nowrap rounded-lg text-sm font-medium transition ${
                item.slug === caseSlug
                  ? "bg-indigo-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <section className="flex-1 p-6 md:p-10">
        {cases[activeIndex]?.component || <Websites />}
      </section>
    </main>
  );
};

export default Page;
