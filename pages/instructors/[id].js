import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import InstructorDetail from '@/components/InstructorDetail'

const InstructorPage = () => {
  const router = useRouter()
  console.log(router)
  return (
    <Layout>
      <InstructorDetail />
    </Layout>
  )
}

export default InstructorPage
