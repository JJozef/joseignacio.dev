'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

import { Button } from './ui/button'

export function SelectTheme() {
  const { theme, setTheme } = useTheme()

  const handleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <Button variant='outline' className='w-9 px-3' onClick={handleTheme}>
      {theme === 'dark' ? (
        <SunIcon className='h-4 w-4 min-w-4' />
      ) : (
        <MoonIcon className='h-4 w-4 min-w-4' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
