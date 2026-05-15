import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import TypeWriter from '../ui/TypeWriter'
import ParticleField from '../three/ParticleField'
import { ChevronDown } from 'lucide-react'

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
}

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      {!isMobile ? (
        <ParticleField />
      ) : (
        <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent" />
      )}

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/30 via-transparent to-[#0a0a0a] pointer-events-none" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.p variants={item} className="font-mono text-accent text-sm tracking-widest uppercase mb-4">
          &gt; hello, world
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none mb-4"
        >
          Ashrith Deshmukh
        </motion.h1>

        <motion.div variants={item} className="mb-6 h-10 flex items-center justify-center">
          <TypeWriter />
        </motion.div>

        <motion.p
          variants={item}
          className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed mb-10"
        >
          Building end-to-end ML systems at the intersection of
          <span className="text-accent"> building things </span>
          and measuring whether they work.
        </motion.p>

        <motion.div variants={item} className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-accent text-black font-semibold text-sm
              hover:bg-accent/90 transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-white/20 text-white font-semibold text-sm
              hover:border-accent/50 hover:text-accent transition-all duration-200"
          >
            Contact
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  )
}
