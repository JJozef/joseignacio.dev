import { MoreIcon, ProjectIcon, UserIcon } from '@/components/icons/icons'

export const SiteRoutes = [
  {
    text: 'sobre mi',
    href: '/',
    icon: <UserIcon className='w-5 h-5' />,
    ariaLabel: 'Sobre mi'
  },
  {
    text: 'proyectos',
    href: '/proyectos',
    icon: <ProjectIcon className='w-5 h-5' />,
    ariaLabel: 'Proyectos'
  },
  {
    text: 'mas - contacto',
    href: '/mas',
    icon: <MoreIcon className='w-5 h-5' />,
    ariaLabel: 'Mas - contacto'
  }
]
