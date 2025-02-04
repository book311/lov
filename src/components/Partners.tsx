import { motion } from "framer-motion";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const partners = [
  { name: "TechCorp", logo: "/placeholder.svg" },
  { name: "InnovateLabs", logo: "/placeholder.svg" },
  { name: "FutureFinance", logo: "/placeholder.svg" },
  { name: "BlockchainTech", logo: "/placeholder.svg" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export const Partners = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Partners
          </h2>
          <p className="text-primary-muted max-w-2xl mx-auto">
            Collaborating with industry leaders to deliver exceptional solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-background-translucent backdrop-blur-sm rounded-lg hover:shadow-neon transition-all duration-300 group"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 w-auto mx-auto filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-6"
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="text-primary-muted hover:text-accent transition-colors duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};