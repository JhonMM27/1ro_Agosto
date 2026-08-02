import AnimatedContent from '../common/AnimatedContent'

export default function ReasonCard({ reason, index }) {
  return <AnimatedContent className="reason-card" delay={(index % 4) * 80}>
    <span className="reason-icon" aria-hidden="true">{reason.icon}</span>
    <span className="reason-number">0{reason.id}</span>
    <h3>{reason.title}</h3>
    <p>{reason.description}</p>
  </AnimatedContent>
}
