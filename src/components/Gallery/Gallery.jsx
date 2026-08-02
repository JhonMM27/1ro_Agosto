import { useCallback, useState } from 'react'
import { gallery, videos } from '../../data/gallery'
import ImageModal from '../common/ImageModal'
import SectionTitle from '../common/SectionTitle'
import AnimatedContent from '../common/AnimatedContent'
import GalleryItem from './GalleryItem'

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const closeModal = useCallback(() => setActiveIndex(null), [])
  const changeImage = useCallback((index) => setActiveIndex(index), [])
  return <section className="section gallery-section" id="recuerdos">
    <div className="shell">
      <SectionTitle eyebrow="Nuestro pequeño archivo" title="Recuerdos que quiero guardar" text="Fotos imperfectas, días espontáneos y momentos que para mí lo significan todo." />
      <div className="masonry-gallery">{gallery.map((item, index) => <GalleryItem key={item.id} item={item} onOpen={() => setActiveIndex(index)} />)}</div>
      <AnimatedContent className="video-heading"><span className="eyebrow">Y algunos instantes en movimiento</span><h3>Presiona play para volver a vivirlos</h3></AnimatedContent>
      <div className="video-strip">{videos.map((video) => <AnimatedContent as="figure" className="video-card" key={video.id}><video src={video.src} controls playsInline preload="metadata" aria-label={video.caption} /><figcaption>{video.caption}</figcaption></AnimatedContent>)}</div>
    </div>
    {activeIndex !== null && <ImageModal items={gallery} index={activeIndex} onClose={closeModal} onChange={changeImage} />}
  </section>
}
