import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "تحويل أنظمة الدفع لشركة تقنية مالية ناشئة",
    description: "قمنا بتنفيذ حل دفع آمن وقابل للتطوير قائم على البلوكتشين مما أدى إلى تخفيض تكاليف المعاملات بنسبة 60٪ وتحسين سرعة المعالجة بمقدار 3 أضعاف.",
    results: ["تخفيض التكاليف بنسبة 60٪", "معالجة أسرع 3 مرات", "وقت تشغيل 99.9٪"],
  },
  {
    title: "صيانة تنبؤية مدعومة بالذكاء الاصطناعي لشركة تصنيع كبرى",
    description: "طورنا نظام ذكاء اصطناعي يتنبأ بأعطال المعدات بدقة 95٪، مما يقلل من وقت التوقف وتكاليف الصيانة بشكل كبير.",
    results: ["دقة تنبؤ 95٪", "تخفيض تكاليف الصيانة بنسبة 40٪", "صفر توقف غير مخطط له"],
  },
];

export const CaseStudies = () => {
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
            دراسات الحالة
          </h2>
          <p className="text-primary-muted max-w-2xl mx-auto">
            نقدم الابتكار في SP L4BS. اكتشف كيف ساعدنا الشركات مثل شركتك في تحقيق نتائج ملحوظة في دراسات الحالة الشاملة لدينا.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-secondary hover:shadow-neon transition-all duration-300 border border-accent/20"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">{study.title}</h3>
              <p className="text-primary-muted mb-6">{study.description}</p>
              <div className="space-y-2">
                {study.results.map((result) => (
                  <div
                    key={result}
                    className="flex items-center text-accent font-medium"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {result}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

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
            عرض جميع قصص النجاح
          </Button>
        </motion.div>
      </div>
    </section>
  );
};