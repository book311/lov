import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "SP L4BS helped us scale our operations with their exceptional AI tools.",
    author: "John Doe",
    position: "CEO",
    company: "FinTech Inc",
  },
  {
    quote: "Their blockchain expertise revolutionized our supply chain, making it transparent and secure.",
    author: "Sarah Lee",
    position: "COO",
    company: "Retail Solutions",
  },
  {
    quote: "The team's dedication to innovation and client success is unmatched in the industry.",
    author: "Michael Chen",
    position: "CTO",
    company: "Tech Innovators",
  },
];

export const Testimonials = () => {
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
            What Our Clients Say About Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-secondary-soft hover:shadow-neon transition-all duration-300 border border-accent/20"
            >
              <Quote className="w-8 h-8 text-accent mb-4" />
              <p className="text-gray-400 mb-6 italic">"{testimonial.quote}"</p>
              <div className="text-white">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-400">
                  {testimonial.position}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};