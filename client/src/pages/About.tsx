// client/src/pages/About.tsx
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/providers/LanguageProvider";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, BookOpen, Languages, BarChart2, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const stats = [
    { value: "4", label: t('about.stats.languages'), icon: <Languages className="h-6 w-6" /> },
    { value: "6", label: t('about.stats.subjects'), icon: <BookOpen className="h-6 w-6" /> },
    { value: "100+", label: t('about.stats.articles'), icon: <Globe className="h-6 w-6" /> },
    { value: "95%", label: t('about.stats.coverage'), icon: <BarChart2 className="h-6 w-6" /> }
  ];

  const features = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: t('about.features.multilingual.title'),
      description: t('about.features.multilingual.description')
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: t('about.features.subjects.title'),
      description: t('about.features.subjects.description')
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: t('about.features.readtime.title'),
      description: t('about.features.readtime.description')
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: t('about.features.quality.title'),
      description: t('about.features.quality.description')
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={[
          { name: t('about'), href: "/about" }
        ]} />
        
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Hero Section */}
          <section className="text-center py-12">
            <h1 className="text-4xl font-bold mb-6">{t('about.title')}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/subjects">
                <Button variant="outline">
                  {t('explore.subjects')}
                </Button>
              </Link>
              <Link href={`/article/${language === 'ar' ? 'future-of-ai-arabic' : 'future-of-artificial-intelligence'}`}>
                <Button>
                  {t('read.featured')}
                </Button>
              </Link>
            </div>
          </section>

          {/* Stats */}
          <section>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow">
                  <CardContent className="flex flex-col items-center">
                    <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full mb-3">
                      {stat.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Mission */}
          <section className="py-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">{t('about.mission.title')}</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  {t('about.mission.content')}
                </p>
                <ul className="space-y-3 mb-8">
                  {['accessibility', 'quality', 'innovation'].map((value) => (
                    <li key={value} className="flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2 mt-1">•</span>
                      <span className="text-lg">{t(`about.values.${value}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
                  alt={t('about.mission.image_alt')}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-8">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('about.features.title')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-primary-100 dark:bg-primary-900 p-3 rounded-full w-max mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-12 text-center bg-primary-50 dark:bg-primary-900/30 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">{t('about.cta.title')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('about.cta.description')}
            </p>
            <Link href="/subjects">
              <Button size="lg">
                {t('explore.now')}
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </Layout>
  );
}
