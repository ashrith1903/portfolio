import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import SectionWrapper from '../ui/SectionWrapper'

const terminalLines = [
  { label: 'role', value: '"Data Scientist & ML Engineer"' },
  { label: 'education', value: '"BITS Pilani, EEE"' },
  { label: 'experience', value: '"Headout, DXC Technology"' },
  { label: 'focus', value: '["LLMs", "NLP", "Computer Vision"]' },
  { label: 'status', value: '"Open to opportunities"' },
]

export default function About() {
  const left = useScrollReveal()
  const right = useScrollReveal()

  return (
    <SectionWrapper id="about">
      <p className="section-subheading">01. About</p>
      <h2 className="section-heading mb-12">Who I Am</h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Terminal card */}
        <motion.div
          ref={left.ref}
          initial={{ opacity: 0, x: -40 }}
          animate={left.isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="glass-card p-6 font-mono text-sm"
        >
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.06]">
            <span className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <span className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="text-white/30 text-xs ml-2">ashrith.config.json</span>
          </div>
          <div className="space-y-2.5">
            {terminalLines.map(({ label, value }) => (
              <div key={label} className="flex gap-2 flex-wrap">
                <span className="text-accent-violet/80">&quot;{label}&quot;</span>
                <span className="text-white/30">:</span>
                <span className="text-accent/80">{value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bio text */}
        <motion.div
          ref={right.ref}
          initial={{ opacity: 0, x: 40 }}
          animate={right.isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="space-y-5"
        >
          <p className="text-white/70 leading-relaxed text-base">
            BITS Pilani EEE graduate with experience building end-to-end ML systems and data
            pipelines across analytics, NLP, and computer vision.
          </p>
          <p className="text-white/70 leading-relaxed text-base">
            Previously Data Analyst at{' '}
            <span className="text-accent font-medium">Headout</span>, where I owned the analytics
            stack and built ML-powered competitor intelligence systems, working directly with
            cofounders to turn raw data into product decisions.
          </p>
          <p className="text-white/70 leading-relaxed text-base">
            I work at the intersection of{' '}
            <span className="text-white font-medium">building things</span> and{' '}
            <span className="text-white font-medium">measuring whether they work</span>. That means
            shipping models, writing the pipelines that feed them, and owning the dashboards that
            prove the impact.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://github.com/ashrith1903"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-white/15 text-white/60 text-sm font-mono
                hover:border-accent/40 hover:text-accent transition-all duration-200"
            >
              GitHub →
            </a>
            <a
              href="https://www.linkedin.com/in/ashrith-deshmukh-1599221b9"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-white/15 text-white/60 text-sm font-mono
                hover:border-accent/40 hover:text-accent transition-all duration-200"
            >
              LinkedIn →
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
