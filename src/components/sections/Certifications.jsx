import { motion } from 'framer-motion'
import SectionWrapper from '../ui/SectionWrapper'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Award } from 'lucide-react'

const certs = [
  {
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    date: 'Dec 2023',
    description: '5-course specialization covering neural networks, CNNs, RNNs, and structuring ML projects.',
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'Coursera',
    date: 'Sep 2023',
    description: 'Foundational ML specialization covering supervised learning, unsupervised learning, and best practices for ML systems.',
  },
]

export default function Certifications() {
  const { ref, isInView } = useScrollReveal()

  return (
    <SectionWrapper id="certifications">
      <p className="section-subheading">05. Certifications</p>
      <h2 className="section-heading mb-12">Credentials</h2>

      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {certs.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="glass-card p-6 flex flex-col gap-4"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                <Award size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-base leading-snug">{cert.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-accent text-sm font-medium">{cert.issuer}</span>
                  <span className="text-white/20 text-xs">·</span>
                  <span className="font-mono text-white/35 text-xs">{cert.date}</span>
                </div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">{cert.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
