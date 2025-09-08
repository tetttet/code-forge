"use client";

import { useState } from "react";
import Link from "next/link";
import Demo from "../ui/demo";
import { useTranslations } from "next-intl";

export default function Footer() {
  const [showDemo, setShowDemo] = useState(false);
  const t = useTranslations("Navbar");

  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 text-gray-800">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Products */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 uppercase">
            {t("nav.products")}
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <Link
                href="/diploma-projects"
                className="hover:text-red-500 transition"
              >
                {t("nav.dropdown.thesis")}
              </Link>
            </li>
            <li>
              <Link
                href="/course-work"
                className="hover:text-red-500 transition"
              >
                {t("nav.dropdown.coursework")}
              </Link>
            </li>
            <li>
              <Link
                href="/web-and-mobile-apps"
                className="hover:text-red-500 transition"
              >
                {t("nav.dropdown.apps")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 uppercase">
            {t("nav.cases")}
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <Link
                href="/websites"
                target="_blank"
                className="hover:text-red-500 transition"
              >
                {t("nav.websites")}
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                target="_blank"
                className="hover:text-red-500 transition"
              >
                {t("nav.blog")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 uppercase">
            {t("footer.linkto")}
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li>
              <button
                className="font-bold text-white px-4 py-2 rounded-lg bg-red shadow-md transition"
                onClick={() => setShowDemo(true)}
              >
                {t("buttons.demo")}
              </button>
            </li>
            <li>
              <a
                href="mailto:info@codeforge.come"
                className="hover:text-red-500 transition"
              >
                info@codeforge.come
              </a>
            </li>
          </ul>
        </div>

        {/* Blog */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 uppercase">
            {t("nav.blog")}
          </h3>
        </div>
      </div>

      {/* Divider line full width */}
      <div className="w-full border-t border-gray-300" />

      {/* Bottom Section */}
      <div className="py-6 px-6 flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto text-sm text-gray-600">
        <span className="font-bold text-[20px]">
          © Code<span className="text-red">Forge</span>
        </span>
        <div className="flex gap-6">
          <Link
            href="#"
            target="_blank"
            className="hover:text-red-500 transition"
          >
            {t("footer.under.policy")}
          </Link>
          <Link
            href="#"
            target="_blank"
            className="hover:text-red-500 transition"
          >
            {t("footer.under.terms")}
          </Link>
          <Link
            href="#"
            target="_blank"
            className="hover:text-red-500 transition"
          >
            {t("footer.under.cookies")}
          </Link>
        </div>
      </div>

      {/* Modal */}
      <Demo show={showDemo} onClose={() => setShowDemo(false)} />
    </footer>
  );
}
