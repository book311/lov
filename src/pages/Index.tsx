import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CaseStudiesSlider } from "@/components/CaseStudiesSlider";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/ui/3d-background";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-background/50 text-foreground relative"
    >
      <AnimatedBackground />
      <Header />
      <main className="flex flex-col relative">
        <section className="bg-gradient-to-b from-background/80 to-secondary/80 backdrop-blur-sm">
          <Hero />
        </section>

        <section className="bg-secondary/80 backdrop-blur-sm">
          <About />
        </section>

        <section className="bg-gradient-to-r from-background/80 via-secondary/80 to-background/80 backdrop-blur-sm">
          <Services />
        </section>

        <section className="bg-secondary/80 backdrop-blur-sm">
          <Industries />
        </section>

        <section className="bg-gradient-to-b from-secondary/80 to-background/80 backdrop-blur-sm">
          <WhyChooseUs />
        </section>

        <section className="bg-gradient-to-r from-background/80 to-secondary/80 backdrop-blur-sm">
          <CaseStudiesSlider />
        </section>

        <section className="bg-secondary/70 backdrop-blur-sm">
          <Contact />
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;