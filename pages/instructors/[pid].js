import { useRouter } from 'next/router'
import { getAllInstructorIds, getInstructorData } from '@/hooks/instructors'
import Layout from '@/components/Layout'
import InstructorDetail from '@/components/InstructorDetail'

const InstructorPage = ({ instructorData }) => {
  const router = useRouter()
  // console.log(instructorData)
  return (
    <Layout>
      <InstructorDetail />
    </Layout>
  )
}

// export async function getStaticPaths() {
//   const paths = await getAllInstructorIds()
//   return {
//     paths,
//     fallback: false
//   }
// }

export async function getServerSideProps({ params }) {
  const instructorData = await getInstructorData(params.id)
  return {
    props: {
      instructorData
    }
  }
}

export default InstructorPage
