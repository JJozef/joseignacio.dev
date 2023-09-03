import { CloseIcon, HumburgerIcon } from './icons/icons'
import Link from 'next/link'
import useMenuStore from '@/stores/MenuStore'

function Header({ onClick, ...props }) {
  const isMenuOpen = useMenuStore((state) => state.isMenuOpen)
  return (
    <header className='py-4 px-6 flex justify-between items-center md:hidden border-b border-chinese-white dark:border-aside-link/10'>
      <Link href='/'>
        <h1 className='text-base font-medium'>Jose Ignacio</h1>
      </Link>
      <button
        className='focus:outline-none focus-visible:outline-none hover:bg-aside-link/5 rounded-lg px-1 py-1 transition-colors duration-300'
        onClick={onClick}
        aria-label='Abrir menú'
        {...props}
      >
        {isMenuOpen ? <CloseIcon /> : <HumburgerIcon />}
      </button>
    </header>
  )
}

export default Header
