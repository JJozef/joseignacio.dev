import clsx from 'clsx'
import Header from './Header'
import useMenuStore from '@/stores/MenuStore'

function Layout({ children, className }) {
  const toggleMenu = useMenuStore((state) => state.toggleMenu)

  return (
    <section
      className={clsx(
        'w-100 min-h-screen relative ml-0 md:ml-[15.8rem]',
        className
      )}
    >
      <Header onClick={toggleMenu} />
      {children}
    </section>
  )
}

export default Layout
