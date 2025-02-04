import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface CallToActionProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export const CallToAction = ({
  title = "Ready to Transform Your Business?",
  description = "Let's discuss how our solutions can help you achieve your goals",
  buttonText = "Schedule a Consultation"
}: CallToActionProps) => {
  return (
    <section className="py-20 bg-gradient-glow">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-gray-400 mb-8">
            {description}
          </p>
          <Button 
            className="group bg-accent hover:bg-accent-soft text-black font-medium px-8 py-6 rounded-full text-lg shadow-[0_0_20px_rgba(0,245,212,0.3)] hover:shadow-[0_0_30px_rgba(0,245,212,0.5)]"
          >
            {buttonText}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};