import Link from 'next/link'
import { useRouter } from 'next/router'

function AsideLink({ text, href, icon, ...props }) {
  const routeActive = useRouter().pathname

  return (
    <li
      className={`rounded-bl-lg rounded-tl-lg px-3 py-2.5 ml-3 group transition-all duration-300 ${
        routeActive === href ? 'bg-subtrans-color/[0.7] dark:bg-aside-link/10 shadow-aside-link-sw' : ''
      } `}
    >
      <Link
        href={href}
        className={`text-zinc-700 dark:text-aside-link/80 text-sm font-semibold flex items-center gap-x-2 transition-colors duration-300 ${
          routeActive === href ? 'text-zinc-950 dark:text-white' : 'dark:hover:text-aside-link hover:text-zinc-900'
        }`}
        {...props}
      >
        {icon}
        {text}
      </Link>
    </li>
  )
}

export default AsideLink
