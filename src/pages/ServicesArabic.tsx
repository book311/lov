import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesOverview } from "@/components/services/ServicesOverview";
import { ServiceSection } from "@/components/services/ServiceSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CallToAction } from "@/components/services/CallToAction";
import { Partners } from "@/components/Partners";

const ServicesArabic = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-background text-foreground rtl"
      dir="rtl"
    >
      <Header />
      <main className="flex flex-col gap-0">
        <ServicesHero 
          title="حلول تكنولوجية تحويلية"
          description="تمكين الشركات بحلول متطورة في مجالات الذكاء الاصطناعي والبلوكتشين والتقنية المالية"
          exploreButtonText="استكشف خدماتنا"
          contactButtonText="تواصل معنا اليوم"
        />
        
        <ServicesOverview 
          title="خدماتنا الأساسية"
          description="اكتشف كيف يمكن لمجموعة خدماتنا الشاملة تحويل أعمالك"
          services={[
            {
              title: "حلول الذكاء الاصطناعي",
              description: "حلول متقدمة في التعلم الآلي والذكاء الاصطناعي مصممة خصيصاً لاحتياجات عملك"
            },
            {
              title: "تطوير البلوكتشين",
              description: "حلول بلوكتشين آمنة وقابلة للتطوير للمؤسسات الحديثة"
            },
            {
              title: "ابتكارات التقنية المالية",
              description: "حلول تقنية مالية متطورة تدفع النمو والكفاءة"
            }
          ]}
        />

        <ServiceSection
          title="حلول الذكاء الاصطناعي"
          description="استفد من قوة الذكاء الاصطناعي لتحويل عمليات شركتك وعملية صنع القرار"
          features={[
            "نماذج التعلم الآلي",
            "معالجة اللغات الطبيعية",
            "حلول الرؤية الحاسوبية",
            "التحليلات التنبؤية",
            "الأتمتة المدعومة بالذكاء الاصطناعي"
          ]}
        />

        <ServiceSection
          title="تطوير البلوكتشين"
          description="بناء حلول بلوكتشين آمنة وقابلة للتطوير تثور في عمليات أعمالك وتعزز الشفافية"
          features={[
            "تطوير العقود الذكية",
            "إنشاء التطبيقات اللامركزية",
            "دمج البلوكتشين",
            "تطوير الرموز",
            "شبكات البلوكتشين الخاصة"
          ]}
          reversed
        />

        <ServiceSection
          title="ابتكارات التقنية المالية"
          description="استفد من حلول التقنية المالية المتطورة لتبسيط العمليات وتحسين تجربة المستخدم"
          features={[
            "أنظمة الدفع الرقمية",
            "دمج العملات المشفرة",
            "التحليلات المالية",
            "أنظمة التداول الآلي",
            "معالجة المعاملات الآمنة"
          ]}
        />

        <WhyChooseUs />
        <CallToAction 
          title="هل أنت مستعد لتحويل أعمالك؟"
          description="دعنا نناقش كيف يمكن لحلولنا مساعدتك في تحقيق أهدافك"
          buttonText="احجز استشارة"
        />
        <Partners />
      </main>
      <Footer />
    </motion.div>
  );
};

export default ServicesArabic;