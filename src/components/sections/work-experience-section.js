import { cn } from '@/lib/utils'
import { Briefcase } from 'lucide-react'
import { Badge } from '../ui/badge'

export default function WorkExperience({
  position,
  company,
  startDate,
  endDate,
  responsibilities,
  isLatest
}) {
  return (
    <li className='relative mb-10 ml-6'>
      <div className='separator absolute h-full w-px -left-6 top-8 bg-border' />
      <span
        className={cn(
          'absolute flex items-center justify-center w-6 h-6 ml-3 rounded-full -left-12 ring-8',
          {
            'bg-green-100 dark:bg-green-900 ring-green-200/80 dark:ring-green-900/30':
              isLatest
          },
          {
            'bg-blue-100 dark:bg-blue-900 ring-blue-200/80 dark:ring-blue-900/30':
              !isLatest
          }
        )}
      >
        <Briefcase
          className={cn(
            {
              'w-3 h-3 text-green-600 dark:text-green-400':
                isLatest
            },
            {
              'w-3 h-3 text-blue-600 dark:text-blue-400':
                !isLatest
            }
          )}
        />
      </span>
      <div className='flex flex-col gap-2 mb-2 sm:mb-1 sm:items-center sm:flex-row'>
        <h3 className='flex items-center text-lg font-semibold text-zinc-900 dark:text-white'>
          {position}
          {isLatest && <Badge className='ml-2'>Actual</Badge>}
        </h3>
        <span className='hidden sm:block'>·</span>
        <h4 className='flex items-center text-sm font-medium text-zinc-500 dark:text-zinc-400'>
          @{company.name}
          <img
            src={company.image_url}
            alt={company.name}
            className='inline-block w-6 h-6 ml-2 rounded-md'
          />
        </h4>
      </div>
      <time className='block mb-2.5 text-sm font-normal leading-none text-muted-foreground'>
        {startDate} - {endDate}
      </time>
      <ul className='mb-4 text-base font-normal'>
        {responsibilities.map((responsibility, index) => (
          <li key={index} className='mb-3 ml-6 list-disc leading-7'>
            {responsibility}
          </li>
        ))}
      </ul>
    </li>
  )
}
