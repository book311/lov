import { motion } from "framer-motion";
import { Award } from "lucide-react";

interface CompanyOverviewProps {
  title?: string;
  description?: string;
  achievements?: string[];
}

export const CompanyOverview: React.FC<CompanyOverviewProps> = ({
  title = "About SP L4BS",
  description = "SP L4BS is at the forefront of technological innovation, specializing in AI, blockchain, and fintech solutions. Since our inception, we've been dedicated to solving complex business challenges through cutting-edge technology and innovative thinking.",
  achievements = [
    "Successfully delivered 50+ enterprise solutions",
    "Recognized as Top 10 Innovative Tech Company 2023",
    "100% client satisfaction rate",
    "Industry-leading security certifications",
  ]
}) => {
  return (
    <section className="py-12 sm:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-8 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6">{title}</h2>
          <p className="text-primary-muted text-base sm:text-lg mb-6 sm:mb-8 px-4">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-4 sm:p-6 bg-black rounded-lg text-center hover:shadow-neon transition-shadow duration-300"
            >
              <Award className="w-10 h-10 sm:w-12 sm:h-12 text-accent mx-auto mb-3 sm:mb-4" />
              <p className="text-primary text-sm sm:text-base">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};