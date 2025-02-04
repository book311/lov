import { motion } from "framer-motion";

const partners = [
  {
    name: "TechCorp",
    logo: "/placeholder.svg",
  },
  {
    name: "InnovateLabs",
    logo: "/placeholder.svg",
  },
  {
    name: "FutureFinance",
    logo: "/placeholder.svg",
  },
  {
    name: "BlockchainTech",
    logo: "/placeholder.svg",
  },
];

export const PartnershipsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Our Partners</h2>
          <p className="text-primary-muted text-lg max-w-2xl mx-auto">
            Collaborating with industry leaders to deliver exceptional solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-black rounded-lg hover:shadow-neon transition-shadow duration-300 flex items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 w-auto filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};