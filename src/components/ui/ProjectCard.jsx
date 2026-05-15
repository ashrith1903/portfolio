import { motion } from 'framer-motion'

export default function ProjectCard({ project, index }) {
  const { title, description, techStack } = project

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -6 }}
      className="glass-card p-6 flex flex-col gap-4 group transition-all duration-300"
      style={{ transition: 'box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease' }}
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-accent/50 text-sm">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div>
        <h3 className="text-white font-semibold text-lg leading-snug mb-2 group-hover:text-accent transition-colors duration-200">
          {title}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed line-clamp-4">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded text-xs font-mono bg-accent/10 text-accent/80 border border-accent/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
