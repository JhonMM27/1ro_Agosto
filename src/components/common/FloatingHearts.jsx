export default function FloatingHearts({ active }) {
  if (!active) return null
  return <div className="heart-rain" aria-hidden="true">{Array.from({ length: 22 }, (_, i) => <span key={i} style={{ '--x': `${(i * 43) % 100}%`, '--delay': `${(i % 8) * .16}s`, '--size': `${12 + (i % 5) * 4}px` }}>♥</span>)}</div>
}
