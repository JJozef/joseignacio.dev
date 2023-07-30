import { ProjectIcon } from '@/components/icons/icons'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Projects from '@/components/pages/Projects'

function HomeProjects() {
  return (
    <Layout>
      <Header title='Proyectos' icon={<ProjectIcon className='w-6 h-6' />} />
      <Projects />
    </Layout>
  )
}

export default HomeProjects
