import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Industries } from "@/components/Industries";
import { CallToAction } from "@/components/services/CallToAction";
import { ServicesHero } from "@/components/services/ServicesHero";

const IndustriesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-background"
    >
      <Header />
      <main>
        <ServicesHero 
          title="Industry-Specific Solutions"
          description="Transforming businesses across sectors with innovative technology solutions tailored to your industry's unique challenges"
          exploreButtonText="Explore Solutions"
          contactButtonText="Schedule a Consultation"
        />
        
        <Industries 
          title="Solutions by Industry"
          description="Discover how our cutting-edge technology solutions can revolutionize your industry"
          buttonText="Get Started"
        />

        <CallToAction 
          title="Ready to Transform Your Industry?"
          description="Let's discuss how our industry-specific solutions can help you stay ahead of the competition"
          buttonText="Book a Demo"
        />
      </main>
      <Footer />
    </motion.div>
  );
};

export default IndustriesPage;