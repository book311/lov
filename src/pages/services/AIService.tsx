import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Brain, Cpu, Bot, ChartBar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AIService = () => {
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
              AI Solutions
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations and decision-making processes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Brain,
                title: "Machine Learning Models",
                description: "Custom ML models tailored to your specific business needs and data requirements"
              },
              {
                icon: Cpu,
                title: "Natural Language Processing",
                description: "Advanced NLP solutions for text analysis, chatbots, and automated communication"
              },
              {
                icon: Bot,
                title: "Computer Vision Solutions",
                description: "Image and video analysis systems for object detection and recognition"
              },
              {
                icon: ChartBar,
                title: "Predictive Analytics",
                description: "Data-driven forecasting and trend analysis for informed decision making"
              },
              {
                icon: Sparkles,
                title: "AI-Powered Automation",
                description: "Intelligent process automation to streamline operations and reduce manual work"
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
              Get Started with AI Solutions
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default AIService;