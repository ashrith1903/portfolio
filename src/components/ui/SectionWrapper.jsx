export default function SectionWrapper({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`py-24 px-6 scroll-mt-20 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  )
}
