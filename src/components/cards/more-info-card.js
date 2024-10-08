import { CheveronRightIcon } from '@/components/ui/icons'
import { NoisyCard } from '@/root/src/components/cards/noisy-card'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import Image from 'next/image'

export default function CardMoreInfo() {
  return (
    <NoisyCard className='grow flex flex-col justify-between gap-4'>
      <div className='flex flex-col gap-2'>
        <div className='flex items-start gap-1'>
          <CheveronRightIcon className='w-4 h-4 min-w-4 mt-1' />
          <p className='text-pretty text-sm'>
            <span className='text-green-600 dark:text-green-400 font-bold text-base inline-block'>
              +1
            </span>{' '}
            año de experiencia en desarrollo <strong>Frontend</strong>, ademas
            de conocimientos en <strong>Backend</strong>.
          </p>
        </div>
        <div className='flex items-center gap-1'>
          <CheveronRightIcon className='w-4 h-4 min-w-4' />
          <p className='text-pretty text-sm'>
            Conocimientos en <strong>Next.js</strong> y <strong>Vue.js</strong>.
          </p>
        </div>
        <div className='flex items-center gap-1'>
          <CheveronRightIcon className='w-4 h-4 min-w-4' />
          <p className='text-pretty text-sm'>
            Si puedes imaginarlo, puedes programarlo.
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-pretty text-base font-bold'>
          Tecnologias favoritas
        </h2>
        <div className='flex items-center gap-3'>
          <Tooltip>
            <TooltipTrigger className='size-7 p-0.5 hover:rotate-3 border border-border rounded-lg hover:bg-secondary transition-all duration-200'>
              <Image
                src='/tech/nextjs.svg'
                alt='Next.js'
                width={40}
                height={40}
                className='size-full no-drag'
              />
            </TooltipTrigger>
            <TooltipContent className='py-0' sideOffset={10}>
              <p>Next.js</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className='size-7 p-1 hover:rotate-3 border border-border rounded-lg hover:bg-secondary transition-all duration-200'>
              <Image
                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADqUlEQVR4Ae1XA7dkPRC8/+Kz7afPtu21bdu2bdv27rNt27ZubepMes7D7Ky9fU6fZIKuSqeSuTEcxkUajkPdJykvUg6HYR6mKk3HYR64ke5giWmqEhprkvMkH8NwUBUNDAJb6zfBLeCKhK4TmwSKdGc9O5Qrpjc6A3TGJbg7iKUxi0gABGQpqb+ZTgySYCaIaci+aIa4RW7FNLQ4bikBB73FxGYGcDv9AYEHBO5cAjyn13TVNpnrRB/O0nZsw1aQBoGuymWOswZ8c4g7XhvkhlcHurHk74Y4NycDXO3LA1zxykBXfDjGCz/N8McfcwLx/VQ/vDfKC28MbkTWNgEGYYD5R5MQnVEGv4RiBCYWIyipBMHJFmedbX7xxYjJLMO0/QkE5mrRdkkIToXmIae4GhXVdaiqqUdZVR3ySqqx/FQKSdjXAFP4Yj9XnAjOxZXaXt9sPNztLIZtjYY9I/GGW2E7A8OYATfMPJjIVcI1qgAXIguQWVgFsdT8SpyPKGAfM4Jxu+KYORSU1UAsMacCcw4nYvSOWMxSsXziitScfLw1xLoN9kX4lirf1IOf73cBe32yILb2XBqe7nXeOufF/q7otDwMNNM0UV9v4o/ZgXi8xzm8pLbmmd7n8fpgN3yrtMAMX5UIOeElBbBPpVls3fk0PNfnAlxGWPvReYWFAMFpE/fE4fm+F/C6OgHvjPTkONbtiNAegQGXJiBH7pNx3tYtEBKHAnLQcmEwxUlhc7xk+UpuQvsZeFYTaDhm5PYYiNVpEjQ3pZX/FwRzDLVy4wmIeHkUe62JQFxWOcQkG6YqBm2KYizGvLEEZEX8LQADNkRS+aDV1pmglVTU4qtJvnhDCdLpRhEQcAZ9TQvOSc/h3vNCa0hi2JZoipNxb1wG5Ij9rK5eHjmO53knEG++YrVysXG7YvFcX8tc+Si1+0nuZIvAOSGgCep7gKdg9dk0Hkn8NiuAwsMur6xGomyzJMRUWmFc09BPMbC81gywnwHbLwtFQ6usqRMBivF6510gWKYh4CyZjWvJAMXEvWf6YzLLZaViVvFtcs2gPkzeGfI2aPI00x02ssFJBGi3NBTtlX8/zU/+1ThXxihCnvh3fhCPG8bujMUodS90WxWOzyf6mOq6JjgJ13MOseVxqp9NBHe/5H8DV8lU0ym6huAN/z94473Q7wKFRhEyezwh+uzLq0g/Tp0mBxuskI1yGWDa/NjQeqA7CaiNq9tJjxF9CLCAa6xJzpNDjIuEJY0NJaLCJgAAAABJRU5ErkJggg=='
                alt='TailwindCSS'
                width={40}
                height={40}
                className='size-full no-drag'
              />
            </TooltipTrigger>
            <TooltipContent className='py-0' sideOffset={10}>
              <p>TyepScript</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className='size-7 p-0.5 hover:rotate-3 border border-border rounded-lg hover:bg-secondary transition-all duration-200'>
              <Image
                src='/tech/tailwindcss.svg'
                alt='TailwindCSS'
                width={40}
                height={40}
                className='size-full no-drag'
              />
            </TooltipTrigger>
            <TooltipContent className='py-0' sideOffset={10}>
              <p>TailwindCSS</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className='size-7 p-1 hover:rotate-3 border border-border rounded-lg hover:bg-secondary transition-all duration-200'>
              <Image
                src='/tech/supabase-logo-icon.svg'
                alt='TailwindCSS'
                width={40}
                height={40}
                className='size-full no-drag'
              />
            </TooltipTrigger>
            <TooltipContent className='py-0' sideOffset={10}>
              <p>Supabase</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </NoisyCard>
  )
}
