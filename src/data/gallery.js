const captions = [
  'La sonrisa que quiero seguir viendo cada día.',
  'Un día de playa y de risas que se quedó con nosotros.',
  'Con el cielo enorme y el mejor equipo.',
  'Una mirada que siempre me encuentra.',
  'Esos instantes simples que se vuelven favoritos.',
  'Tu luz, incluso en los días tranquilos.',
  'Orgullosa, valiente y hermosa en cada etapa.',
  'Amistades, complicidad y muchos recuerdos.',
  'Caminos que se disfrutan más en buena compañía.',
  'Un día soleado que ahora vive en una foto.',
  'Abrazos que dicen más que mil palabras.',
  'Celebrando todo lo que vamos logrando.',
  'Tu sonrisa tiene una manera especial de arreglarlo todo.',
  'Días espontáneos que merecen quedarse para siempre.',
  'Sol, playa y una felicidad imposible de esconder.',
  'Un paso más en una historia que recién comienza.',
]

const portraitIds = new Set([1, 3, 4, 6, 7, 11, 15])

export const gallery = captions.map((caption, index) => ({
  id: index + 1,
  src: `/images/gallery/recuerdo-${String(index + 1).padStart(2, '0')}.jpeg`,
  alt: `Recuerdo especial ${index + 1} de nuestra historia`,
  caption,
  orientation: portraitIds.has(index + 1) ? 'portrait' : 'landscape',
}))

export const videos = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  src: `/videos/recuerdo-${String(index + 1).padStart(2, '0')}.mp4`,
  caption: ['Un instante para volver a vivir', 'Risas en movimiento', 'Un pedacito de aquel día', 'Momentos que no caben en una foto', 'Un recuerdo breve y bonito'][index],
}))
