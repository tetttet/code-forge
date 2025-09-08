"use client";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import React, { useState } from "react";
import Demo from "../ui/demo";
import { useTranslations } from "next-intl";

export default function CTA() {
  const [showDemo, setShowDemo] = useState(false);
  const t = useTranslations("WebCTA.cta");

  return (
    <section className="relative py-24 px-6 text-center bg-red-without-hover text-white">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Rocket className="w-16 h-16 mx-auto mb-6 text-white" />
        <h2 className="text-4xl font-bold mb-4">{t("title")}</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-100 mb-8">
          {t("desc")}
        </p>
        <button
          onClick={() => setShowDemo(true)}
          className="px-8 py-4 bg-white text-[#f66b0f] font-semibold rounded-2xl border border-white hover:bg-[#f66b0f] hover:text-white transition"
        >
          {t("button")}
        </button>
      </motion.div>
      <Demo show={showDemo} onClose={() => setShowDemo(false)} />
    </section>
  );
}
