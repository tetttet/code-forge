"use client";

import Image from "next/image";
import React, { useState } from "react";
import Demo from "../ui/demo";
import { useTranslations } from "next-intl";

export default function TestimonialCard() {
  const [showDemo, setShowDemo] = useState(false);
  const t = useTranslations("Testimonial.Testimonial");

  return (
    <div className="bg-white">
      <div className="bg-[#eaf1ff] rounded-xl p-20 max-w-5xl mx-auto text-center shadow-sm">
        {/* Иконка кавычек */}
        <Image
          src="/svg/quote.1b655bfd.svg"
          alt="Quote Icon"
          width={44}
          height={44}
          className="mx-auto mb-6"
        />

        {/* Текст отзыва */}
        <p className="text-lg text-gray-800 leading-relaxed mb-4">
          {t("quote")}
        </p>

        {/* Дополнительный текст */}
        <p className="text-base text-gray-600 leading-relaxed mb-8">
          {t("text")}
        </p>

        {/* Кнопка */}
        <button
          onClick={() => setShowDemo(true)}
          className="px-5 py-2 border text-white font-bold bg-red rounded-lg transition"
        >
          {t("button")}
        </button>
      </div>
      <Demo show={showDemo} onClose={() => setShowDemo(false)} />
    </div>
  );
}
