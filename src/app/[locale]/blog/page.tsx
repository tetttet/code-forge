"use client";
import React from "react";

const Page = () => {
  return (
    <div className="flex container-10-12 items-center justify-center min-h-[70vh]">
      <div className="text-center p-8 rounded-2xl border border-orange-400 bg-white">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-red-gradient">
          Страница в обработке
        </h1>
        <p className="text-gray-600 mb-6">
          Мы работаем над этой страницей, скоро она будет доступна.
        </p>
        <div className="flex justify-center">
          <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default Page;
