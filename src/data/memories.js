const asset = (path) => `${import.meta.env.BASE_URL}${path}`

export const memories = [
  {
    id: 1,
    date: '21 de junio de 2025',
    title: 'El día que nos conocimos',
    description: 'Ese día comenzó algo muy bonito entre nosotros. Un encuentro que terminó convirtiéndose en el inicio de nuestra historia.',
    image: asset('images/timeline/momento-01.jpeg'),
    rotated: true,
  },
  {
    id: 2,
    date: 'Nuestro primer plan',
    title: 'Comer chaufa juntos',
    description: 'Nuestro primer plan fue sencillo, pero muy especial: salir a comer chaufa y disfrutar de ese momento juntos.',
    image: asset('images/timeline/momento-02.jpeg'),
  },
  {
    id: 3,
    date: 'Dos carreras, una historia',
    title: 'Enfermería y Sistemas',
    description: 'Rosa estudia Enfermería y yo estudio Sistemas. No compartimos las mismas clases, pero encontramos la manera de acompañarnos y construir nuestros propios momentos.',
    image: asset('images/timeline/momento-03.jpeg'),
  },
  {
    id: 4,
    date: '1 de agosto de 2026',
    title: 'Un detalle creado para ti',
    description: 'Quería regalarte un lugar donde pudiéramos guardar un pedacito de todo lo bonito que hemos vivido.',
    image: asset('images/timeline/momento-04.jpeg'),
  },
]
