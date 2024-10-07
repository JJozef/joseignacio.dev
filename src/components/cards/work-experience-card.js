import { WORK_EXPERIENCE } from '@/const/data'
import { NoisyCard } from '@/components/cards/noisy-card'
import WorkExperienceSection from '@/components/sections/work-experience-section'

export default function WorkExperiienceCard() {
  return (
    <NoisyCard>
      <ol className='ml-3 [&>li:last-child>.separator]:!hidden'>
        {WORK_EXPERIENCE.map((workExperience, index) => (
          <WorkExperienceSection
            key={workExperience.id}
            position={workExperience.position}
            company={workExperience.company}
            startDate={workExperience.startDate}
            endDate={workExperience.endDate}
            workType={workExperience.workType}
            responsibilities={workExperience.responsibilities}
            tecnologies={workExperience.tecnologies || []}
            isLatest={index === 0}
          />
        ))}
      </ol>
    </NoisyCard>
  )
}
