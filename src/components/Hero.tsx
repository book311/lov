import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroProps {
  title?: string;
  subtitle?: string;
  exploreButtonText?: string;
  contactButtonText?: string;
}

export const Hero: React.FC<HeroProps> = ({ 
  title = "Driving Innovation with AI, Blockchain, and Fintech Solutions",
  subtitle = "Empowering businesses with transformative technologies for a secure, scalable future",
  exploreButtonText = "Explore Our Solutions",
  contactButtonText = "Contact Us Today"
}) => {
  const navigate = useNavigate();

  return (
    <div className="pt-24"> {/* Changed to pt-24 since Tailwind doesn't have pt-25 */}
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-white to-gray-300 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
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
          className="mt-4 text-center text-gray-200 text-xl max-w-2xl mx-auto px-4"
        >
          {subtitle}
        </motion.p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Button 
              onClick={() => navigate('/services')}
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
              onClick={() => navigate('/contact')}
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