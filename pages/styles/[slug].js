import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import BoxStylesDetails from '@/components/BoxStylesDetails'

const BoxStyleDetail = () => {
  const router = useRouter()
  const { slug } = router.query
  return (
    <Layout>
      <BoxStylesDetails slug={slug} />
    </Layout>
  )
}


export default BoxStyleDetail