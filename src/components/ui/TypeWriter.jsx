import { useState, useEffect } from 'react'

const ROLES = ['Data Scientist', 'ML Engineer', 'LLM Builder', 'Pipeline Architect', 'AI Practitioner']
const TYPE_SPEED = 80
const DELETE_SPEED = 40
const PAUSE_MS = 1800

export default function TypeWriter() {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = ROLES[roleIndex]
    let timer

    if (!isDeleting && text === current) {
      timer = setTimeout(() => setIsDeleting(true), PAUSE_MS)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setRoleIndex((i) => (i + 1) % ROLES.length)
    } else {
      const nextText = isDeleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1)
      timer = setTimeout(() => setText(nextText), isDeleting ? DELETE_SPEED : TYPE_SPEED)
    }

    return () => clearTimeout(timer)
  }, [text, isDeleting, roleIndex])

  return (
    <span className="font-mono text-accent text-2xl md:text-3xl" aria-live="polite">
      {text}
      <span className="animate-blink">|</span>
    </span>
  )
}
