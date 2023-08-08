import Container from '../Container'
import {
  BootStrapIcon,
  JavaScriptIcon,
  LaravelIcon,
  MySqlIcon,
  NextJsIcon,
  PHPIcon,
  TailwindIcon
} from '../icons/icons'
import CardTech from '../ui/CardTech'

function AboutMe() {
  return (
    <Container>
      <h3 className='font-bold text-lg mb-3'>Informacion General</h3>
      <p className='text-base'>
        ¡Hola! Soy José Ignacio, un desarrollador web de Chile. Tengo
        experiencia en el desarrollo de aplicaciones web y me apasiona aprender
        nuevas tecnologías y aplicarlas en mis proyectos. Disfruto trabajando en
        equipo y colaborando con otros profesionales para lograr resultados
        exitosos. Soy autodidacta y siempre busco oportunidades para crecer y
        mejorar mis habilidades.
      </p>
      <h3 className='font-bold text-lg mb-3 mt-6'>Habilidades</h3>

      <ul className='grid grid-cols-3 gap-3 md:grid-cols-4'>
        <CardTech
          icon={
            <JavaScriptIcon className='w-16 h-16 group-hover:stroke-[#fde047]' />
          }
          tech='JavaScript'
          color='rgba(253, 224, 71, .1)'
        />
        <CardTech icon={<NextJsIcon className='w-16 h-16' />} tech='NextJs' />
        <CardTech
          icon={<PHPIcon className='w-16 h-16 group-hover:stroke-[#484C89]' />}
          tech='PHP'
          color='rgba(72, 76, 137, .1)'
        />
        <CardTech
          icon={
            <LaravelIcon className='w-16 h-16 group-hover:stroke-[#c2410c]' />
          }
          tech='Laravel'
          color='rgba(194, 65, 12, .1)'
        />

        <CardTech
          icon={
            <MySqlIcon className='w-16 h-16 group-hover:stroke-[#00758f]' />
          }
          tech='MySql'
          color='rgba(0, 117, 143, .1)'
        />
        <CardTech
          icon={
            <TailwindIcon className='w-16 h-16 group-hover:stroke-[#38bdf8]' />
          }
          tech='TailwindCSS'
          color='rgba(56, 189, 248, .1)'
        />
        <CardTech
          icon={
            <BootStrapIcon className='w-16 h-16 group-hover:stroke-[#6d28d9]' />
          }
          tech='Bootstrap'
          color='rgba(109, 40, 217, .1)'
        />
      </ul>
    </Container>
  )
}

export default AboutMe
