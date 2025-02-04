import React from 'react';
import { motion } from "framer-motion";
import { Brain, Database, Coins } from "lucide-react";

interface Service {
  title: string;
  description: string;
}

interface ServicesOverviewProps {
  title?: string;
  description?: string;
  services?: Service[];
}

export const ServicesOverview = ({
  title = "Our Core Services",
  description = "Discover how our comprehensive suite of services can transform your business",
  services = [
    {
      title: "AI Solutions",
      description: "Advanced machine learning and artificial intelligence solutions tailored to your business needs.",
    },
    {
      title: "Blockchain Development",
      description: "Secure and scalable blockchain solutions for modern enterprises.",
    },
    {
      title: "Fintech Innovations",
      description: "Cutting-edge financial technology solutions that drive growth and efficiency.",
    },
  ]
}: ServicesOverviewProps) => {
  const icons = [Brain, Database, Coins];

  return (
    <section className="py-20 bg-background">
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
          <p className="text-gray-400 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-secondary-soft hover:bg-secondary border border-accent/20 hover:shadow-neon transition-all duration-300"
            >
              {icons[index] && React.createElement(icons[index], { className: "w-12 h-12 text-accent mb-6" })}
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};