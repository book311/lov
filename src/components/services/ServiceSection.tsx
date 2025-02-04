import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { ReactElement } from "react";

interface ServiceSectionProps {
  title: string;
  description: string;
  features: string[];
  imageSrc?: string;
  reversed?: boolean;
  action?: ReactElement;
}

export const ServiceSection = ({
  title,
  description,
  features,
  imageSrc,
  reversed = false,
  action,
}: ServiceSectionProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
          <motion.div
            initial={{ opacity: 0, x: reversed ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h2>
            <p className="text-gray-400 mb-8">{description}</p>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center text-gray-400"
                >
                  <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                  {feature}
                </motion.li>
              ))}
            </ul>
            {action}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: reversed ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="bg-secondary-soft rounded-2xl p-8 h-[400px] flex items-center justify-center border border-accent/20 shadow-neon">
              {imageSrc ? (
                <img src={imageSrc} alt={title} className="max-w-full h-auto rounded-lg" />
              ) : (
                <div className="text-gray-600">Placeholder for {title} image</div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};