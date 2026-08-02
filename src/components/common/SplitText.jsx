import { useReducedMotion } from '../../hooks/useReducedMotion'

export default function SplitText({ text, className = '' }) {
  const reduced = useReducedMotion()
  return (
    <span className={`split-text ${className}`} aria-label={text}>
      {text.split(' ').map((word, wordIndex) => (
        <span className="split-word" aria-hidden="true" key={`${word}-${wordIndex}`}>
          {word.split('').map((letter, letterIndex) => (
            <span className="split-letter" style={reduced ? undefined : { '--letter-delay': `${180 + (wordIndex * 3 + letterIndex) * 28}ms` }} key={`${letter}-${letterIndex}`}>{letter}</span>
          ))}
          <span className="split-space">&nbsp;</span>
        </span>
      ))}
    </span>
  )
}
