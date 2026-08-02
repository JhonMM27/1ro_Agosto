import { useEffect } from 'react'

export default function ImageModal({ items, index, onClose, onChange }) {
  const item = items[index]
  useEffect(() => {
    document.body.classList.add('modal-open')
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onChange((index + 1) % items.length)
      if (event.key === 'ArrowLeft') onChange((index - 1 + items.length) % items.length)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [index, items.length, onChange, onClose])

  return <div className="image-modal" role="dialog" aria-modal="true" aria-label="Fotografía ampliada" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
    <button className="modal-close" type="button" onClick={onClose} aria-label="Cerrar galería">×</button>
    <button className="modal-arrow modal-arrow--prev" type="button" onClick={() => onChange((index - 1 + items.length) % items.length)} aria-label="Fotografía anterior">‹</button>
    <figure className="modal-figure">
      <img src={item.src} alt={item.alt} />
      <figcaption><span>{String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span>{item.caption}</figcaption>
    </figure>
    <button className="modal-arrow modal-arrow--next" type="button" onClick={() => onChange((index + 1) % items.length)} aria-label="Fotografía siguiente">›</button>
  </div>
}
