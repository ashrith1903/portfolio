import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'

export default function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0
  const Icon = item.type === 'education' ? GraduationCap : Briefcase

  return (
    <div className="relative flex items-start md:justify-center">
      {/* Center dot */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-accent/20 border border-accent/50">
        <Icon size={14} className="text-accent" />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`ml-14 md:ml-0 glass-card p-5 w-full md:w-[calc(50%-3rem)] ${
          isLeft ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
        }`}
      >
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-white font-semibold text-base leading-tight">{item.role}</h3>
          <span className="font-mono text-xs text-white/40 whitespace-nowrap shrink-0">{item.period}</span>
        </div>
        <p className="text-accent text-sm font-medium mb-1">{item.company}</p>
        <p className="text-white/30 text-xs font-mono mb-3">{item.location}</p>
        <ul className="space-y-1.5">
          {item.bullets.map((b, i) => (
            <li key={i} className="text-white/55 text-sm leading-relaxed flex gap-2">
              <span className="text-accent/50 mt-1 shrink-0">›</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}
