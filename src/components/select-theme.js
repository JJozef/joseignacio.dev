'use client'

import { useTheme } from 'next-themes'
import { Button } from './ui/button'
import { Sun, Moon } from 'lucide-react'

export function SelectTheme() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant='outline'
      className='w-9 px-3'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <Sun className='h-4 w-4 min-w-4 hidden dark:block' />
      <Moon className='h-4 w-4 min-w-4 dark:hidden' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
