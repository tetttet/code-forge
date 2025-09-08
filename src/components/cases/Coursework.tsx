"use client";
import React from "react";
import { BookOpen, Code2, GraduationCap, MessageSquare } from "lucide-react";

const Coursework = () => (
  <div className="space-y-10">
    {/* Заголовок */}
    <header className="text-center max-w-3xl mx-auto space-y-3">
      <h1 className="text-4xl font-extrabold text-red">Курсовые работы</h1>
      <p className="text-lg text-gray-600">
        Разрабатываем учебные проекты под любые требования преподавателей: от
        простых приложений до сложных систем с полным сопровождением.
      </p>
    </header>

    {/* Блок с особенностями */}
    <section className="grid md:grid-cols-2 gap-6">
      <div className="bg-white shadow-sm rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-red" />
          <h2 className="text-xl font-semibold text-red">Особенности</h2>
        </div>
        <ul className="list-disc pl-5 space-y-3 text-gray-700">
          <li>Проекты разного уровня сложности (под любой вуз).</li>
          <li>
            Сайты-визитки, чат-приложения, калькуляторы, панели управления.
          </li>
          <li>Понятный код с комментариями и пояснениями.</li>
          <li>Инструкции по запуску и использованию.</li>
        </ul>
      </div>

      <div className="bg-indigo-50 shadow-sm rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <Code2 className="w-6 h-6 text-red" />
          <h2 className="text-xl font-semibold text-red">Технологии</h2>
        </div>
        <p className="text-gray-700 mb-3">
          Используем современные языки и фреймворки, которые реально применяются
          в индустрии:
        </p>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-800">
          <span className="px-2 py-1 bg-white rounded-md shadow-sm">
            Python
          </span>
          <span className="px-2 py-1 bg-white rounded-md shadow-sm">
            JavaScript
          </span>
          <span className="px-2 py-1 bg-white rounded-md shadow-sm">React</span>
          <span className="px-2 py-1 bg-white rounded-md shadow-sm">
            Node.js
          </span>
          <span className="px-2 py-1 bg-white rounded-md shadow-sm">Java</span>
          <span className="px-2 py-1 bg-white rounded-md shadow-sm">SQL</span>
        </div>
      </div>
    </section>

    {/* Поддержка */}
    <section className="bg-red-without-hover text-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-6">
      <div className="flex-1 space-y-3">
        <div className="flex items-center gap-3">
          <MessageSquare className="w-8 h-8 text-white" />
          <h3 className="text-xl font-semibold">Поддержка до сдачи</h3>
        </div>
        <p className="text-gray-50">
          Мы не просто пишем код, а сопровождаем проект до его успешной защиты:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-100">
          <li>Разбор кода и пояснения по шагам.</li>
          <li>Помощь в ответах на вопросы преподавателя.</li>
          <li>Онлайн-консультации и корректировки.</li>
        </ul>
      </div>
      <GraduationCap className="w-20 h-20 text-white flex-shrink-0" />
    </section>
  </div>
);

export default Coursework;
