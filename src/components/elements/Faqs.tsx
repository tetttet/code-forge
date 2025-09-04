"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations("FAQ.FAQ");

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = t.raw("list") as { question: string; answer: string }[];

  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          {t("title")}
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-[#eaf1ff] rounded-xl"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 text-left text-base sm:text-lg text-gray-800 font-semibold sm:font-bold focus:outline-none"
              >
                {faq.question}
                {openIndex === i ? (
                  <Minus className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Plus className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, maxHeight: 0 }}
                    animate={{ opacity: 1, maxHeight: 500 }}
                    exit={{ opacity: 0, maxHeight: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <hr className="border-t border-blue-200 mb-3 sm:mb-4" />
                    <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-gray-600 text-left text-sm sm:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
