import { useRouter } from 'next/router'
import MainLayout from '@/layouts/MainLayout'
import BoxStylesDetails from '@/components/BoxStylesDetails'

const BoxStyleDetail = () => {
  const router = useRouter()
  const { slug } = router.query
  return (
    <MainLayout>
      <BoxStylesDetails slug={slug} />
    </MainLayout>
  )
}


export default BoxStyleDetail