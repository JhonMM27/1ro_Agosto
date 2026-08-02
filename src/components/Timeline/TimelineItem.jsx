import AnimatedContent from '../common/AnimatedContent'

export default function TimelineItem({ memory, index }) {
  return <AnimatedContent className={`timeline-item ${index % 2 ? 'timeline-item--reverse' : ''}`}>
    <div className={`timeline-photo ${memory.rotated ? 'timeline-photo--rotated' : ''}`}><img src={memory.image} alt={memory.title} loading="lazy" /></div>
    <div className="timeline-marker"><span>{String(memory.id).padStart(2, '0')}</span></div>
    <article className="timeline-card">
      <time>{memory.date}</time>
      <h3>{memory.title}</h3>
      <p>{memory.description}</p>
    </article>
  </AnimatedContent>
}
