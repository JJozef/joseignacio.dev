import { CheveronRightIcon } from '@/components/ui/icons'
import { NoisyCard } from '@/root/src/components/cards/noisy-card'
import Image from 'next/image'

export default function CardMoreInfo() {
  return (
    <NoisyCard className='grow flex flex-col justify-between gap-2'>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-1'>
          <CheveronRightIcon className='w-4 h-4 min-w-4' />
          <p className='text-pretty text-sm'>
            Si puedes imaginarlo, puedes programarlo.
          </p>
        </div>
        <div className='flex items-center gap-1'>
          <CheveronRightIcon className='w-4 h-4 min-w-4' />
          <p className='text-pretty text-sm'>
            <span className='text-yellow-400 font-bold inline-block'>
              +1&nbsp;
            </span>
            año de experiencia en desarrollo Frontend, ademas de conocimientos
            en Backend.
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-pretty text-base font-bold'>Tecnologias</h2>
        <div className='flex items-center gap-2'>
          <Image
            src='/tech/javascript.svg'
            alt='JavaScript'
            width={40}
            height={40}
            className='w-10 h-10 hover:rotate-3 transition-transform no-drag'
          />
          <Image
            src='/tech/nextjs.svg'
            alt='Next.js'
            width={40}
            height={40}
            className='w-10 h-10 hover:rotate-3 transition-transform no-drag'
          />
          <Image
            src='/tech/astro.svg'
            alt='Astro'
            width={40}
            height={40}
            className='w-10 h-10 hover:rotate-3 transition-transform no-drag'
          />
          <Image
            src='/tech/tailwindcss.svg'
            alt='TailwindCSS'
            width={40}
            height={40}
            className='w-10 h-10 hover:rotate-3 transition-transform no-drag'
          />
        </div>
      </div>
    </NoisyCard>
  )
}
