import { motion } from "framer-motion";
import { Workflow, Brain, Target } from "lucide-react";

interface ApproachSectionProps {
  title?: string;
  description?: string;
}

const approaches = [
  {
    icon: Brain,
    title: "Innovation First",
    description: "We leverage cutting-edge technologies to create solutions that stay ahead of the curve.",
  },
  {
    icon: Workflow,
    title: "Custom Solutions",
    description: "Every business is unique. We tailor our approach to meet your specific needs and challenges.",
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "Our focus is on delivering measurable results that drive business growth and efficiency.",
  },
];

export const ApproachSection: React.FC<ApproachSectionProps> = ({
  title = "Our Approach",
  description = "How we transform challenges into opportunities and deliver exceptional results"
}) => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
          <p className="text-primary-muted text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-black rounded-lg hover:shadow-neon transition-shadow duration-300"
            >
              <approach.icon className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-xl font-semibold text-primary mb-4">{approach.title}</h3>
              <p className="text-primary-muted">{approach.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
