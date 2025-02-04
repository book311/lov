import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { MissionVision } from "@/components/about/MissionVision";
import { CompanyOverview } from "@/components/about/CompanyOverview";
import { TeamSection } from "@/components/about/TeamSection";
import { ApproachSection } from "@/components/about/ApproachSection";
import { MilestonesSection } from "@/components/about/MilestonesSection";
import { Partners } from "@/components/Partners";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-background text-foreground"
    >
      <Header />
      <main className="flex flex-col gap-0">
        <AboutHero />
        <MissionVision />
        <CompanyOverview />
        <TeamSection />
        <ApproachSection />
        <MilestonesSection />
        <Partners />
      </main>
      <Footer />
    </motion.div>
  );
};

export default About;