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
          <h1 className="text-3xl font-bold mb-6">{t('About MultiLingua')}</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('Our Mission')}</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              {t('At MultiLingua, we break down language barriers to make knowledge universally accessible. We empower learners worldwide by providing high-quality educational content across multiple languages, helping bridge cultural divides through the power of shared understanding.')}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t('Join our movement')}</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              {t("to make knowledge borderless. Whether you are reading, contributing, or translating, you're helping build a more connected, polyglot world.")}
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
