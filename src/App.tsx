import { Routes, Route } from 'react-router-dom';
import { Home, User, Briefcase, FileText, Factory } from 'lucide-react';
import Index from './pages/Index';
import IndexArabic from './pages/IndexArabic';
import About from './pages/About';
import AboutArabic from './pages/AboutArabic';
import Services from './pages/Services';
import ServicesArabic from './pages/ServicesArabic';
import Contact from './pages/Contact';
import ContactArabic from './pages/ContactArabic';
import AIService from './pages/services/AIService';
import BlockchainService from './pages/services/BlockchainService';
import FintechService from './pages/services/FintechService';
import Industries from './pages/Industries';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';
import { LanguageProvider } from './contexts/LanguageContext';
import { CookieConsent } from './components/CookieConsent';
import { NavBar } from './components/ui/tubelight-navbar';
import { useLanguage } from './contexts/LanguageContext';

function App() {
  const { currentLanguage } = useLanguage();
  const isArabic = currentLanguage === 'ar';

  const navItems = [
    { 
      name: isArabic ? 'الرئيسية' : 'Home', 
      url: isArabic ? '/ar' : '/', 
      icon: Home 
    },
    { 
      name: isArabic ? 'من نحن' : 'About', 
      url: isArabic ? '/ar/about' : '/about', 
      icon: User 
    },
    { 
      name: isArabic ? 'خدماتنا' : 'Services', 
      url: isArabic ? '/ar/services' : '/services', 
      icon: Briefcase,
      dropdownItems: [
        { 
          name: isArabic ? 'الذكاء الاصطناعي' : 'AI Solutions', 
          url: '/services/ai' 
        },
        { 
          name: isArabic ? 'البلوكتشين' : 'Blockchain', 
          url: '/services/blockchain' 
        },
        { 
          name: isArabic ? 'التقنية المالية' : 'Fintech', 
          url: '/services/fintech' 
        },
      ]
    },
    {
      name: isArabic ? 'الحلول الصناعية' : 'Industries',
      url: '/industries',
      icon: Factory
    },
    { 
      name: isArabic ? 'اتصل بنا' : 'Contact', 
      url: isArabic ? '/ar/contact' : '/contact', 
      icon: FileText 
    },
  ];

  return (
    <LanguageProvider>
      <NavBar items={navItems} />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/ar" element={<IndexArabic />} />
        <Route path="/about" element={<About />} />
        <Route path="/ar/about" element={<AboutArabic />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ar/services" element={<ServicesArabic />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ar/contact" element={<ContactArabic />} />
        <Route path="/services/ai" element={<AIService />} />
        <Route path="/services/blockchain" element={<BlockchainService />} />
        <Route path="/services/fintech" element={<FintechService />} />
        <Route path="/industries" element={<Industries />} />
      </Routes>
      <WhatsAppButton />
      <ScrollToTop />
      <CookieConsent />
    </LanguageProvider>
  );
}

export default App;