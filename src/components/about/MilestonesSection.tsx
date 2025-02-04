import { motion } from "framer-motion";

interface MilestonesSectionProps {
  title?: string;
  description?: string;
}

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description: "SP L4BS was established with a vision to transform digital innovation.",
  },
  {
    year: "2021",
    title: "First Major Project",
    description: "Successfully delivered enterprise blockchain solution for Fortune 500 company.",
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Opened new offices and expanded services to international markets.",
  },
  {
    year: "2023",
    title: "Industry Recognition",
    description: "Received multiple awards for innovation in AI and blockchain solutions.",
  },
];

export const MilestonesSection: React.FC<MilestonesSectionProps> = ({
  title = "Our Journey",
  description = "Key milestones that have shaped our growth and success"
}) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
          <p className="text-primary-muted text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent opacity-20" />
          
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative mb-8 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'} md:w-1/2`}
            >
              <div className="bg-secondary p-6 rounded-lg hover:shadow-neon transition-shadow duration-300">
                <div className="absolute top-6 -left-3 md:left-auto md:right-0 w-6 h-6 rounded-full bg-accent" 
                     style={{ [index % 2 === 0 ? 'left' : 'right']: '-12px' }} />
                <span className="text-accent font-bold mb-2 block">{milestone.year}</span>
                <h3 className="text-xl font-semibold text-primary mb-2">{milestone.title}</h3>
                <p className="text-primary-muted">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};