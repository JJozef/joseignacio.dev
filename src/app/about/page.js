import { NoisyCard } from '@/root/src/components/cards/noisy-card'
import { siteConfig } from '@/root/config/site'
import WorkExperiienceCard from '@/components/cards/work-experience-card'
import Image from 'next/image'

export const metadata = {
  title: 'Sobre mí',
  description:
    'Desarrollador Frontend con conocimientos en Backend, con +1 año de experiencia en el desarrollo de aplicaciones web. Conocimientos en React, Next.js y Vue.js.',
  openGraph: {
    siteName: `${siteConfig.name} | Sobre mí`,
    description:
      'Desarrollador Frontend con conocimientos en Backend, con +1 año de experiencia en el desarrollo de aplicaciones web. Conocimientos en React, Next.js y Vue.js.',
    images: [
      {
        url: siteConfig.ogImage
      }
    ]
  }
}

export default function AboutPage() {
  return (
    <div className='w-full'>
      <h2 className='text-xl font-semibold sm:text-2xl mb-4'>
        Perfil profesional
      </h2>
      <NoisyCard>
        <div className=' grid w-full gap-4 grid-cols-1 md:grid-cols-[2.5fr,1fr] items-center place-items-center'>
          <div className='flex flex-col gap-3'>
            <h3 className='text-2xl font-semibold text-center md:text-left mb-1'>
              Quién soy
            </h3>
            <p className='text-center text-pretty md:text-left animated-gray-gradient'>
              Desarrollador <b className='font-semibold'>Frontend</b> con
              conocimientos en <b className='font-semibold'>Backend</b>, con
              <span className='font-semibold text-green-600 dark:text-green-400'> +1 año </span>
              de experiencia en el desarrollo de aplicaciones web.
            </p>
            <p className='text-center text-pretty md:text-left animated-gray-gradient'>
              Conocimientos en <strong>Next.js</strong> y{' '}
              <strong>Vue.js</strong>.
            </p>
          </div>
          <div className='flex justify-center rounded-full from-zinc-200 to-zinc-400 dark:from-zinc-500/80 dark:to-zinc-800/80 bg-gradient-to-b w-max p-1'>
            <Image
              src='/logo.jpg'
              alt='Jose Ignacio - Logo'
              width={92}
              height={92}
              className='rounded-full w-[5.75rem] h-[5.75rem] md:w-28 md:h-28 no-drag'
            />
          </div>
        </div>
      </NoisyCard>

      <div className='flex flex-col w-full mt-6'>
        <h2 className='text-xl font-semibold sm:text-2xl mb-4'>
          Experiencia laboral
        </h2>
        <WorkExperiienceCard />
      </div>
    </div>
  )
}
