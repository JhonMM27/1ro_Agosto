import Hero from './components/Hero/Hero'
import Introduction from './components/Introduction/Introduction'
import Timeline from './components/Timeline/Timeline'
import Gallery from './components/Gallery/Gallery'
import Reasons from './components/Reasons/Reasons'
import LoveQuestion from './components/LoveQuestion/LoveQuestion'
import LoveLetter from './components/LoveLetter/LoveLetter'
import FinalSection from './components/FinalSection/FinalSection'

export default function App() {
  return <>
    <a className="skip-link" href="#introduccion">Saltar al contenido</a>
    <main>
      <Hero />
      <Introduction />
      <Timeline />
      <Gallery />
      <Reasons />
      <LoveQuestion />
      <LoveLetter />
    </main>
    <FinalSection />
  </>
}
