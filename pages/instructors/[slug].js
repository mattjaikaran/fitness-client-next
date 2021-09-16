import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getAllInstructorIds, getInstructorData } from '@/hooks/instructors'
import Layout from '@/components/Layout'
import { Spinner } from 'react-bootstrap'
import InstructorDetail from '@/components/InstructorDetail'

const InstructorPage = () => {
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

// export async function getStaticPaths({ params }) {
//   const paths = await getAllInstructorIds()
//   console.log(params);
//   return {
//     paths,
//     fallback: 'blocking'
//   }
// }

// export async function getStaticProps({ params }) {
//   const instructorData = await getInstructorData(parseFloat(params.id))
//   return {
//     props: {
//       instructorData
//     }
//   }
// }

export default InstructorPage
