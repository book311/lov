import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface ServicesHeroProps {
  title?: string;
  description?: string;
  exploreButtonText?: string;
  contactButtonText?: string;
}

export const ServicesHero = ({ 
  title = "Transformative Technology Solutions",
  description = "Empowering businesses with cutting-edge AI, Blockchain, and Fintech solutions",
  exploreButtonText = "Explore Our Services",
  contactButtonText = "Contact Us Today"
}: ServicesHeroProps) => {
  return (
    <div className="mt-16">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          {title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-4 text-center text-slate-400 text-xl max-w-2xl mx-auto px-4"
        >
          {description}
        </motion.p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Button 
              className="group bg-accent hover:bg-accent-soft text-black font-medium px-6 py-3 rounded-full transition-all duration-300 w-full sm:w-auto shadow-[0_0_20px_rgba(0,245,212,0.3)] hover:shadow-[0_0_30px_rgba(0,245,212,0.5)]"
            >
              {exploreButtonText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button 
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-black font-medium px-6 py-3 rounded-full transition-all duration-300 w-full sm:w-auto"
            >
              {contactButtonText}
            </Button>
          </motion.div>
        </div>
      </LampContainer>
    </div>
  );
};