import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function AnimatedContent({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const [visible, setVisible] = useState(reduced)

  useEffect(() => {
    if (reduced) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -30px' })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [reduced])

  return <Tag ref={ref} className={`animated-content ${visible ? 'is-visible' : ''} ${className}`} style={{ '--reveal-delay': `${delay}ms` }}>{children}</Tag>
}
