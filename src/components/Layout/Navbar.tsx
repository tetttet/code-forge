"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Demo from "@/components/ui/demo";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  const linkBase = "block px-4 py-2 hover:bg-indigo-700 transition";
  const mobileLinkBase = "px-8 py-4 hover:bg-indigo-500 transition";
  const mobileDropdownLink =
    "px-16 py-3 bg-indigo-500 hover:bg-indigo-700 transition";

  // helper для закрытия меню
  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-indigo-500 text-white shadow-sm">
      <div className="container-10-12 flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href={"/"} className="flex items-center text-2xl font-bold gap-1">
          <span className="bg-white text-indigo-500 px-[5px] py-0.5">C</span>
          <span className="bg-white text-indigo-500 px-[6px] py-0.5">F</span>
          <span className="">CodeForge</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-lg relative font-medium">
          <div className="relative group">
            <button className="flex items-center gap-1 hover:opacity-80 uppercase font-bold">
              {t("nav.products")} <ChevronDown size={16} />
            </button>

            <div
              className="absolute top-full left-0 mt-4 w-56 bg-indigo-500 text-white shadow-lg 
                         opacity-0 invisible group-hover:opacity-100 group-hover:visible
                         transition-all duration-200"
            >
              <Link href="/diploma-projects" className={linkBase}>
                {t("nav.dropdown.thesis")}
              </Link>
              <Link href="/course-work" className={linkBase}>
                {t("nav.dropdown.coursework")}
              </Link>
              <Link href="/web-and-mobile-apps" className={linkBase}>
                {t("nav.dropdown.apps")}
              </Link>
            </div>
          </div>

          <Link href="#" className="hover:opacity-80">
            {t("nav.cases")}
          </Link>
          <Link href="#" className="hover:opacity-80">
            {t("nav.websites")}
          </Link>
          <Link href="#" className="hover:opacity-80">
            {t("nav.blog")}
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            className="px-4 font-bold py-[6px] rounded-lg bg-[#ef5355] hover:bg-[#d32f2f] transition"
            onClick={() => setShowDemo(true)}
          >
            {t("buttons.demo")}
          </button>
        </div>

        {/* Mobile Burger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-indigo-600 transition"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 bg-indigo-500 text-white z-50 flex flex-col pt-24"
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-indigo-400 transition"
              onClick={() => setIsOpen(false)}
            >
              <X size={28} />
            </button>

            {/* Menu */}
            <nav className="flex flex-col text-lg w-full">
              <div className="flex flex-col w-full">
                <span className="px-8 py-4 text-xl font-semibold border-b border-white/30 flex items-center gap-1">
                  {t("nav.products")}{" "}
                  <ChevronRight className="mt-[4px]" size={24} />
                </span>
                <Link
                  href="/diploma-projects"
                  className={mobileDropdownLink}
                  onClick={handleLinkClick}
                >
                  {t("nav.dropdown.thesis")}
                </Link>
                <Link
                  href="/course-work"
                  className={mobileDropdownLink}
                  onClick={handleLinkClick}
                >
                  {t("nav.dropdown.coursework")}
                </Link>
                <Link
                  href="/web-and-mobile-apps"
                  className={mobileDropdownLink}
                  onClick={handleLinkClick}
                >
                  {t("nav.dropdown.apps")}
                </Link>
              </div>

              <hr className="w-full border-t border-white/30" />

              <Link
                href="#"
                className={mobileLinkBase}
                onClick={handleLinkClick}
              >
                {t("nav.cases")}
              </Link>
              <Link
                href="#"
                className={mobileLinkBase}
                onClick={handleLinkClick}
              >
                {t("nav.websites")}
              </Link>
              <Link
                href="#"
                className={mobileLinkBase}
                onClick={handleLinkClick}
              >
                {t("nav.blog")}
              </Link>

              {/* CTA button */}
              <div className="px-8 py-6">
                <button
                  className="w-full px-8 py-3 rounded-xl bg-red font-medium shadow-lg transition"
                  onClick={() => {
                    setShowDemo(true);
                    setIsOpen(false);
                  }}
                >
                  {t("buttons.demo")}
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Demo Modal */}
      <Demo show={showDemo} onClose={() => setShowDemo(false)} />
    </header>
  );
}
