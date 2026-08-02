import { useState } from 'react'

export default function GalleryItem({ item, onOpen }) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  return <button className={`gallery-item gallery-item--${item.orientation} ${loaded ? 'is-loaded' : ''}`} type="button" onClick={onOpen} aria-label={`Abrir: ${item.caption}`}>
    {!loaded && !failed && <span className="image-placeholder" />}
    {failed ? <span className="image-fallback">No pudimos cargar este recuerdo <small>♡</small></span> : <img src={item.src} alt={item.alt} loading="lazy" onLoad={() => setLoaded(true)} onError={() => setFailed(true)} />}
    <span className="gallery-caption"><small>Recuerdo {String(item.id).padStart(2, '0')}</small>{item.caption}</span>
  </button>
}
