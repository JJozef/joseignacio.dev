import { ProjectsList } from '@/config/Projects'
import Container from '../Container'
import CardProjects from '../ui/CardProjects'

function Projects() {
  return (
    <Container className='max-w-7xl'>
      <h3 className='font-bold text-base mb-3'>Proyectos mas relevantes</h3>
      <div className='grid gap-6 lg:gap-3 max-lg:grid-cols-1 max-xl:grid-cols-2 xl:grid-cols-3'>
        {ProjectsList.map((project, index) => (
          <CardProjects
            key={index}
            title={project.title}
            resume={project.resume}
            description={project.description}
            status={project.status}
            technologies={project.technologies}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </Container>
  )
}

export default Projects
