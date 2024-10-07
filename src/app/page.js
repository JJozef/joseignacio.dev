import { PROJECTS_DATA } from '@/const/projects'
import ProjectCard from '@/components/cards/project-card'
import InfoMeCard from '@/components/cards/info-me-card'
import MoreInfoCard from '@/components/cards/more-info-card'
import SocialCard from '@/components/cards/social-card'

export default function Home() {
  return (
    <>
      <section className='grid grid-cols-1 md:grid-cols-[1.5fr,1fr] w-full gap-4'>
        <article className='flex flex-col gap-4'>
          <InfoMeCard />
          <MoreInfoCard />
        </article>
        <SocialCard />
      </section>
      <section className='w-full mt-4 md:mt-6 pb-6'>
        <h2 className='text-xl font-semibold sm:text-2x mb-4'>Proyectos</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 sm:gap-4 mb-4 md:grid-rows-2'>
          {PROJECTS_DATA.map((p, index) => {
            return (
              <ProjectCard
                key={index}
                title={p.title}
                icon={p.icon}
                description={p.description}
                demo={p.demo}
                repo={p.repo}
                image={p.image}
                stack={p.stack}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}
