"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

type Step = "collect" | "process" | "analyze";

const steps: Step[] = ["collect", "process", "analyze"];

export default function CustomerSuccessTabs() {
  const [active, setActive] = useState<Step>("collect");
  const t = useTranslations("Customer.CustomerSuccessTabs");

  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 text-center rounded-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">{t("heading")}</h2>
        <p className="max-w-3xl mx-auto mb-10 text-gray-600 text-base sm:text-lg">
          {t("subheading")}
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {steps.map((step, index) => (
            <button
              key={step}
              onClick={() => setActive(step)}
              className={`flex items-center gap-2 px-4 py-2 rounded-2xl border text-sm sm:text-base transition ${
                active === step
                  ? "bg-indigo-500 text-white border-indigo-500"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              <span className="font-bold">{index + 1}</span>
              <span>{t(`steps.${step}.title`)}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
          <div className="flex justify-center">
            <Image
              src={`/images/cover_website_1x.8c5b04ac.png`}
              alt={t(`steps.${active}.title`)}
              width={1200}
              height={800}
              priority
              className="w-full h-auto rounded-xl"
            />
          </div>
          <div>
            <p className="text-base sm:text-lg text-gray-700">
              {t(`steps.${active}.description`)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
