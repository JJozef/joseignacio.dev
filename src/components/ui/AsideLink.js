import { useRouter } from 'next/router'
import Link from 'next/link'
import useMenuStore from '@/stores/MenuStore'
import clsx from 'clsx'

function AsideLink({ text, href, icon, ...props }) {
  const routeActive = useRouter().pathname
  const toggleMenu = useMenuStore((state) => state.toggleMenu)

  return (
    <li
      className={clsx(
        'rounded-bl-lg rounded-tl-lg ml-3 group transition-all duration-300',
        routeActive === href &&
          'bg-subtrans-color/[0.7] dark:bg-aside-link/10 shadow-aside-link-sw'
      )}
    >
      <Link
        href={href}
        className={clsx(
          'text-zinc-700 dark:text-aside-link/80 text-sm font-semibold flex items-center px-3 py-2.5 gap-x-2 transition-colors duration-300',
          routeActive === href
            ? 'text-zinc-950 dark:text-white'
            : 'dark:hover:text-aside-link hover:text-zinc-900'
        )}
        onClick={toggleMenu}
        {...props}
      >
        {icon}
        {text}
      </Link>
    </li>
  )
}

export default AsideLink
