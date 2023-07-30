import { ThemeToggle } from './ThemeToggle'
import { GitHubIcon, TwitterIcon } from './icons/icons'
import { SiteRoutes } from '@/config/SiteRoutes'
import Link from 'next/link'
import AsideLink from './ui/AsideLink'
import useMenuStore from '@/stores/MenuStore'
import useOverflowHidden from '@/hooks/useBodyScrollBar'

function Aside() {
  const isMenuOpen = useMenuStore((state) => state.isMenuOpen)
  useOverflowHidden(isMenuOpen)

  return (
    <aside
      className={`h-responsive aside-class fixed left-0 top-auto bg-white dark:bg-menu-color md:bg-transparent bottom-0 border-r border-chinese-white dark:border-aside-link/10 z-40 overflow-hidden md:w-auto md:top-0 md:z-0 md:opacity-100 md:visible
       ${isMenuOpen ? 'w-auto visible opacity-100' : 'w-0 invisible opacity-0'}
       `}
    >
      <div className='absolute block h-full w-full bg-white dark:bg-menu-color blur-3xl backdrop-blur-3xl md:hidden inset-0 -z-10' />
      <div className='h-full flex flex-col justify-between z-10'>
        <div className='py-7 flex items-center space-x-2 px-32 md:px-14'>
          <img
            className='rounded-full w-9 h-9 hidden md:flex'
            src='/logo.jpg'
            alt='Jose Ignacio, Github Avatar'
          />
          <h1 className='font-medium hidden md:flex'>Jose Ignacio</h1>
        </div>
        <ul className='h-full overflow-x-auto'>
          {SiteRoutes.map((route, index) => (
            <AsideLink
              key={index}
              href={route.href}
              icon={route.icon}
              text={route.text}
              arai-label={route.ariaLabel}
            />
          ))}
        </ul>
        <div className='text-center'>
          <div className='flex justify-center items-center space-x-3 px-1 py-4'>
            <Link
              href='https://github.com/JJozef'
              className='group'
              rel='noopener noreferrer nofollow'
              target='_blank'
            >
              <GitHubIcon className='w-[1.4rem] h-[1.4rem] transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse fill-black dark:fill-white' />
            </Link>
            <Link
              href='https://twitter.com/Jozefzin'
              className='group'
              rel='noopener noreferrer nofollow'
              target='_blank'
            >
              <TwitterIcon className='w-[1.4rem] h-[1.4rem] transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse fill-black dark:fill-white' />
            </Link>
            <ThemeToggle />
          </div>
          <div className='border-t border-chinese-white dark:border-aside-link/10 px-3 py-4'>
            <button
              className='w-full text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-aside-link/80 border border-chinese-white dark:border-aside-link/10 rounded-md dark:hover:text-aside-link/100 hover:bg-aside-link/10 transition-all duration-300'
              onClick={() => window.open('mailto:josemillaquen12@gmail.com')}
              aria-label='Email'
              title='Enviar email'
            >
              me@joseignacio.dev
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Aside
