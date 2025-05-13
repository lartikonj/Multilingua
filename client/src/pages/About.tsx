// client/src/pages/About.tsx
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";

export default function About() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[
          { name: t('about'), href: "/about" }
        ]} />
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">{t('about.title')}</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('about.mission.title')}</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              {t('about.mission.content')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('about.team.title')}</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              {t('about.team.content')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('about.technology.title')}</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              {t('about.technology.content')}
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
