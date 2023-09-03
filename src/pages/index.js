import { UserIcon } from '@/components/icons/icons'
import Nav from '@/components/Nav'
import Layout from '@/components/Layout'
import AboutMe from '@/components/pages/AboutMe'

export default function HomeIndex() {
  return (
    <Layout>
      <Nav title='Sobre mi' icon={<UserIcon className='w-6 h-6' />} />
      <AboutMe />
    </Layout>
  )
}
