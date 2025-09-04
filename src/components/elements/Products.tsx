"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { GraduationCapIcon, LaptopIcon, MousePointerBan } from "lucide-react";

const productsData = [
  {
    key: "web",
    imageSrc: "/images/cover_website_1x.8c5b04ac.png",
    imageAlt: "Website Development",
    link: "/",
    icon: <LaptopIcon size={50} />
  },
  {
    key: "apps",
    imageSrc: "/images/cover_website_1x.8c5b04ac.png",
    imageAlt: "App Development",
    link: "/",
    icon: <MousePointerBan size={50} />
  },
  {
    key: "study",
    imageSrc: "/images/cover_website_1x.8c5b04ac.png",
    imageAlt: "Academic Projects",
    link: "/",
    icon: <GraduationCapIcon size={50} />
  }
];

type Product = {
  key: string;
  imageSrc: string;
  imageAlt: string;
  link: string;
  icon?: React.ReactNode;
};

const ProductCard = ({
  product,
  index,
  t
}: {
  product: Product;
  index: number;
  t: (key: string) => string;
}) => {
  const isImageOnLeft = index % 2 !== 0;

  return (
    <div className="grid md:grid-cols-2 gap-16 items-center bg-indigo-500 text-white px-8 md:px-20 py-12 rounded-2xl mb-10">
      <div
        className={`flex justify-center -mx-8 md:-mx-20 ${
          isImageOnLeft ? "order-2 md:order-1" : "order-2"
        }`}
      >
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          width={2400}
          height={1600}
          priority
          className="w-full h-auto max-w-[400px] md:max-w-none"
        />
      </div>
      <div
        className={`${
          isImageOnLeft ? "order-1 md:order-2 ml-0 md:ml-10" : "order-1"
        }`}
      >
        <h3 className="items-center text-3xl md:text-5xl font-bold mb-4 leading-tight">
          {product.icon && <span className="mr-4">{product.icon}</span>}
          <span className="flex -mt-8 lg:-mt-12">
            {t(`items.${product.key}.title`)}
          </span>
        </h3>
        <p className="mb-4 text-lg md:text-xl leading-relaxed opacity-90 border-l-4 pl-4 md:pl-6 border-white">
          {t(`items.${product.key}.description`)}
        </p>
        <p className="font-semibold mb-6 text-xl md:text-2xl leading-relaxed">
          {t(`items.${product.key}.highlight`)}
        </p>
        <Link
          href={product.link}
          className="inline-block bg-[#ef5355] hover:bg-[#d32f2f] text-white font-semibold text-lg px-7 py-3 rounded-xl transition transform hover:scale-105"
        >
          {t(`items.${product.key}.button`)}
        </Link>
      </div>
    </div>
  );
};

export default function Products() {
  const t = useTranslations("Products");

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 pt-8 rounded-2xl px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-4">
            {t("title")}
          </h2>
          <p className="text-center text-lg text-gray-600 ">
            {t("subtitle")}
          </p>
        </div>
        {productsData.map((product, index) => (
          <ProductCard key={product.key} product={product} index={index} t={t} />
        ))}
      </div>
    </section>
  );
}
