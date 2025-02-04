import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Contact as ContactSection } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-background text-foreground"
    >
      <Header />
      <main className="flex flex-col pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-secondary py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-accent">
                Let's Start a Conversation
              </h1>
              <p className="text-lg text-gray-400">
                Whether you have a question about our services, need a custom solution, or want to explore partnership opportunities, we're here to help.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-secondary/80 backdrop-blur-sm">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Contact;