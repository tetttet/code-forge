"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Demo from "../ui/demo";

export default function Hero() {
  const [showDemo, setShowDemo] = useState(false);
  const t = useTranslations("WebHero.Hero");

  return (
    <section className="relative flex flex-col items-center justify-center text-center py-28 px-6 overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-blue-50">
      {/* Decorative Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 0.4, scale: 1, y: 0 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -50 }}
        animate={{ opacity: 0.5, scale: 1, y: 0 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.25, scale: 1.1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"
      />

      {/* Hero Text */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
      >
        {t.rich("title", {
          red: (chunk) => <span className="text-red">{chunk}</span>,
        })}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative mt-6 max-w-2xl text-lg md:text-xl text-gray-600"
      >
        {t("subtitle")}
      </motion.p>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowDemo(true)}
        className="relative mt-10 px-8 py-4 bg-red text-white text-lg font-semibold rounded-2xl shadow-lg transition"
      >
        {t("button")}
      </motion.button>

      {/* Demo Modal */}
      <Demo show={showDemo} onClose={() => setShowDemo(false)} />
    </section>
  );
}
