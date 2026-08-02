import { useEffect, useRef, useState } from 'react'

export default function MusicPlayer({ src }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [available, setAvailable] = useState(true)

  useEffect(() => () => audioRef.current?.pause(), [])
  const toggle = async () => {
    if (!available) return
    try {
      if (playing) audioRef.current.pause()
      else await audioRef.current.play()
      setPlaying(!playing)
    } catch { setAvailable(false) }
  }

  return <>
    <audio ref={audioRef} src={src} loop preload="none" onError={() => setAvailable(false)} />
    <button className="music-player" type="button" onClick={toggle} aria-pressed={playing} aria-label={playing ? 'Pausar música' : 'Reproducir música'} title={available ? 'Nuestra canción' : 'Añade nuestra-cancion.mp3 en public/audio'}>
      <span className={playing ? 'music-bars is-playing' : 'music-bars'} aria-hidden="true"><i /><i /><i /></span>
      <span>{available ? (playing ? 'Pausar' : 'Música') : 'Sin canción'}</span>
    </button>
  </>
}
