"use client";
import { Globe, ShoppingCart, Layers } from "lucide-react";
import Image from "next/image";
import React from "react";
import CTA from "../sections/CTA";
import { useTranslations } from "next-intl";

const Websites = () => {
  const t = useTranslations("CasesWebsites.websites");

  const projects = [
    {
      icon: <ShoppingCart className="w-8 h-8 text-indigo-500 mb-3" />,
      title: t("examples.projects.0.title"),
      desc: t("examples.projects.0.desc"),
      img: "/images/c/cases/shop-example.jpg",
      alt: t("examples.projects.0.alt"),
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500 mb-3" />,
      title: t("examples.projects.1.title"),
      desc: t("examples.projects.1.desc"),
      img: "/images/c/cases/corporate-example.jpg",
      alt: t("examples.projects.1.alt"),
    },
    {
      icon: <Layers className="w-8 h-8 text-purple-500 mb-3" />,
      title: t("examples.projects.2.title"),
      desc: t("examples.projects.2.desc"),
      img: "/images/c/cases/crm-example.jpg",
      alt: t("examples.projects.2.alt"),
    },
  ];

  const cardClasses =
    "bg-gray-50 border border-gray-300 rounded-xl p-5 shadow-sm hover:shadow-md transition";

  return (
    <div className="space-y-10">
      {/* Заголовок */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-red-gradient flex items-center justify-center gap-2">
          {t("title")}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("desc")}</p>
      </header>

      {/* Что мы делаем */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow-sm rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-red">
            {t("whatWeDo.title")}
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {t.raw("whatWeDo.list").map((item: string, idx: number) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-sm">
          <Image
            src="/images/c/cases/web-dev.jpg"
            alt="Разработка сайтов"
            className="w-full h-full object-cover"
            width={500}
            height={300}
            priority
          />
        </div>
      </section>

      {/* Примеры */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold text-red-gradient uppercase">
          {t("examples.title")}
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map(({ icon, title, desc, img, alt }) => (
            <article key={title} className={cardClasses}>
              {icon}
              <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
              <p className="text-gray-600 mt-2">{desc}</p>
              <Image
                src={img}
                alt={alt}
                className="mt-3 rounded-lg object-cover"
                width={400}
                height={200}
                loading="lazy"
              />
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
};

export default Websites;
