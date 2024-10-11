'use client'

import { MENU_ITEMS } from '@/const/data'
import { useSelectedLayoutSegment } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import { GlowButton } from './buttons/glow-button'
import { LayoutGroup } from 'framer-motion'
import { SelectTheme } from './select-theme'
import { useTransitionRouter } from 'next-view-transitions'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from './ui/dialog'
import HeaderLink from '@/components/links/header-link'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const segment = useSelectedLayoutSegment()
  const router = useTransitionRouter()

  return (
    <LayoutGroup>
      <header className='w-[calc(100%_-_2rem)] md:max-w-3xl fixed inset-x-0 top-4 z-40 flex items-center justify-between rounded-xl mx-auto'>
        <div className='bg-gray-100/70 dark:bg-background/90 backdrop-blur-sm w-full border border-zinc-300 dark:border-border rounded-xl relative'>
          <div
            aria-hidden='true'
            className='relative -top-px left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-muted-foreground to-transparent'
          />
          <div className='absolute h-full w-full dark:bg-zinc-950/70 rounded-xl blur-3xl' />
          <div className='flex justify-between items-center overflow-hidden px-1.5 py-1 relative z-2 w-full h-full min-w-0 rounded-xl'>
            <div className='hidden sm:flex text-muted-foreground'>
              {MENU_ITEMS.map((item, index) => (
                <GlowButton
                  index={index}
                  onClick={() => router.push(item.path)}
                  isActive={segment === item.segment}
                  key={index}
                >
                  {item.name}
                </GlowButton>
              ))}
            </div>

            <Link href='/'>
              <Image
                src='/logo.png'
                alt='Jozef Logo'
                width={40}
                height={40}
                className='size-7 rounded-md sm:hidden cursor-pointer no-drag'
              />
            </Link>

            <div className='flex items-center gap-2'>
              <SelectTheme />

              <Dialog>
                <DialogTrigger aria-label='Menu' asChild>
                  <Button variant='outline' className='sm:hidden w-9 px-0'>
                    <MenuIcon />
                  </Button>
                </DialogTrigger>
                <DialogContent className='flex items-center bg-transparent border-none shadow-none'>
                  <div className='flex flex-col w-full bg-background/90 backdrop-blur-md border border-border shadow-md shadow-foreground/5 rounded-xl mx-6 p-4'>
                    {MENU_ITEMS.map((item, index) => (
                      <HeaderLink
                        key={index}
                        to={item.path}
                        active={segment === item.segment}
                        full
                        className='h-14'
                      >
                        {item.name}
                      </HeaderLink>
                    ))}
                    <DialogClose />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>
    </LayoutGroup>
  )
}
