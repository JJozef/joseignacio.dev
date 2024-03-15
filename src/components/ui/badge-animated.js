import { cn } from '@/lib/utils'

export default function BadgeAnimated({ children, isLink, className }) {
  return (
    <div className='flex items-center md:hover:scale-105 transition-transform '>
      <span className='relative inline-flex overflow-hidden rounded-full p-[1px]'>
        <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#facc15_0%,#000_50%,#facc15_100%)]' />
        <div
          className={cn(
            'inline-flex h-full w-full cursor-default items-center justify-center rounded-full bg-background px-3 py-1 text-xs font-medium darktext-gray-50 backdrop-blur-3xl',
            isLink && 'cursor-pointer',
            className
          )}
        >
          {children}
        </div>
      </span>
    </div>
  )
}
