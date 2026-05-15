import { motion } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import SkillTag from '../ui/SkillTag'
import { skillCategories } from '../../data/skills'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const tagVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
}

export default function Skills() {
  const { ref, isInView } = useScrollReveal()

  return (
    <SectionWrapper id="skills">
      <p className="section-subheading">02. Skills</p>
      <h2 className="section-heading mb-12">Tech Stack</h2>

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skillCategories.map((cat, catIndex) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: catIndex * 0.08 }}
          >
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 pb-2 border-b border-accent/30">
              {cat.category}
            </h3>
            <motion.div
              className="flex flex-wrap gap-2"
              variants={{
                visible: { transition: { staggerChildren: 0.04 } },
              }}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {cat.skills.map((skill) => (
                <motion.div key={skill} variants={tagVariants} transition={{ duration: 0.3 }}>
                  <SkillTag name={skill} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
