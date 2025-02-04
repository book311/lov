import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { UsFlag } from "./ui/flags/UsFlag";
import { SaFlag } from "./ui/flags/SaFlag";
import { useLanguage } from "../contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const getQuickLinks = (isArabic: boolean) => [
  { label: isArabic ? "الرئيسية" : "Home", href: isArabic ? "/ar" : "/" },
  { label: isArabic ? "من نحن" : "About Us", href: isArabic ? "/ar/about" : "/about" },
  { label: isArabic ? "خدماتنا" : "Services", href: isArabic ? "/ar/services" : "/services" },
  { label: isArabic ? "القطاعات" : "Industries", href: isArabic ? "/ar/industries" : "/industries" },
  { label: isArabic ? "اتصل بنا" : "Contact", href: isArabic ? "/ar/contact" : "/contact" },
];

const getLegalLinks = (isArabic: boolean) => [
  { label: isArabic ? "سياسة الخصوصية" : "Privacy Policy", href: isArabic ? "/ar/privacy" : "/privacy" },
  { label: isArabic ? "شروط الاستخدام" : "Terms of Use", href: isArabic ? "/ar/terms" : "/terms" },
];

const socialLinks = [];

export const Footer = () => {
  const { currentLanguage, setLanguage } = useLanguage();
  const isArabic = currentLanguage === 'ar';
  const quickLinks = getQuickLinks(isArabic);
  const legalLinks = getLegalLinks(isArabic);

  const handleLanguageChange = (lang: 'en' | 'ar') => {
    setLanguage(lang);
    console.log(`Switching to ${lang}`);
  };

  return (
    <footer className="bg-secondary text-primary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-primary">SP L4BS</h3>
            <p className="text-primary-muted">
              {isArabic 
                ? "نقدم حلولاً تقنية تحويلية للعصر الرقمي"
                : "Delivering transformative technology solutions for the digital era"
              }
            </p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="flex items-center space-x-2 hover:bg-accent/10"
                >
                  {currentLanguage === 'en' ? <UsFlag /> : <SaFlag />}
                  <span>{currentLanguage === 'en' ? 'English' : 'العربية'}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-40">
                <DropdownMenuItem 
                  onClick={() => handleLanguageChange('en')}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <UsFlag />
                  <span>English</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleLanguageChange('ar')}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <SaFlag />
                  <span>العربية</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-primary">
              {isArabic ? "روابط سريعة" : "Quick Links"}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-primary">
              {isArabic ? "قانوني" : "Legal"}
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-primary">
              {isArabic ? "النشرة الإخبارية" : "Newsletter"}
            </h3>
            <p className="text-primary-muted">
              {isArabic 
                ? "اشترك للبقاء على اطلاع بآخر المستجدات في مجال الذكاء الاصطناعي والبلوكتشين والتقنية المالية"
                : "Subscribe to stay updated on the latest in AI, Blockchain, and FinTech"
              }
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder={isArabic ? "بريدك الإلكتروني" : "Your email"}
                className="bg-secondary-soft border-primary-muted"
              />
              <Button variant="default">
                {isArabic ? "اشترك" : "Subscribe"}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-primary-muted"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-primary-muted">
                {isArabic 
                  ? "© 2024 SP L4BS. جميع الحقوق محفوظة"
                  : "© 2024 SP L4BS. All rights reserved."
                }
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-primary-muted hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};