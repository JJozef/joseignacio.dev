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
      <h3 className='font-bold text-base mb-3'>Informacion General</h3>
      <p className='text-sm'>
        Soy un desarrollador web, con experiencia en el desarrollo de
        aplicaciones web y aplicaciones moviles. Me gusta aprender nuevas
        tecnologias y aplicarlas en mis proyectos.
      </p>
      <h3 className='font-bold text-base mb-3 mt-6'>Habilidades</h3>

      <ul className='grid grid-cols-3 gap-3 md:grid-cols-4'>
        <CardTech
          url='https://www.javascript.com/'
          icon={
            <JavaScriptIcon className='w-16 h-16 group-hover:stroke-[#fde047]' />
          }
          tech='JavaScript'
          color='rgba(253, 224, 71, .1)'
        />
        <CardTech
          url='https://nextjs.org/'
          icon={<NextJsIcon className='w-16 h-16' />}
          tech='NextJs'
        />
        <CardTech
          url='https://www.php.net/'
          icon={<PHPIcon className='w-16 h-16 group-hover:stroke-[#484C89]' />}
          tech='PHP'
          color='rgba(72, 76, 137, .1)'
        />
        <CardTech
          url='https://laravel.com/'
          icon={
            <LaravelIcon className='w-16 h-16 group-hover:stroke-[#c2410c]' />
          }
          tech='Laravel'
          color='rgba(194, 65, 12, .1)'
        />

        <CardTech
          url='https://www.mysql.com/'
          icon={
            <MySqlIcon className='w-16 h-16 group-hover:stroke-[#00758f]' />
          }
          tech='MySql'
          color='rgba(0, 117, 143, .1)'
        />
        <CardTech
          url='https://tailwindcss.com/'
          icon={
            <TailwindIcon className='w-16 h-16 group-hover:stroke-[#38bdf8]' />
          }
          tech='TailwindCSS'
          color='rgba(56, 189, 248, .1)'
        />
        <CardTech
          url='https://getbootstrap.com/'
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
