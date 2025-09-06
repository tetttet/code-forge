import { useTranslations } from "next-intl";
import { ArticleList } from "@/components/elements/ArticleList";
import HeroImage from "@/components/ui/hero-image";

export default function Page() {
  const t = useTranslations("Article.Page");

  const demoArticles = t.raw("articles"); // массив статей из json

  return (
    <main className="py-8 px-4">
      <div className="container-7-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text text-red-gradient">
          {t("hero.title")}
        </h1>

        <div className="mt-8 gap-6">
          <HeroImage
            title={t("hero.title")}
            subtitle={t("hero.subtitle")}
            image_url="https://images.pexels.com/photos/3975590/pexels-photo-3975590.jpeg"
            button={t("hero.button")}
          />
        </div>

        <div className="mt-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text text-red-gradient">
            {t("servicesTitle")}
          </h1>
          <div className="mt-8 gap-6">
            <ArticleList articles={demoArticles} />
          </div>
        </div>
      </div>
    </main>
  );
}
