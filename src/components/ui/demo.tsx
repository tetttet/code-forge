"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { sendEmail } from "@/lib/resend";

export default function Demo({ show, onClose }: { show: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
  });

  function send(formData: { firstName: string; lastName: string; email: string; contact: string }) {
    sendEmail(formData);
  }

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName.trim()) newErrors.firstName = "Введите имя";
    if (!formData.lastName.trim()) newErrors.lastName = "Введите фамилию";
    if (!formData.email.trim()) {
      newErrors.email = "Введите email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Некорректный email";
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    console.log("Форма отправлена:", formData);
    onClose();
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-indigo-500 flex items-center justify-center z-[100] p-6"
        >
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 relative text-black"
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 p-2 rounded-full text-gray-600 hover:bg-gray-100 transition"
              onClick={onClose}
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold mb-2 text-black">Запрос демо</h2>
            <p className="mb-6 text-black">
              Заполните форму <br />
              Мы свяжемся с вами в течение <span className="font-bold text-red">2</span> часов.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-black">
              <div>
                <input
                  type="text"
                  placeholder="Имя"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Фамилия"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Telegram ник или номер телефона (необязательно)"
                  value={formData.contact}
                  onChange={(e) =>
                    setFormData({ ...formData, contact: e.target.value })
                  }
                  className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <button
                type="submit"
                onClick={() => send(formData)}
                className="mt-4 px-6 py-3 rounded-lg bg-red text-white font-medium transition"
              >
                Отправить
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
