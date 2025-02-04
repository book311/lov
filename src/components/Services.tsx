import { motion } from "framer-motion";
import { Brain, Database, Coins } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { FeatureSteps } from "./ui/feature-section";

interface ServiceProps {
  title?: string;
  services?: Array<{
    title: string;
    description: string;
  }>;
}

export const Services: React.FC<ServiceProps> = ({
  title = "Our Services",
  services = [
    {
      title: "AI Solutions",
      description: "Transformative AI tools including automation, predictive analytics, and NLP",
    },
    {
      title: "Blockchain Development",
      description: "Secure smart contracts and scalable dApps for modern businesses",
    },
    {
      title: "Fintech Innovations",
      description: "Advanced digital payment systems and DeFi platform development",
    },
  ]
}) => {
  const navigate = useNavigate();
  const routes = ['/services/ai', '/services/blockchain', '/services/fintech'];

  const features = [
    {
      step: "AI Solutions",
      title: "Artificial Intelligence",
      content: "Transformative AI tools including automation, predictive analytics, and NLP",
      image: "/placeholder.svg"
    },
    {
      step: "Blockchain Development",
      title: "Blockchain Technology",
      content: "Secure smart contracts and scalable dApps for modern businesses",
      image: "/placeholder.svg"
    },
    {
      step: "Fintech Innovations",
      title: "Financial Technology",
      content: "Advanced digital payment systems and DeFi platform development",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 bg-black">
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
            Explore our comprehensive range of technology solutions designed to transform your business
          </p>
        </motion.div>

        <FeatureSteps 
          features={features}
          title="Our Core Services"
          autoPlayInterval={4000}
          className="mb-12"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            onClick={() => navigate('/services')}
            variant="default"
            size="lg"
            className="bg-accent hover:bg-accent-soft text-black font-medium transition-colors"
          >
            Read More About Our Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
};