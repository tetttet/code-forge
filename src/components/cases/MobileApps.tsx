"use client";
import { motion } from "framer-motion";
import { Smartphone, Rocket, Bell, Store } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";

const MobileApps = () => {
  const t = useTranslations("CasesMobileApps.MobileApps");

  const features = [
    {
      icon: <Smartphone className="w-7 h-7 text-indigo-600" />,
      title: t("features.cross.title"),
      desc: t("features.cross.desc"),
    },
    {
      icon: <Store className="w-7 h-7 text-green-600" />,
      title: t("features.publish.title"),
      desc: t("features.publish.desc"),
    },
    {
      icon: <Bell className="w-7 h-7 text-amber-600" />,
      title: t("features.integrations.title"),
      desc: t("features.integrations.desc"),
    },
    {
      icon: <Rocket className="w-7 h-7 text-red-600" />,
      title: t("features.uiux.title"),
      desc: t("features.uiux.desc"),
    },
  ];

  const stages = [
    {
      step: "1",
      title: t("stages.1.title"),
      text: t("stages.1.text"),
      color: "text-indigo-600",
    },
    {
      step: "2",
      title: t("stages.2.title"),
      text: t("stages.2.text"),
      color: "text-green-600",
    },
    {
      step: "3",
      title: t("stages.3.title"),
      text: t("stages.3.text"),
      color: "text-amber-600",
    },
    {
      step: "4",
      title: t("stages.4.title"),
      text: t("stages.4.text"),
      color: "text-red-600",
    },
    {
      step: "5",
      title: t("stages.5.title"),
      text: t("stages.5.text"),
      color: "text-gray-700",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Заголовок */}
      <header className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-red-gradient"
        >
          {t("title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto"
        >
          {t("subtitle")}
        </motion.p>
      </header>

      {/* Возможности */}
      <section className="grid md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className="bg-white shadow-sm rounded-xl p-6 border border-gray-300 flex gap-4 hover:shadow-lg transition"
          >
            <div className="flex-shrink-0">{f.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                {f.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Таймлайн */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-50 rounded-xl border border-gray-300 p-8"
      >
        <h2 className="text-2xl font-bold text-red-gradient mb-6 text-center">
          {t("stagesTitle")}
        </h2>
        <div className="space-y-6">
          {stages.map((stage, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex items-start gap-4"
            >
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 font-bold ${stage.color}`}
              >
                {stage.step}
              </div>
              <div>
                <h3 className={`text-lg font-semibold ${stage.color}`}>
                  {stage.title}
                </h3>
                <p className="text-gray-700 text-sm mt-1">{stage.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Применение */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-sm border border-gray-300 rounded-xl p-8"
      >
        <h3 className="text-xl font-medium text-gray-800 mb-4">
          {t("usageTitle")}
        </h3>
        <p className="text-gray-600 leading-relaxed border-l-4 border-indigo-500 pl-4">
          {t("usageText")}
        </p>
      </motion.section>
    </div>
  );
};

export default MobileApps;
