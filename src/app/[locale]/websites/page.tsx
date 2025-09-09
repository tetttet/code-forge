"use client";
import React from "react";
import { useTranslations } from "next-intl";
import {
  Globe,
  Smartphone,
  Cpu,
  Database,
  Gamepad2,
  Cloud,
} from "lucide-react";

const language = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Go",
  "Swift",
  "Kotlin",
  "Ruby",
  "Rust",
];

const Page = () => {
  const t = useTranslations("WebSites.page");
  const f = useTranslations("WebSites.features");

  const features = [
    {
      icon: <Globe className="w-12 h-12 text-indigo-600" />,
      title: f("web.title"),
      desc: f("web.desc"),
    },
    {
      icon: <Smartphone className="w-12 h-12 text-pink-500" />,
      title: f("mobile.title"),
      desc: f("mobile.desc"),
    },
    {
      icon: <Cpu className="w-12 h-12 text-green-600" />,
      title: f("ai.title"),
      desc: f("ai.desc"),
    },
    {
      icon: <Database className="w-12 h-12 text-orange-500" />,
      title: f("db.title"),
      desc: f("db.desc"),
    },
    {
      icon: <Gamepad2 className="w-12 h-12 text-purple-600" />,
      title: f("games.title"),
      desc: f("games.desc"),
    },
    {
      icon: <Cloud className="w-12 h-12 text-blue-500" />,
      title: f("cloud.title"),
      desc: f("cloud.desc"),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900 py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-5xl font-extrabold mb-6 text-red-gradient">
          {t("title")}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t("subtitle")}
        </p>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-red-gradient">
          {t("createTitle")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="mb-4 flex justify-center">{f.icon}</div>
              <h3 className="font-semibold text-xl mb-3">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 relative overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-12 text-red-gradient">
          {t("languagesTitle")}
        </h2>
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {language.map((lang, idx) => (
              <span
                key={idx}
                className="mx-3 px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold inline-block"
              >
                {lang}
              </span>
            ))}
            {language.map((lang, idx) => (
              <span
                key={idx}
                className="mx-3 px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold inline-block"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Page;
