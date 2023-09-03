import { MoreIcon } from '@/components/icons/icons'
import Nav from '@/components/Nav'
import Layout from '@/components/Layout'
import MasContacto from '@/components/pages/MasContacto'

function HomeMore() {
  return (
    <Layout>
      <Nav title='Mas - Contacto' icon={<MoreIcon className='w-6 h-6' />} />
      <MasContacto />
    </Layout>
  )
}

export default HomeMore
