import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

interface AboutHeroProps {
  title?: string;
  description?: string;
}

export const AboutHero: React.FC<AboutHeroProps> = ({ 
  title = "Pioneering the Future of Technology",
  description = "Building innovative solutions that transform businesses and shape tomorrow's digital landscape"
}) => {
  return (
    <div className="mt-8 sm:mt-16">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-2xl sm:text-4xl md:text-7xl font-medium tracking-tight text-transparent px-4"
        >
          {title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
          className="mt-4 text-center text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4"
        >
          {description}
        </motion.p>
      </LampContainer>
    </div>
  );
};