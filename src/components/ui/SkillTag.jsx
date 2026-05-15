import { motion } from 'framer-motion'

export default function SkillTag({ name }) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className="inline-block px-3 py-1.5 rounded-full text-sm font-mono
        border border-white/10 text-white/70 bg-white/[0.03]
        hover:border-accent/40 hover:text-accent hover:bg-accent/5
        transition-colors duration-200 cursor-default"
    >
      {name}
    </motion.span>
  )
}
