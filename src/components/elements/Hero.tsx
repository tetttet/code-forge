"use client";

import Image from "next/image";
import React, { useState } from "react";
import Demo from "../ui/demo";
import { useTranslations } from "next-intl";

const Hero = () => {
  const [showDemo, setShowDemo] = useState(false);
  const t = useTranslations("Hero.Hero");
  return (
    <section className="bg-[#6670ff] text-white py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Левая часть - текст */}
        <div className="space-y-6">
          <h1
            className="text-3xl md:text-6xl font-bold leading-tight"
            dangerouslySetInnerHTML={{ __html: t("title") }}
          />
          <p
            className="text-md md:text-lg text-gray-200"
            dangerouslySetInnerHTML={{ __html: t("subtitle") }}
          />
          <button
            onClick={() => setShowDemo(true)}
            className="bg-red transition text-white font-bold px-6 py-3 rounded-md shadow-lg"
          >
            {t("button")}
          </button>
        </div>

        {/* Правая часть - блоки */}
        <div className="relative flex flex-wrap gap-8 justify-center">
          {/* Левый маленький */}
          <div className="bg-[#6f83f5] rounded-2xl w-28 h-28 md:w-42 md:h-48 transform rotate-12 translate-y-2 shadow-lg overflow-hidden p-1 relative">
            <Image
              src="/images/h/h_1.webp"
              alt="preview"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Центральный большой */}
          <div className="bg-[#7a8fff] rounded-2xl w-44 h-44 md:w-52 md:h-64 transform -rotate-3 -translate-y-4 shadow-xl overflow-hidden p-1 relative">
            <Image
              src="/images/h/h_2.webp"
              alt="preview"
              fill
              priority
              className="object-cover rounded-xl"
            />
          </div>

          {/* Правый маленький */}
          <div className="bg-[#697ce7] hidden md:flex rounded-2xl w-28 h-28 md:w-40 md:h-40 transform rotate-12 translate-x-2 shadow-lg overflow-hidden p-1 relative">
            <Image
              src="/images/h/h_3.webp"
              alt="preview"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Нижний левый (средний) */}
          <div className="bg-[#7a8fff] hidden md:flex rounded-2xl w-32 h-32 md:w-40 md:h-48 transform -rotate-12 translate-x-2 -translate-y-1 shadow-lg overflow-hidden p-1 relative">
            <Image
              src="/images/h/h_4.webp"
              alt="preview"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Нижний центр (средний) */}
          <div className="bg-[#6b7cdd] hidden md:flex rounded-2xl w-32 h-32 md:w-36 md:h-44 transform rotate-8 translate-x-6 -translate-y-2 shadow-2xl overflow-hidden p-1 relative">
            <Image
              src="/images/h/h_5.webp"
              alt="preview"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          {/* Нижний правый (самый большой) */}
          <div className="bg-[#7386ff] hidden md:flex rounded-2xl w-48 h-48 md:w-56 md:h-56 transform rotate-3 -translate-y-7 translate-x-7 shadow-lg overflow-hidden p-1 relative">
            <Image
              src="/images/h/h_6.webp"
              alt="preview"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
      <Demo show={showDemo} onClose={() => setShowDemo(false)} />
    </section>
  );
};

export default Hero;
