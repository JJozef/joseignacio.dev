import { GitHubIcon, TwitterIcon } from '../icons/icons'
import Links from '../ui/links'

export default function Hero() {
  return (
    <section className='w-100 min-h-screen text-neutral-950 relative select-none'>
      <article className='w-100 min-h-screen flex flex-col justify-center items-center'>
        <h1 className='mb-1 sm:mb-3 relative'>
          <span className='font-extrabold absolute -left-14 sm:-left-20 md:-left-20 top-8 sm:top-7 md:top-10 text-[8px] sm:text-xs select-none transition-all duration-300'>
            console.log('
          </span>
          <span className='text-[2.5rem] font-extrabold sticky md:text-7xl transition-all duration-300'>
            Jose Ignacio
          </span>
          <span className='font-extrabold absolute -right-2 sm:-right-3 md:-right-2 top-8 sm:top-7 md:top-10 text-[8px] sm:text-xs select-none transition-all duration-300'>
            ')
          </span>
        </h1>
        <p className='font-medium text-base sm:text-xl transition-all duration-300'>
          Desarrollador Web
        </p>

        <div className='flex items-center gap-2 mt-8'>
          <Links
            href='https://github.com/JJozef'
            className='hover:scale-105 hover:text-zinc-900 transition-all duration-300'
            rel='noopener noreferrer'
            target='_blank'
            arial-label='GitHub'
          >
            <GitHubIcon className='w-7 h-7' />
          </Links>
          <Links
            href='https://twitter.com/Jozefzin'
            className='hover:scale-105 hover:text-zinc-900 inc-500 transition-all duration-300'
            rel='noopener noreferrer'
            target='_blank'
            arial-label='Twitter'
          >
            <TwitterIcon className='w-7 h-7' />
          </Links>
        </div>
      </article>

      <div className='w-100 min-w-full flex justify-center items-center absolute bottom-2 left-0'>
        <button className='text-neutral-950 bg-white shadow px-3 py-1 rounded pointer-events-none font-medium text-base'>
          EN DESARROLLO
        </button>
      </div>
    </section>
  )
}
