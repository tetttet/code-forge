"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

const Language = () => {
  const pathname = usePathname();
  const locale = useLocale();

  const languages = [
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
  ];

  return (
    <div className="flex container-10-12">
      {languages.map(({ code, label }) => {
        const isActive = locale === code;

        return (
          <Link
            key={code}
            href={`/${code}${pathname.replace(/^\/(en|ru)/, "")}`}
            className={`px-3 py-2 text-xl font-semibold transition ${
              isActive
                ? "bg-indigo-500 text-white"
                : "bg-transparent hover:bg-gray-300 text-gray-800"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
};

export default Language;
