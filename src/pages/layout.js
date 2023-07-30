import Aside from '@/components/Aside'
import clsx from 'clsx'

export default function Layout({ className, children }) {
  return (
    <main className={clsx(className)}>
      <Aside />
      {children}
    </main>
  )
}
