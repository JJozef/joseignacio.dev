import { NoisyCard } from '@/root/src/components/cards/noisy-card'

export default function InfoMeCard() {
  return (
    <NoisyCard>
      <h1 className='flex justify-center gap-2 text-2xl font-bold tracking-wide md:text-3xl md:justify-start text-balance'>
        Jose Ignacio ~&nbsp;
        <span className='text-zinc-500 inline-block'>Jozef</span>
      </h1>
      <p className='flex flex-col justify-center text-pretty'>
        <span className='text-lg font-bold tracking-wide text-center md:text-xl md:text-left'>
          <span className='text-yellow-400'>Frontend Developer</span>
        </span>
        <span className='text-center text-muted-foreground md:text-left'>
          23y/o ~ Chile.
        </span>
      </p>
    </NoisyCard>
  )
}
