"use client";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const Diploma = () => {
  const t = useTranslations("CasesDiploma.Diploma");

  return (
    <div className="space-y-10">
      {/* Фото сверху */}
      <div className="relative w-full h-[50vh] rounded-2xl overflow-hidden shadow-md">
        <Image
          src="/images/c/cases/diploma.png"
          alt={t("title")}
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl bg-white rounded-md px-4 py-2 font-extrabold text-red drop-shadow-lg mb-4">
            {t("title")}
          </h1>
          <p className="text-lg md:text-xl px-4 py-2 bg-white rounded-md text-black max-w-2xl leading-relaxed">
            {t("description")}
          </p>
        </div>
      </div>

      {/* Основной блок */}
      <section className="bg-white shadow-sm rounded-2xl p-8 space-y-6 border border-gray-300">
        <h2 className="text-2xl font-semibold text-red-gradient uppercase">
          {t("section1.title")}
        </h2>
        <ul className="list-disc list-inside text-gray-800 space-y-3 leading-relaxed">
          <li>{t("section1.item1")}</li>
          <li>{t("section1.item2")}</li>
          <li>{t("section1.item3")}</li>
          <li>{t("section1.item4")}</li>
        </ul>
      </section>

      {/* Дополнительно */}
      <section className="bg-white shadow-sm rounded-2xl p-8 space-y-6 border border-gray-300">
        <h3 className="text-xl font-semibold text-red-gradient uppercase">
          {t("section2.title")}
        </h3>
        <p className="text-gray-700 leading-relaxed">{t("section2.p1")}</p>
        <p className="text-gray-700 leading-relaxed">{t("section2.p2")}</p>
      </section>
    </div>
  );
};

export default Diploma;
