import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import BoxStylesDetails from '@/components/BoxStylesDetails'

const BoxStyleDetail = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <Layout>
      <BoxStylesDetails id={id} />
    </Layout>
  )
}


export default BoxStyleDetail