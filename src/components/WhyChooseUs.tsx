import { motion } from "framer-motion";
import { Code2, Shield, Trophy, Users } from "lucide-react";

const benefits = [
  {
    icon: Code2,
    title: "Expertise in Cutting-Edge Technologies",
    description: "Leveraging the latest advancements in AI, blockchain, and fintech",
  },
  {
    icon: Shield,
    title: "Secure and Scalable Solutions",
    description: "Ensuring robust implementations that grow with your business",
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    description: "Demonstrated success across diverse industries",
  },
  {
    icon: Users,
    title: "Personalized Approach",
    description: "Tailoring every solution to meet your specific goals",
  },
];

const features = [
  "24/7 Technical Support",
  "Detailed Reporting and Analytics",
  "Dedicated Project Managers",
];

export const WhyChooseUs = () => {
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
            Why Businesses Trust SP L4BS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-secondary hover:shadow-neon transition-all duration-300 border border-accent/20 group"
            >
              <benefit.icon className="w-12 h-12 text-accent mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-xl font-semibold text-primary mb-2">{benefit.title}</h3>
              <p className="text-primary-muted">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-background-translucent backdrop-blur-sm p-8 rounded-2xl border border-foreground-translucent hover:shadow-neon-lg transition-all duration-300 group"
        >
          <h3 className="text-2xl font-bold text-primary mb-6 text-center group-hover:text-accent transition-colors duration-300">
            Client-Centric Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-4 bg-secondary rounded-lg hover:shadow-neon transition-all duration-300 hover:scale-105 group/item"
              >
                <span className="text-primary font-medium group-hover/item:text-accent transition-colors duration-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};