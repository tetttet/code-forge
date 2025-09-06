"use client";

import { Calendar, Clock, ThumbsUp, CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import Demo from "../ui/demo";

export default function CourseworkArticle() {
  const [showDemo, setShowDemo] = React.useState(false);
  const t = useTranslations("Coursework.CourseworkArticle");

  return (
    <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 space-y-10 leading-relaxed">
      {/* Заголовок */}
      <header>
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
          {t("title")}
        </h1>
        <div className="mt-2 text-lg text-gray-600">
          {t.rich("subtitle", {
            brand: (chunks) => (
              <span className="font-bold text-[20px]">
                Code<span className="text-[#ef5355]">Forge</span>
                {chunks}
              </span>
            ),
          })}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Image
              src="/images/avatar.jpg"
              alt="Code Forge Author"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="font-medium text-gray-700">{t("author")}</span>
          </div>
          <span className="flex items-center gap-1">
            <Clock size={16} /> {t("readingTime", { minutes: 7 })}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={16} /> {t("date")}
          </span>
        </div>
      </header>

      {/* Главное изображение */}
      <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden">
        <Image
          src="/images/d/coursework.jpg"
          alt="Курсовая работа"
          fill
          className="object-cover"
        />
      </div>

      {/* Контент */}
      <section className="prose max-w-none text-gray-800">
        <h2>{t("whyImportantTitle")}</h2>
        <p>{t("whyImportantText")}</p>

        <h2>{t("helpTitle")}</h2>
        <p>{t("helpIntro")}</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>{t("helpList.consulting")}</li>
          <li>{t("helpList.structuring")}</li>
          <li>{t("helpList.methodology")}</li>
          <li>{t("helpList.examples")}</li>
          <li>{t("helpList.support")}</li>
        </ul>

        <h2 className="mb-2 font-bold">{t("stepsTitle")}</h2>
        <ol className="list-decimal pl-6 space-y-2">
          {t.raw("steps").map((step: string, i: number) => (
            <li key={i}>{step}</li>
          ))}
        </ol>

        <h2 className="mt-4 mb-2 font-bold">{t("tipsTitle")}</h2>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-xl space-y-2">
          {t.raw("tips").map((tip: string, i: number) => (
            <p key={i} className="flex items-start gap-2">
              <CheckCircle className="text-blue-600 mt-1" size={20} />
              {tip}
            </p>
          ))}
        </div>

        <h2 className="mt-4 mb-2 font-bold">{t("whyUsTitle")}</h2>
        <p>{t("whyUsText")}</p>
      </section>

      {/* Дополнительное фото */}
      <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
        <Image
          src="/images/d/presentation.jpg"
          alt="Защита курсовой работы"
          fill
          className="object-cover"
        />
      </div>

      {/* Нижняя панель действий */}
      <footer className="flex flex-col sm:flex-row justify-between items-center pt-6 gap-4 border-t">
        <button
          onClick={() => setShowDemo(true)}
          className="w-full sm:w-auto flex justify-center bg-red items-center gap-2 text-white font-bold px-4 py-2 rounded-lg"
        >
          <ThumbsUp size={18} /> {t("ctaDemo")}
        </button>

        <div className="flex flex-wrap justify-center gap-3 w-full sm:w-auto">
          <a
            href={`https://t.me/share/url?url=${encodeURIComponent(
              window.location.href
            )}&text=${encodeURIComponent(t("title"))}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-2 rounded-lg"
          >
            {t("share.telegram")}
          </a>
          <a
            href={`https://vk.com/share.php?url=${encodeURIComponent(
              window.location.href
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-800 text-white px-3 py-2 rounded-lg"
          >
            {t("share.vk")}
          </a>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(
              t("title") + " " + window.location.href
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-700 text-white px-3 py-2 rounded-lg"
          >
            {t("share.whatsapp")}
          </a>
        </div>
      </footer>

      <Demo show={showDemo} onClose={() => setShowDemo(false)} />
    </article>
  );
}
