import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from './icons/icons'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      type='button'
      className='group'
      onClick={() => setTheme(otherTheme)}
    >
      <span className='sr-only'>Switch to {otherTheme} theme</span>
      {resolvedTheme === 'dark' ? (
        <SunIcon className='w-[1.4rem] h-[1.4rem] transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse fill-black dark:fill-white' />
      ) : (
        <MoonIcon className='w-[1.4rem] h-[1.4rem] transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse fill-black dark:fill-white' />
      )}
    </button>
  )
}
