import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Sarah Parker",
    title: "CEO & Founder",
    bio: "15+ years of experience in tech leadership and innovation",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Michael Chen",
    title: "CTO",
    bio: "Expert in AI and blockchain technologies",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "David Rodriguez",
    title: "Head of Innovation",
    bio: "Pioneering new solutions in fintech",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

interface TeamSectionProps {
  title?: string;
  description?: string;
}

export const TeamSection: React.FC<TeamSectionProps> = ({
  title = "Our Leadership Team",
  description = "Meet the experts driving innovation and excellence at SP L4BS"
}) => {
  return (
    <section className="py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-4">{title}</h2>
          <p className="text-primary-muted text-base sm:text-lg max-w-2xl mx-auto px-4">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-4 sm:p-6 bg-secondary rounded-lg text-center hover:shadow-neon transition-shadow duration-300"
            >
              <Avatar className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">{member.name}</h3>
              <p className="text-accent mb-2 text-sm sm:text-base">{member.title}</p>
              <p className="text-primary-muted mb-4 text-sm sm:text-base">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                <a href={member.social.linkedin} className="text-primary-muted hover:text-accent transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={member.social.twitter} className="text-primary-muted hover:text-accent transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};