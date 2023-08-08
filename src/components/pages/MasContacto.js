import Link from 'next/link'
import Container from '../Container'

function MasContacto() {
  return (
    <Container>
      <h3 className='font-bold text-lg mb-2'>Gracias</h3>
      <p className='mb-3 text-base'>
        ¡Espero que te hayas divertido en mi sitio web! Ven de nuevo la próxima
        vez 😉
      </p>

      <h3 className='font-bold text-lg mb-2 mt-6'>Contacto</h3>

      <p className='mb-3 text-base'>
        Puedes ponerte en contacto conmigo a través del correo electrónico:
        <button
          className='font-bold mx-1 border-none hover:underline outline-none focus:outline-none focus-visible:outline-none'
          onClick={() => window.open('mailto:josemillaquen12@gmail.com')}
          aria-label='Email'
          title='Enviar email'
        >
          me@joseignacio.dev
        </button>
      </p>

      <h3 className='font-bold text-lg mb-2 mt-20'>
        Proyectos que tengo en mente 👾
      </h3>

      <ul>
        <li className='mb-2'>
          <p>
            <span className='font-medium mr-1'>- Rewriter:</span>
            Aplicación intuitiva y eficiente que permita a los usuarios
            reescribir textos de manera sencilla. Con esta aplicación, podrán
            traducir los textos a diferentes idiomas y aprovechar la API de
            ChatGPT(OpenAI), para reescribir automáticamente el texto. Será una
            herramienta versátil y práctica para mejorar la calidad de los
            textos y ampliar su alcance a audiencias internacionales.
          </p>
        </li>

        <li className='mb-2'>
          <p>
            <span className='font-medium mr-1'>- TodoTopia:</span>
            Aplicacion web que permita a los usuarios crear tareas y
            organizarlas en categorías. La aplicación tendrá un diseño
            minimalista y atractivo, con una interfaz intuitiva y fácil de usar.
            Los usuarios podrán crear, editar y eliminar tareas, así como
            marcarlas como completadas. También podrán crear categorías y
            organizar sus tareas en ellas. Inspirada en
            <Link
              className='ml-1 hover:underline'
              href='https://Dona.ai'
              rel='noopener noreferrer nofollow'
              target='_blank'
            >
              Dona.ai
            </Link>
            .
          </p>
        </li>

        <span className='mt-2 font-medium'>Y MAS 👀</span>
      </ul>
    </Container>
  )
}

export default MasContacto
