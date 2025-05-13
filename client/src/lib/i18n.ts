import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Default translations for UI elements
const resources = {
  en: {
    translation: {
      // Navigation
      'home': 'Home',
      'subjects': 'Subjects',
      'popular': 'Popular',
      'recent': 'Recent',
      'about': 'About',
      
      // Language names
      'english': 'English',
      'french': 'French',
      'spanish': 'Spanish',
      'arabic': 'Arabic',
      
      // Subject names
      'technology': 'Technology',
      'science': 'Science',
      'environment': 'Environment',
      'health': 'Health',
      'arts-culture': 'Arts & Culture',
      'travel': 'Travel',
      
      // Homepage
      'hero.title': 'Discover Knowledge Across Languages',
      'hero.subtitle': 'Explore articles on diverse subjects and enhance your learning by reading in multiple languages.',
      'start.reading': 'Start Reading',
      'browse.subjects': 'Browse Subjects',
      'featured.articles': 'Featured Articles',
      'view.all': 'View all',
      'explore.by.subject': 'Explore by Subject',
      'explore.description': 'Discover articles across various categories in multiple languages',
      'latest.articles': 'Latest Articles',
      'recent.updates': 'Recent Updates',
      'min.read': 'min read',
      'articles': 'articles',
      
      // CTA section
      'cta.title': 'Ready to explore in your language?',
      'cta.subtitle': 'Enhance your learning experience by reading content in multiple languages. Start your journey today.',
      'get.started': 'Get Started',
      'learn.more': 'Learn More',
      
      // Footer
      'footer.description': 'A multilingual platform for knowledge sharing and language learning through diverse content.',
      'footer.explore': 'Explore',
      'footer.languages': 'Languages',
      'footer.about': 'About',
      'footer.mission': 'Our Mission',
      'footer.contact': 'Contact Us',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Service',
      'footer.contributors': 'Contributors',
      'footer.copyright': '© 2023 MultiLingua. All rights reserved.',
      'footer.cookies': 'Cookies',
      
      // Theme
      'theme.toggle': 'Toggle theme',
      'language.switch': 'Switch language',
      
      // Search
      'search': 'Search',
      'search.title': 'Search Articles',
      'search.placeholder': 'Enter keywords to search...',
      'search.no.results': 'No articles found matching your search.',
      
      // Not found page
      'not.found.title': '404 Page Not Found',
      'not.found.description': 'The page you are looking for does not exist.',
      'back.home': 'Back to Home',
      'popular.topics': 'Popular Topics'
    }
  },
  fr: {
    translation: {
      // Navigation
      'home': 'Accueil',
      'subjects': 'Sujets',
      'popular': 'Populaire',
      'recent': 'Récent',
      'about': 'À propos',
      
      // Language names
      'english': 'Anglais',
      'french': 'Français',
      'spanish': 'Espagnol',
      'arabic': 'Arabe',
      
      // Subject names
      'technology': 'Technologie',
      'science': 'Science',
      'environment': 'Environnement',
      'health': 'Santé',
      'arts-culture': 'Arts & Culture',
      'travel': 'Voyage',
      
      // Homepage
      'hero.title': 'Découvrez des Connaissances en Plusieurs Langues',
      'hero.subtitle': 'Explorez des articles sur divers sujets et améliorez votre apprentissage en lisant en plusieurs langues.',
      'start.reading': 'Commencer à Lire',
      'browse.subjects': 'Parcourir les Sujets',
      'featured.articles': 'Articles en Vedette',
      'view.all': 'Voir tout',
      'explore.by.subject': 'Explorer par Sujet',
      'explore.description': 'Découvrez des articles dans diverses catégories en plusieurs langues',
      'latest.articles': 'Derniers Articles',
      'recent.updates': 'Mises à Jour Récentes',
      'min.read': 'min de lecture',
      'articles': 'articles',
      
      // CTA section
      'cta.title': 'Prêt à explorer dans votre langue ?',
      'cta.subtitle': 'Améliorez votre expérience d\'apprentissage en lisant du contenu en plusieurs langues. Commencez votre voyage aujourd\'hui.',
      'get.started': 'Commencer',
      'learn.more': 'En Savoir Plus',
      
      // Footer
      'footer.description': 'Une plateforme multilingue pour le partage de connaissances et l\'apprentissage des langues à travers un contenu diversifié.',
      'footer.explore': 'Explorer',
      'footer.languages': 'Langues',
      'footer.about': 'À propos',
      'footer.mission': 'Notre Mission',
      'footer.contact': 'Contactez-nous',
      'footer.privacy': 'Politique de Confidentialité',
      'footer.terms': 'Conditions d\'Utilisation',
      'footer.contributors': 'Contributeurs',
      'footer.copyright': '© 2023 MultiLingua. Tous droits réservés.',
      'footer.cookies': 'Cookies',
      
      // Theme
      'theme.toggle': 'Changer de thème',
      'language.switch': 'Changer de langue',
      
      // Search
      'search': 'Rechercher',
      'search.title': 'Rechercher des Articles',
      'search.placeholder': 'Entrez des mots-clés pour rechercher...',
      'search.no.results': 'Aucun article trouvé correspondant à votre recherche.',
      
      // Not found page
      'not.found.title': '404 Page Non Trouvée',
      'not.found.description': 'La page que vous recherchez n\'existe pas.',
      'back.home': 'Retour à l\'Accueil',
      'popular.topics': 'Sujets Populaires'
    }
  },
  es: {
    translation: {
      // Navigation
      'home': 'Inicio',
      'subjects': 'Temas',
      'popular': 'Popular',
      'recent': 'Reciente',
      'about': 'Acerca de',
      
      // Language names
      'english': 'Inglés',
      'french': 'Francés',
      'spanish': 'Español',
      'arabic': 'Árabe',
      
      // Subject names
      'technology': 'Tecnología',
      'science': 'Ciencia',
      'environment': 'Medio Ambiente',
      'health': 'Salud',
      'arts-culture': 'Arte y Cultura',
      'travel': 'Viajes',
      
      // Homepage
      'hero.title': 'Descubre Conocimiento en Varios Idiomas',
      'hero.subtitle': 'Explora artículos sobre diversos temas y mejora tu aprendizaje leyendo en múltiples idiomas.',
      'start.reading': 'Comenzar a Leer',
      'browse.subjects': 'Explorar Temas',
      'featured.articles': 'Artículos Destacados',
      'view.all': 'Ver todo',
      'explore.by.subject': 'Explorar por Tema',
      'explore.description': 'Descubre artículos en varias categorías en múltiples idiomas',
      'latest.articles': 'Últimos Artículos',
      'recent.updates': 'Actualizaciones Recientes',
      'min.read': 'min de lectura',
      'articles': 'artículos',
      
      // CTA section
      'cta.title': '¿Listo para explorar en tu idioma?',
      'cta.subtitle': 'Mejora tu experiencia de aprendizaje leyendo contenido en múltiples idiomas. Comienza tu viaje hoy.',
      'get.started': 'Comenzar',
      'learn.more': 'Saber Más',
      
      // Footer
      'footer.description': 'Una plataforma multilingüe para compartir conocimientos y aprender idiomas a través de contenido diverso.',
      'footer.explore': 'Explorar',
      'footer.languages': 'Idiomas',
      'footer.about': 'Acerca de',
      'footer.mission': 'Nuestra Misión',
      'footer.contact': 'Contáctanos',
      'footer.privacy': 'Política de Privacidad',
      'footer.terms': 'Términos de Servicio',
      'footer.contributors': 'Colaboradores',
      'footer.copyright': '© 2023 MultiLingua. Todos los derechos reservados.',
      'footer.cookies': 'Cookies',
      
      // Theme
      'theme.toggle': 'Cambiar tema',
      'language.switch': 'Cambiar idioma',
      
      // Search
      'search': 'Buscar',
      'search.title': 'Buscar Artículos',
      'search.placeholder': 'Ingrese palabras clave para buscar...',
      'search.no.results': 'No se encontraron artículos que coincidan con su búsqueda.',
      
      // Not found page
      'not.found.title': '404 Página No Encontrada',
      'not.found.description': 'La página que estás buscando no existe.',
      'back.home': 'Volver al Inicio',
      'popular.topics': 'Temas Populares'
    }
  },
  ar: {
    translation: {
      // Navigation
      'home': 'الرئيسية',
      'subjects': 'المواضيع',
      'popular': 'شائع',
      'recent': 'حديث',
      'about': 'حول',
      
      // Language names
      'english': 'الإنجليزية',
      'french': 'الفرنسية',
      'spanish': 'الإسبانية',
      'arabic': 'العربية',
      
      // Subject names
      'technology': 'تكنولوجيا',
      'science': 'علوم',
      'environment': 'البيئة',
      'health': 'الصحة',
      'arts-culture': 'الفنون والثقافة',
      'travel': 'السفر',
      
      // Homepage
      'hero.title': 'اكتشف المعرفة بلغات متعددة',
      'hero.subtitle': 'استكشف مقالات حول مواضيع متنوعة وعزز تعلمك من خلال القراءة بلغات متعددة.',
      'start.reading': 'ابدأ القراءة',
      'browse.subjects': 'تصفح المواضيع',
      'featured.articles': 'مقالات مميزة',
      'view.all': 'عرض الكل',
      'explore.by.subject': 'استكشف حسب الموضوع',
      'explore.description': 'اكتشف مقالات في فئات مختلفة بلغات متعددة',
      'latest.articles': 'أحدث المقالات',
      'recent.updates': 'التحديثات الأخيرة',
      'min.read': 'دقيقة قراءة',
      'articles': 'مقالات',
      
      // CTA section
      'cta.title': 'هل أنت مستعد للاستكشاف بلغتك؟',
      'cta.subtitle': 'عزز تجربة التعلم الخاصة بك من خلال قراءة المحتوى بلغات متعددة. ابدأ رحلتك اليوم.',
      'get.started': 'البدء',
      'learn.more': 'معرفة المزيد',
      
      // Footer
      'footer.description': 'منصة متعددة اللغات لمشاركة المعرفة وتعلم اللغات من خلال محتوى متنوع.',
      'footer.explore': 'استكشاف',
      'footer.languages': 'اللغات',
      'footer.about': 'حول',
      'footer.mission': 'مهمتنا',
      'footer.contact': 'اتصل بنا',
      'footer.privacy': 'سياسة الخصوصية',
      'footer.terms': 'شروط الخدمة',
      'footer.contributors': 'المساهمون',
      'footer.copyright': '© 2023 مالتي لينجوا. جميع الحقوق محفوظة.',
      'footer.cookies': 'ملفات تعريف الارتباط',
      
      // Theme
      'theme.toggle': 'تبديل السمة',
      'language.switch': 'تغيير اللغة',
      
      // Search
      'search': 'بحث',
      'search.title': 'البحث في المقالات',
      'search.placeholder': 'أدخل كلمات البحث...',
      'search.no.results': 'لم يتم العثور على مقالات تطابق بحثك.',
      
      // Not found page
      'not.found.title': '404 الصفحة غير موجودة',
      'not.found.description': 'الصفحة التي تبحث عنها غير موجودة.',
      'back.home': 'العودة إلى الرئيسية',
      'popular.topics': 'المواضيع الشائعة'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already safes from XSS
    },
    react: {
      useSuspense: true
    }
  });

export default i18n;
