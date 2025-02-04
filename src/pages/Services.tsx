import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesOverview } from "@/components/services/ServicesOverview";
import { ServiceSection } from "@/components/services/ServiceSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CallToAction } from "@/components/services/CallToAction";
import { Partners } from "@/components/Partners";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-background text-foreground"
    >
      <Header />
      <main className="flex flex-col gap-0">
        <ServicesHero />
        <ServicesOverview />
        
        <ServiceSection
          title="AI Solutions"
          description="Harness the power of artificial intelligence to transform your business operations and decision-making processes."
          features={[
            "Machine Learning Models",
            "Natural Language Processing",
            "Computer Vision Solutions",
            "Predictive Analytics",
            "AI-Powered Automation"
          ]}
          action={
            <Button 
              onClick={() => navigate('/services/ai')}
              variant="default"
              size="lg"
              className="bg-accent hover:bg-accent-soft text-white"
            >
              Learn More About AI Solutions
            </Button>
          }
        />

        <ServiceSection
          title="Blockchain Development"
          description="Build secure, scalable blockchain solutions that revolutionize your business processes and enhance transparency."
          features={[
            "Smart Contract Development",
            "DApp Creation",
            "Blockchain Integration",
            "Token Development",
            "Private Blockchain Networks"
          ]}
          reversed
          action={
            <Button 
              onClick={() => navigate('/services/blockchain')}
              variant="default"
              size="lg"
              className="bg-accent hover:bg-accent-soft text-white"
            >
              Explore Blockchain Services
            </Button>
          }
        />

        <ServiceSection
          title="Fintech Innovations"
          description="Leverage cutting-edge financial technology solutions to streamline operations and enhance user experience."
          features={[
            "Digital Payment Systems",
            "Cryptocurrency Integration",
            "Financial Analytics",
            "Automated Trading Systems",
            "Secure Transaction Processing"
          ]}
          action={
            <Button 
              onClick={() => navigate('/services/fintech')}
              variant="default"
              size="lg"
              className="bg-accent hover:bg-accent-soft text-white"
            >
              Discover Fintech Solutions
            </Button>
          }
        />

        <WhyChooseUs />
        <CallToAction />
        <Partners />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Services;