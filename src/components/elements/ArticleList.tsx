"use client";
import React from "react";
import { Article } from "../ui/article";

export function ArticleList({
  articles,
}: {
  articles: {
    id: number;
    title: string;
    subtitle?: string;
    content: string;
    image?: string;
    tags?: string[];
    cta?: string;
  }[];
}) {
  return (
    <div className="space-y-8">
      {articles.map((a, index) => (
        <Article
          key={`${a.id ?? index}-${a.title}`}
          title={a.title}
          subtitle={a.subtitle}
          content={a.content}
          image={a.image}
          tags={a.tags}
          cta={a.cta}
        />
      ))}
    </div>
  );
}
