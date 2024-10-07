import { forwardRef } from 'react'
import { Card } from '@/components/ui/card'
import { cn } from '../../lib/utils'

const NoisyCard = ({ children, className, ...props }) => {
  return (
    <Card
      className={cn(
        'relative border border-border from-gray-50/80 to-gray-50/50 bg-gradient-to-b dark:from-background/90 dark:to-background p-4 shadow-md shadow-foreground/5 rounded-xl overflow-hidden',
        className
      )}
      {...props}
    >
      <div className='absolute inset-0 rounded-xl pointer-events-none opacity-70 mix-blend-soft-light'>
        <svg width='100%' height='100%'>
          <filter id='noise'>
            <feTurbulence
              type='fractalNoise'
              baseFrequency='0.80'
              numOctaves='4'
              stitchTiles='stitch'
            />
          </filter>
          <rect width='100%' height='100%' filter='url(#noise)' />
          <defs>
            <linearGradient
              id='myGradient'
              x1='128'
              y1='5.21659'
              x2='128'
              y2='476.551'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#C5C5C5' />
              <stop offset='1' stopColor='#383839' />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className='w-full h-full absolute inset-0 z-10 rounded-xl pointer-events-none opacity-70 mix-blend-soft-light'>
        <svg width='100%' height='100%' className='w-full h-full'>
          <filter id='noise'>
            <feTurbulence
              type='fractalNoise'
              baseFrequency='0.80'
              numOctaves='4'
              stitchTiles='stitch'
            />
          </filter>
          <rect width='100%' height='100%' filter='url(#noise)' />
        </svg>
      </div>
      {children}
    </Card>
  )
}

NoisyCard.displayName = 'NoisyCard'

const NoisyCardBGImg = forwardRef(({ className, url }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'relative p-[calc(1.5rem-1px)] rounded-lg bg-center bg-no-repeat bg-cover w-full blur-lg h-full',
        className
      )}
      style={{ backgroundImage: `url(${url})` }}
    />
  )
})

NoisyCardBGImg.displayName = 'NoisyCard'

const NoisyCardBGImgBody = forwardRef(({ children, className }, ref) => {
  return (
    <article
      ref={ref}
      className={cn(
        'absolute rounded-xl flex flex-col justify-center items-center inset-0 p-4 gap-2 bg-background/90 dark:bg-background/70',
        className
      )}
    >
      {children}
    </article>
  )
})

NoisyCardBGImgBody.displayName = 'NoisyCard'

export { NoisyCard, NoisyCardBGImg, NoisyCardBGImgBody }
