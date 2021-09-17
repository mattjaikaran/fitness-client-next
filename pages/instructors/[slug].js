import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getAllInstructorIds, getInstructorData } from '@/hooks/instructors'
import Layout from '@/components/Layout'
import { Spinner } from 'react-bootstrap'
import InstructorDetail from '@/components/InstructorDetail'

const InstructorPage = ({ instructorData }) => {
  console.log('🚀 ~ file: [slug].js ~ line 9 ~ InstructorPage ~ instructorData', instructorData)
  const router = useRouter()
  const [details, setDetails] = useState({})
  const renderDetails = async () => {
    try {
      const response = await getInstructorData(router.query.slug)
      setDetails(response)
      
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => renderDetails(), [])
  return (
    <Layout>
      {details ? (
        <InstructorDetail instructorDetail={details} />
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </Layout>
  )
}

// export async function getStaticPaths(context) {
//   const paths = await getAllInstructorIds()
//   if (!paths) {
//     return {
//       notFound: true
//     }
//   }
//   return {
//     paths: paths,
//     fallback: 'blocking'
//   }
// }

// export async function getStaticProps({ params }) {
//   const instructorData = await getInstructorData(parseFloat(params.slug))
//   return {
//     props: {
//       instructorData
//     }
//   }
// }

export default InstructorPage
