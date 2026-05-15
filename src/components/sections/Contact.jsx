import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'

function LinkedInIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function GitHubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}
import SectionWrapper from '../ui/SectionWrapper'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ashrithdeshmukh@gmail.com',
    href: 'mailto:ashrithdeshmukh@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 96030 92020',
    href: 'tel:+919603092020',
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'ashrith-deshmukh',
    href: 'https://www.linkedin.com/in/ashrith-deshmukh-1599221b9',
  },
  {
    icon: GitHubIcon,
    label: 'GitHub',
    value: 'ashrith1903',
    href: 'https://github.com/ashrith1903',
  },
]

export default function Contact() {
  const { ref, isInView } = useScrollReveal()

  return (
    <SectionWrapper id="contact">
      <p className="section-subheading">06. Contact</p>
      <h2 className="section-heading mb-4">Let's Work Together</h2>
      <p className="text-white/40 text-sm font-mono mb-14">
        &gt; open to roles in ML engineering, data science, and applied AI
      </p>

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
      >
        {contacts.map(({ icon: Icon, label, value, href }, i) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="glass-card p-5 flex flex-col items-center gap-3 group
              hover:border-accent/30 transition-all duration-300 text-center"
          >
            <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20
              flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/40
              transition-all duration-300">
              <Icon size={18} className="text-accent" />
            </div>
            <div className="min-w-0 w-full">
              <p className="text-white/30 text-xs font-mono uppercase tracking-wider mb-0.5">{label}</p>
              <p className="text-white/70 text-sm whitespace-nowrap group-hover:text-white transition-colors duration-200">
                {value}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  )
}
