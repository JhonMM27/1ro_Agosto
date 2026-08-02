import AnimatedContent from './AnimatedContent'

export default function SectionTitle({ eyebrow, title, text, align = 'center' }) {
  return <AnimatedContent className={`section-title section-title--${align}`}>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </AnimatedContent>
}
