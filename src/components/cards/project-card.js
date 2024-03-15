import { Button } from '@/components/ui/button'
import { GithubIcon, WWWIcon } from '@/components/ui/icons'
import {
  NoisyCard,
  NoisyCardBGImg,
  NoisyCardBGImgBody
} from '@/root/src/components/cards/noisy-card'
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
    <NoisyCard className='h-[630px] sm:h-[500px] row-span-2 col-span-2 sm:col-span-1 overflow-hidden'>
      <NoisyCardBGImg url={image} />
      <NoisyCardBGImgBody>
        <div className='size-full flex flex-col justify-between gap-2'>
          <h1 className='flex font-semibold gap-2 items-center text-xl'>
            {icon}
            {title}
          </h1>

          <div className='flex flex-col gap-2 justify-between grow'>
            <div className='flex flex-col gap-1'>
              <span className='font-normal flex rounded-sm text-gray-400 text-sm'>
                Descipción
              </span>
              <p className='text-sm text-pretty self-start w-full'>
                {description}
              </p>
            </div>

            <div className='flex flex-col gap-1'>
              <span className='font-normal flex rounded-sm text-gray-400 text-sm'>
                Stack
              </span>

              <div className='flex flex-wrap gap-2'>
                {stack.map((s, index) => {
                  return (
                    <Button variant='outline' size='icon' asChild key={index}>
                      <div title={s.name}>
                        <Image
                          src={s.icon}
                          alt={s.name}
                          width={24}
                          height={24}
                          className='w-6 h-6 rounded-md no-drag'
                        />
                      </div>
                    </Button>
                  )
                })}
              </div>
            </div>
          </div>

          <div className='w-full h-[350px] sm:h-44'>
            <img
              src={image}
              alt={title}
              width={300}
              height={150}
              className='w-full h-full object-cover rounded-lg no-drag'
            />
          </div>

          <div className='flex flex-col justify-between items-center w-full gap-10'>
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
