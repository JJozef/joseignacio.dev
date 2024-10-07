'use client'

import { Button } from '@/components/ui/button'
import { NoisyCard } from '@/root/src/components/cards/noisy-card'
import {
  ArrowRightIcon,
  GithubIcon,
  MailForwardIcon,
  TwitterXIcon
} from '@/components/ui/icons'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import BadgeAnimated from '@/components/ui/badge-animated'
import Image from 'next/image'
import Link from 'next/link'

export default function SocialCard() {
  return (
    <NoisyCard className='flex flex-col justify-center items-center gap-6'>
      <div className='flex justify-center rounded-full from-zinc-200 to-zinc-400 dark:from-zinc-500/80 dark:to-zinc-800/80 bg-gradient-to-b w-max p-1'>
        <Image
          src='/logo.jpg'
          alt='Jose Ignacio - Logo'
          width={92}
          height={92}
          className='rounded-full w-[5.75rem] h-[5.75rem] md:w-28 md:h-28 no-drag'
        />
      </div>
      <BadgeAnimated className='select-none'>Trabajando</BadgeAnimated>
      <div className='flex flex-col gap-3'>
        <div className='flex justify-between gap-3'>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant='outline' asChild>
                <Link
                  href='https://github.com/JJozef'
                  rel='noopener noreferrer nofollow'
                  target='_blank'
                  aria-label='Github'
                >
                  <GithubIcon />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent className='py-0' sideOffset={10}>
              <p>Github</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant='outline' asChild>
                <Link
                  href='https://twitter.com/Jozefzin'
                  rel='noopener noreferrer nofollow'
                  target='_blank'
                  aria-label='Twitter'
                >
                  <TwitterXIcon />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent className='py-0' sideOffset={10}>
              <p>X <em>(Twitter)</em></p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant='outline'
                onClick={() => window.open('mailto:jozef@joseignacio.dev')}
                aria-label='Email'
              >
                <MailForwardIcon />
              </Button>
            </TooltipTrigger>
            <TooltipContent className='py-0' sideOffset={10}>
              <p>Contactame</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Button asChild>
          <Link className='group' href='/about'>
            Mas sobre mi
            <ArrowRightIcon className='ml-1 transition duration-100 group-hover:translate-x-1 sm:group-hover:translate-x-2' />
          </Link>
        </Button>
      </div>
    </NoisyCard>
  )
}
