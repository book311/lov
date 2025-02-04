import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Users, Award, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AboutProps {
  title?: string;
  description?: string[];
  highlights?: Array<{
    title: string;
    description: string;
  }>;
  learnMoreText?: string;
}

export const About: React.FC<AboutProps> = ({
  title = "About SP L4BS",
  description = [
    "At SP L4BS, we specialize in delivering cutting-edge technology solutions tailored to meet the unique challenges of modern businesses. With expertise in AI, blockchain, and fintech, we help organizations achieve operational excellence, security, and scalability.",
    "We pride ourselves on our ability to craft innovative solutions that drive growth, foster efficiency, and create value for our clients across diverse industries."
  ],
  highlights = [
    {
      title: "10+ Years",
      description: "Combined Expertise",
    },
    {
      title: "50+ Projects",
      description: "Delivered Successfully",
    },
    {
      title: "100%",
      description: "Client Satisfaction",
    },
  ],
  learnMoreText = "Learn More About Us"
}) => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-gray-400">
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-secondary-soft hover:shadow-neon transition-all duration-300"
            >
              {index === 0 && <Users className="w-12 h-12 text-accent mx-auto mb-4" />}
              {index === 1 && <Award className="w-12 h-12 text-accent mx-auto mb-4" />}
              {index === 2 && <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />}
              <h3 className="text-2xl font-bold text-white mb-2">{highlight.title}</h3>
              <p className="text-gray-400">{highlight.description}</p>
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
            onClick={() => navigate('/about')}
            variant="default"
            size="lg"
            className="bg-accent hover:bg-accent-soft text-black font-medium transition-colors"
          >
            {learnMoreText}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};