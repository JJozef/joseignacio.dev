import { MoreIcon } from '@/components/icons/icons'
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import MasContacto from '@/components/pages/MasContacto'

function HomeMore() {
  return (
    <Layout>
      <Header title='Mas - Contacto' icon={<MoreIcon className='w-6 h-6' />} />
      <MasContacto />
    </Layout>
  )
}

export default HomeMore
