import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CreditCard, LineChart, Lock, Wallet, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FintechService = () => {
  const navigate = useNavigate();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-background text-foreground"
    >
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent via-accent-soft to-accent bg-clip-text text-transparent mb-6">
              Fintech Solutions
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Leverage cutting-edge financial technology solutions to streamline operations and enhance user experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: CreditCard,
                title: "Digital Payment Systems",
                description: "Modern payment solutions with seamless integration and secure processing"
              },
              {
                icon: Wallet,
                title: "Cryptocurrency Integration",
                description: "Crypto payment gateways and wallet integration services"
              },
              {
                icon: LineChart,
                title: "Financial Analytics",
                description: "Advanced analytics tools for financial data and market insights"
              },
              {
                icon: BarChart,
                title: "Automated Trading Systems",
                description: "Algorithmic trading solutions with real-time market analysis"
              },
              {
                icon: Lock,
                title: "Secure Transaction Processing",
                description: "Enhanced security measures for financial transactions and data"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-secondary-soft backdrop-blur-sm border border-accent/10 hover:border-accent/30 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-accent mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Button
              onClick={() => navigate('/contact')}
              variant="default"
              size="lg"
              className="bg-accent hover:bg-accent-soft text-background font-semibold transition-all duration-300"
            >
              Explore Fintech Solutions
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default FintechService;