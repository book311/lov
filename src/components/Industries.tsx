import { motion } from "framer-motion";
import { DollarSign, Stethoscope, Building2, ShoppingBag, Factory } from "lucide-react";
import { Button } from "./ui/button";

interface IndustriesProps {
  title?: string;
  description?: string;
  industries?: Array<{
    icon: any;
    title: string;
    description: string;
    solutions: string[];
    techStack: string[];
    benefits: string[];
    challenges: string[];
  }>;
  buttonText?: string;
}

export const Industries: React.FC<IndustriesProps> = ({
  title = "Transforming Industries Through Innovation",
  description = "Empowering businesses across diverse sectors with cutting-edge AI and blockchain solutions",
  buttonText = "Explore Industry Solutions",
  industries = [
    {
      icon: DollarSign,
      title: "Finance and Banking",
      description: "Revolutionizing financial services with AI-driven insights and blockchain-secured transactions. Our comprehensive fintech solutions combine artificial intelligence for predictive analytics with blockchain for transparent, secure operations.",
      solutions: [
        "AI-Powered Risk Assessment and Fraud Detection Systems",
        "Blockchain-Based Smart Contracts for Automated Compliance",
        "Machine Learning Algorithms for Investment Strategies",
        "Decentralized Finance (DeFi) Platform Development"
      ],
      techStack: ["AI/ML", "Blockchain", "Smart Contracts", "Neural Networks"],
      benefits: [
        "Enhanced security through blockchain verification",
        "AI-driven predictive market analysis",
        "Automated regulatory compliance",
        "Real-time fraud detection with ML"
      ],
      challenges: [
        "Complex AI model training requirements",
        "Blockchain scalability optimization",
        "Integration with legacy systems",
        "Real-time processing demands"
      ]
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      description: "Transforming healthcare delivery through AI diagnostics and blockchain-secured patient records. Our solutions combine machine learning for precise diagnostics with distributed ledger technology for secure data management.",
      solutions: [
        "AI-Powered Diagnostic Imaging Analysis",
        "Blockchain-Based Electronic Health Records",
        "Machine Learning for Drug Discovery",
        "Smart Contract-Based Insurance Processing"
      ],
      techStack: ["AI Diagnostics", "Blockchain Records", "Neural Networks", "Smart Contracts"],
      benefits: [
        "Enhanced diagnostic accuracy with AI",
        "Secure patient data on blockchain",
        "Automated insurance processing",
        "Improved drug development efficiency"
      ],
      challenges: [
        "AI model medical compliance",
        "Healthcare data privacy on blockchain",
        "Integration with existing systems",
        "Real-time diagnostic processing"
      ]
    },
    {
      icon: Building2,
      title: "Real Estate",
      description: "Modernizing property transactions with AI valuation and blockchain-based smart contracts. Our technology stack combines machine learning for market analysis with blockchain for transparent property transactions.",
      solutions: [
        "AI-Powered Property Valuation Models",
        "Blockchain-Based Property Records",
        "Smart Contracts for Property Transactions",
        "Machine Learning for Market Analysis"
      ],
      techStack: ["AI Valuation", "Blockchain Records", "Smart Contracts", "Predictive Analytics"],
      benefits: [
        "Accurate AI-driven property valuations",
        "Transparent blockchain transactions",
        "Automated contract processing",
        "Data-driven market insights"
      ],
      challenges: [
        "Complex property data modeling",
        "Blockchain transaction speed",
        "Smart contract legal compliance",
        "Market volatility prediction"
      ]
    },
    {
      icon: ShoppingBag,
      title: "Retail and E-commerce",
      description: "Enhancing shopping experiences with AI-powered recommendations and blockchain-secured transactions. Our retail solutions leverage machine learning for personalization and distributed ledger technology for supply chain transparency.",
      solutions: [
        "AI-Powered Product Recommendations",
        "Blockchain Supply Chain Tracking",
        "Machine Learning for Inventory Management",
        "Smart Contract-Based Loyalty Programs"
      ],
      techStack: ["AI/ML", "Blockchain", "Neural Networks", "Smart Contracts"],
      benefits: [
        "Personalized shopping with AI",
        "Transparent supply chain",
        "Automated inventory optimization",
        "Secure customer rewards"
      ],
      challenges: [
        "Real-time recommendation processing",
        "Supply chain data integration",
        "Customer data privacy",
        "Blockchain scalability"
      ]
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Optimizing production processes with AI-driven automation and blockchain-secured supply chains. Our manufacturing solutions combine machine learning for predictive maintenance with distributed ledger technology for supply chain transparency.",
      solutions: [
        "AI-Powered Predictive Maintenance",
        "Blockchain Supply Chain Verification",
        "Machine Learning Quality Control",
        "Smart Contract Supplier Management"
      ],
      techStack: ["AI/ML", "Blockchain", "IoT Integration", "Smart Contracts"],
      benefits: [
        "Predictive maintenance with AI",
        "Transparent supply chain",
        "Automated quality control",
        "Secure supplier contracts"
      ],
      challenges: [
        "Complex IoT data processing",
        "Real-time AI analysis",
        "Blockchain integration",
        "Supply chain coordination"
      ]
    }
  ]
}) => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-secondary to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent via-accent-soft to-accent bg-clip-text text-transparent mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-2xl bg-secondary-soft backdrop-blur-sm border border-accent/10 hover:border-accent/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl transition-opacity group-hover:opacity-100 opacity-0" />
              <div className="relative z-10">
                <div className="mb-6 p-3 rounded-lg bg-accent/10 w-fit">
                  <industry.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{industry.title}</h3>
                <p className="text-gray-400 mb-6">{industry.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-accent mb-2">Key Solutions:</h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    {industry.solutions.map((solution) => (
                      <li key={solution} className="leading-relaxed">{solution}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-accent mb-2">Benefits:</h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    {industry.benefits.map((benefit) => (
                      <li key={benefit} className="leading-relaxed">{benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-accent mb-2">Key Challenges:</h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    {industry.challenges.map((challenge) => (
                      <li key={challenge} className="leading-relaxed">{challenge}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {industry.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1 rounded-full bg-accent/10 text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            variant="default"
            size="lg"
            className="bg-accent hover:bg-accent-soft text-background font-semibold transition-all duration-300 group"
          >
            {buttonText}
            <motion.span
              className="inline-block ml-2"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};