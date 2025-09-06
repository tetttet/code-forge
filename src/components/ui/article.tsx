"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Tag } from "lucide-react";
import Demo from "./demo";

export function Article({
  title,
  subtitle,
  content,
  image,
  tags,
  cta,
}: {
  title: string;
  subtitle?: string;
  content: string;
  image?: string;
  tags?: string[];
  cta?: string;
}) {
  const [showDemo, setShowDemo] = React.useState(false);
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
    >
      {image && (
        <div className="relative w-full h-56 md:h-80">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}

      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="space-y-1">
          <h2 className="text-2xl font-extrabold text-gray-900">{title}</h2>
          {subtitle && (
            <h3 className="text-lg text-gray-600 font-medium">{subtitle}</h3>
          )}
        </div>

        <p className="text-gray-700 leading-relaxed flex-1">{content}</p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="flex items-center gap-1 text-sm px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-medium"
              >
                <Tag size={14} /> {tag}
              </span>
            ))}
          </div>
        )}

        {cta && (
          <button
            onClick={() => setShowDemo(true)}
            className="mt-4 w-fit px-5 py-2 rounded-xl bg-red text-white font-semibold shadow-md transition-colors duration-300"
          >
            {cta}
          </button>
        )}
      </div>

      <Demo show={showDemo} onClose={() => setShowDemo(false)} />
    </motion.article>
  );
}
