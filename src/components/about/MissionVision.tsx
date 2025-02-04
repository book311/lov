import { motion } from "framer-motion";
import { Target, Lightbulb, Shield, Rocket, Scale, Users } from "lucide-react";
import React from 'react';

interface Value {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface MissionVisionProps {
  missionTitle?: string;
  missionDescription?: string;
  visionTitle?: string;
  visionDescription?: string;
  values?: Value[];
}

export const MissionVision: React.FC<MissionVisionProps> = ({
  missionTitle = "Our Mission",
  missionDescription = "To empower businesses with innovative technology solutions that drive growth, enhance efficiency, and create sustainable value in the digital age.",
  visionTitle = "Our Vision",
  visionDescription = "To be the leading force in technological innovation, setting new standards in AI, blockchain, and fintech solutions while fostering a more connected and efficient digital ecosystem.",
  values = [
    {
      title: "Security",
      description: "Ensuring robust protection for all digital assets",
      icon: Shield
    },
    {
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge solutions",
      icon: Rocket
    },
    {
      title: "Scalability",
      description: "Building systems that grow with your business",
      icon: Scale
    },
    {
      title: "Collaboration",
      description: "Working together to achieve excellence",
      icon: Users
    },
  ]
}) => {
  return (
    <section className="py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="flex items-center gap-3">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">{missionTitle}</h2>
            </div>
            <p className="text-primary-muted text-base sm:text-lg">
              {missionDescription}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="flex items-center gap-3">
              <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">{visionTitle}</h2>
            </div>
            <p className="text-primary-muted text-base sm:text-lg">
              {visionDescription}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-4">Our Core Values</h2>
          <p className="text-primary-muted text-base sm:text-lg max-w-2xl mx-auto px-4">
            These principles guide our work and shape our approach to delivering excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-4 sm:p-6 bg-secondary rounded-lg hover:shadow-neon transition-shadow duration-300"
            >
              <value.icon className="w-10 h-10 sm:w-12 sm:h-12 text-accent mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">{value.title}</h3>
              <p className="text-primary-muted text-sm sm:text-base">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};