"use client";

import Image from "next/image";
import { useState } from "react";
import Demo from "./demo";
import { useTranslations } from "next-intl";

type HeroImageProps = {
  title: string;
  subtitle: string;
  image_url: string;
  button: string;
};

export default function HeroImage({
  title,
  subtitle,
  image_url,
}: HeroImageProps) {
  const [showDemo, setShowDemo] = useState(false);
  const t = useTranslations("Navbar.buttons");

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg h-96">
      {/* фон-изображение */}
      <Image
        src={image_url}
        alt="Relaxing app background"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        fill
      />

      {/* градиент затемнения только снизу */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

      <div className="relative z-10 p-6 h-full flex flex-col justify-between">
        <div>
          <p className="text-xs font-semibold uppercase text-white/80">
            {title}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white max-w-lg">{subtitle}</h3>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <button
              onClick={() => setShowDemo(true)}
              className="text-sm text-white/80 hover:text-white transition uppercase"
            >
              {t("demo")}
            </button>
            <p className="text-white/80 mt-1 text-[16px]">
              <span className="text-red font-bold">Gmail:</span>
              <a
                className="text-white/80 hover:text-white transition ml-1"
                href="mailto:fagutlaxabit@gmail.com"
              >
                fagutlaxabit@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <Demo show={showDemo} onClose={() => setShowDemo(false)} />
    </div>
  );
}
