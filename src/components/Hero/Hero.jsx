import { coupleConfig } from '../../config/couple'
import AnimatedContent from '../common/AnimatedContent'
import MusicPlayer from '../common/MusicPlayer'
import SplitText from '../common/SplitText'

export default function Hero() {
  const scrollToStory = () => document.querySelector('#introduccion')?.scrollIntoView({ behavior: 'smooth' })
  return <header className="hero-section" id="inicio">
    <img className="hero-image" src={`${import.meta.env.BASE_URL}images/hero/principal.jpeg`} alt="Ella sonriendo en primer plano durante un día especial" fetchPriority="high" />
    <div className="hero-overlay" />
    <div className="ambient-lights" aria-hidden="true"><i /><i /><i /></div>
    <MusicPlayer src={coupleConfig.songPath} />
    <div className="hero-content shell">
      <AnimatedContent className="hero-date" delay={50}>1 de agosto de 2026</AnimatedContent>
      <h1><SplitText text={coupleConfig.heroTitle} /></h1>
      <AnimatedContent delay={600}><p className="hero-subtitle">{coupleConfig.heroSubtitle}</p></AnimatedContent>
      <AnimatedContent delay={750}><button className="button button--light" type="button" onClick={scrollToStory}>Descubre nuestra historia <span aria-hidden="true">↓</span></button></AnimatedContent>
    </div>
    <button className="scroll-hint" type="button" onClick={scrollToStory} aria-label="Continuar a nuestra historia"><span />Desliza</button>
  </header>
}
