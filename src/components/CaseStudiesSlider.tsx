import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLanguage } from "@/contexts/LanguageContext";

const caseStudiesData = {
  en: [
    {
      title: "Revolutionizing Payment Systems for FinTech Startup",
      description: "Implemented a secure, scalable blockchain-based payment solution that reduced transaction costs by 60% and improved processing speed by 3x.",
      results: ["60% cost reduction", "3x faster processing", "99.9% uptime"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["Python", "JavaScript", "Java"],
      client: "FinTech Innovation Co.",
      duration: "6 months",
    },
    {
      title: "AI-Powered Predictive Maintenance for Manufacturing Giant",
      description: "Developed an AI system that predicts equipment failures with 95% accuracy, reducing downtime and maintenance costs significantly.",
      results: ["95% prediction accuracy", "40% maintenance cost reduction", "Zero unplanned downtime"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      technologies: ["Python", "C++", "JavaScript"],
      client: "Global Manufacturing Ltd.",
      duration: "8 months",
    },
  ],
  ar: [
    {
      title: "تحويل أنظمة الدفع لشركة تقنية مالية ناشئة",
      description: "قمنا بتنفيذ حل دفع آمن وقابل للتطوير قائم على البلوكتشين مما أدى إلى تخفيض تكاليف المعاملات بنسبة 60٪ وتحسين سرعة المعالجة بمقدار 3 أضعاف.",
      results: ["تخفيض التكاليف بنسبة 60٪", "معالجة أسرع 3 مرات", "وقت تشغيل 99.9٪"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["Python", "JavaScript", "Java"],
      client: "شركة الابتكار للتقنية المالية",
      duration: "6 أشهر",
    },
    {
      title: "صيانة تنبؤية مدعومة بالذكاء الاصطناعي لشركة تصنيع كبرى",
      description: "طورنا نظام ذكاء اصطناعي يتنبأ بأعطال المعدات بدقة 95٪، مما يقلل من وقت التوقف وتكاليف الصيانة بشكل كبير.",
      results: ["دقة تنبؤ 95٪", "تخفيض تكاليف الصيانة بنسبة 40٪", "صفر توقف غير مخطط له"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      technologies: ["Python", "C++", "JavaScript"],
      client: "شركة التصنيع العالمية",
      duration: "8 أشهر",
    },
  ],
};

const titles = {
  en: {
    heading: "Our Impact in Action",
    description: "We deliver innovation at SP L4BS. Find out how we've helped businesses like yours achieve remarkable results in our comprehensive case studies.",
    buttonText: "View All Success Stories",
  },
  ar: {
    heading: "دراسات الحالة",
    description: "نقدم الابتكار في SP L4BS. اكتشف كيف ساعدنا الشركات مثل شركتك في تحقيق نتائج ملحوظة في دراسات الحالة الشاملة لدينا.",
    buttonText: "عرض جميع قصص النجاح",
  },
};

export const CaseStudiesSlider = () => {
  const { currentLanguage } = useLanguage();
  const isArabic = currentLanguage === "ar";
  const caseStudies = caseStudiesData[currentLanguage];
  const content = titles[currentLanguage];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {content.heading}
          </h2>
          <p className="text-primary-muted max-w-2xl mx-auto">
            {content.description}
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto mb-12"
        >
          <CarouselContent>
            {caseStudies.map((study, index) => (
              <CarouselItem key={index} className="md:basis-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-secondary hover:shadow-neon transition-all duration-300 border border-accent/20 h-full"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative h-[300px] rounded-lg overflow-hidden">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold text-primary mb-4">{study.title}</h3>
                        <p className="text-primary-muted mb-6">{study.description}</p>
                        <div className="space-y-4">
                          <div className="flex items-center gap-2" dir={isArabic ? "rtl" : "ltr"}>
                            <span className="text-accent font-medium">{isArabic ? "العميل:" : "Client:"}</span>
                            <span className="text-primary-muted">{study.client}</span>
                          </div>
                          <div className="flex items-center gap-2" dir={isArabic ? "rtl" : "ltr"}>
                            <span className="text-accent font-medium">{isArabic ? "المدة:" : "Duration:"}</span>
                            <span className="text-primary-muted">{study.duration}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-primary mb-3">
                          {isArabic ? "التقنيات المستخدمة:" : "Technologies Used:"}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            variant="default"
            size="lg"
            className="bg-accent hover:bg-accent-soft transition-colors"
          >
            {content.buttonText}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};