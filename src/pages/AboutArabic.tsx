import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { MissionVision } from "@/components/about/MissionVision";
import { CompanyOverview } from "@/components/about/CompanyOverview";
import { TeamSection } from "@/components/about/TeamSection";
import { ApproachSection } from "@/components/about/ApproachSection";
import { MilestonesSection } from "@/components/about/MilestonesSection";
import { Partners } from "@/components/Partners";
import { Shield, Rocket, Scale, Users } from "lucide-react";

const AboutArabic = () => {
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
        <AboutHero 
          title="نقود مستقبل التكنولوجيا"
          description="نبني حلولاً مبتكرة تحول الأعمال وتشكل المشهد الرقمي للغد"
        />
        <MissionVision 
          missionTitle="مهمتنا"
          missionDescription="تمكين الشركات بحلول تكنولوجية مبتكرة تدفع النمو وتعزز الكفاءة وتخلق قيمة مستدامة في العصر الرقمي"
          visionTitle="رؤيتنا"
          visionDescription="أن نكون القوة الرائدة في الابتكار التكنولوجي، ونضع معايير جديدة في حلول الذكاء الاصطناعي والبلوكتشين والتقنية المالية"
          values={[
            {
              title: "الأمان",
              description: "ضمان حماية قوية لجميع الأصول الرقمية",
              icon: Shield
            },
            {
              title: "الابتكار",
              description: "دفع الحدود بحلول متطورة",
              icon: Rocket
            },
            {
              title: "قابلية التوسع",
              description: "بناء أنظمة تنمو مع عملك",
              icon: Scale
            },
            {
              title: "التعاون",
              description: "العمل معاً لتحقيق التميز",
              icon: Users
            }
          ]}
        />
        <CompanyOverview 
          title="عن SP L4BS"
          description="SP L4BS في طليعة الابتكار التكنولوجي، متخصصة في الذكاء الاصطناعي والبلوكتشين والتقنية المالية"
          achievements={[
            "تم تسليم أكثر من 50 حلاً للمؤسسات",
            "تم الاعتراف بنا كواحدة من أفضل 10 شركات تقنية مبتكرة 2023",
            "معدل رضا العملاء 100%",
            "شهادات أمان رائدة في الصناعة"
          ]}
        />
        <TeamSection 
          title="فريق القيادة"
          description="تعرف على الخبراء الذين يقودون الابتكار والتميز في SP L4BS"
        />
        <ApproachSection 
          title="نهجنا"
          description="كيف نحول التحديات إلى فرص ونحقق نتائج استثنائية"
        />
        <MilestonesSection 
          title="رحلتنا"
          description="المعالم الرئيسية التي شكلت نمونا ونجاحنا"
        />
        <Partners />
      </main>
      <Footer />
    </motion.div>
  );
};

export default AboutArabic;