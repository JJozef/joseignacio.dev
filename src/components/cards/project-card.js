import { Button } from '@/components/ui/button'
import { GithubIcon, WWWIcon } from '@/components/ui/icons'
import {
  NoisyCard,
  NoisyCardBGImg,
  NoisyCardBGImgBody
} from '@/components/cards/noisy-card'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({
  title,
  icon,
  description,
  demo,
  repo,
  image,
  stack
}) {
  return (
    <NoisyCard className='min-h-[630px] sm:min-h-[600px] row-span-2 col-span-2 sm:col-span-1 overflow-hidden hover:ring-2 hover:ring-offset-2 hover:ring-offset-primary-foreground hover:ring-primary/5 hover:scale-[1.01] transition-all duration-200'>
      <NoisyCardBGImg url={image} />
      <NoisyCardBGImgBody>
        <div className='size-full flex flex-col justify-between gap-2'>
          <h1 className='flex font-semibold gap-2 items-center text-xl'>
            {icon}
            {title}
          </h1>

          <div className='flex flex-col gap-2 justify-between grow'>
            <div className='flex flex-col gap-1'>
              <span className='font-normal flex rounded-sm text-muted-foreground text-sm'>
                Descipción
              </span>
              <p className='text-sm text-pretty self-start w-full'>
                {description}
              </p>
            </div>

            <div className='flex flex-col gap-1'>
              <span className='font-normal flex rounded-sm text-muted-foreground text-sm'>
                Stack
              </span>

              <div className='flex flex-wrap gap-2'>
                {stack.map((s, index) => {
                  return (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <Button
                          className='size-8'
                          variant='outline'
                          size='icon'
                          asChild
                        >
                          <Image
                            src={s.icon}
                            alt={s.name}
                            width={24}
                            height={24}
                            className='size-full rounded-md no-drag'
                          />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className='py-0' sideOffset={10}>
                        <p>{s.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  )
                })}
              </div>
            </div>
          </div>

          <div className='w-full h-[350px] min-h-60'>
            <img
              src={image}
              alt={title}
              width={300}
              height={150}
              className='w-full h-full object-cover rounded-lg no-drag'
            />
          </div>

          <div className='flex flex-col justify-between items-center w-full gap-10 pb-1.5'>
            <div className='flex sm:flex-col w-full gap-6 sm:gap-2'>
              {repo && (
                <Button
                  className='max-sm:w-full flex justify-center items-center gap-2'
                  variant='outline'
                  asChild
                >
                  <Link href={repo} rel='noopener noreferrer' target='_blank'>
                    <GithubIcon className='w-5 h-5 min-w-5' />
                    Repositorio
                  </Link>
                </Button>
              )}
              {demo && (
                <Button
                  className='max-sm:w-full flex justify-center items-center gap-2'
                  variant='outline'
                  asChild
                >
                  <Link href={demo} rel='noopener noreferrer' target='_blank'>
                    <WWWIcon className='w-5 h-5 min-w-5' />
                    Demo
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </NoisyCardBGImgBody>
    </NoisyCard>
  )
}
