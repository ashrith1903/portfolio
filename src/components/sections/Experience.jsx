import SectionWrapper from '../ui/SectionWrapper'
import TimelineItem from '../ui/TimelineItem'
import { experience } from '../../data/experience'

export default function Experience() {
  const work = experience.filter((e) => e.type === 'work')
  const edu = experience.filter((e) => e.type === 'education')

  return (
    <SectionWrapper id="experience">
      <p className="section-subheading">04. Experience</p>
      <h2 className="section-heading mb-12">Where I've Worked</h2>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />

        <div className="space-y-10">
          {work.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Education divider */}
        <div className="relative flex items-center justify-center my-12">
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-accent/20" />
          <span className="relative z-10 font-mono text-xs text-accent/50 bg-[#0a0a0a] px-4 border border-accent/20 rounded-full py-1">
            EDUCATION
          </span>
        </div>

        <div className="space-y-10">
          {edu.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={work.length + index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
