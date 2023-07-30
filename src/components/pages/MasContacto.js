import Link from 'next/link'
import Container from '../Container'

function MasContacto() {
  return (
    <Container>
      <h3 className='font-bold text-base mb-2'>Gracias</h3>
      <p className='mb-3 text-sm'>
        ¡Espero que te hayas divertido en mi sitio web! Ven de nuevo la próxima
        vez 😉
      </p>

      <h3 className='font-bold text-base mb-2 mt-6'>Contacto</h3>

      <p className='mb-3 text-sm'>
        Puedes contactarme a través de
        <Link
          href='https://twitter.com/Jozefzin'
          className='font-bold mx-1 hover:underline'
          rel='noopener noreferrer nofollow'
        >
          @Jozefzin
        </Link>
        en Twitter
      </p>
    </Container>
  )
}

export default MasContacto
