import { ProjectIcon } from '@/components/icons/icons'
import Layout from '@/components/Layout'
import Nav from '@/components/Nav'
import Projects from '@/components/pages/Projects'

function HomeProjects() {
  return (
    <Layout>
      <Nav title='Proyectos' icon={<ProjectIcon className='w-6 h-6' />} />
      <Projects />
    </Layout>
  )
}

export default HomeProjects
