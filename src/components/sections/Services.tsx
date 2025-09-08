"use client";
import { motion } from "framer-motion";
import { Code, Smartphone, Globe } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("WebServices.services");

  const services = [
    {
      icon: <Globe className="w-12 h-12 text-red" />,
      title: t("items.web.title"),
      desc: t("items.web.desc"),
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red" />,
      title: t("items.mobile.title"),
      desc: t("items.mobile.desc"),
    },
    {
      icon: <Code className="w-12 h-12 text-red" />,
      title: t("items.study.title"),
      desc: t("items.study.desc"),
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-tr from-indigo-100 via-white to-blue-50 overflow-hidden">
      {/* Фоновые элементы */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
        className="absolute -top-20 -left-20 w-72 h-72 bg-pink-200 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1.1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl"
      />

      {/* Заголовок */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative text-3xl md:text-5xl font-extrabold text-center text-gray-900 mb-16"
      >
        {t.rich("title", {
          highlight: (chunks) => <span className="text-red">{chunks}</span>,
        })}
      </motion.h2>

      {/* Карточки */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="p-8 bg-white/70 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-xl transition relative border border-transparent hover:border-red/30"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mb-6"
            >
              {service.icon}
            </motion.div>
            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
