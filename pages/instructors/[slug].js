import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getAllInstructorIds, getInstructorData } from '@/hooks/instructors'
import Layout from '@/components/Layout'
import { Container, Spinner } from 'react-bootstrap'
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
    console.log(details);
  }
  useEffect(() => renderDetails(), [])
  // const router = useRouter()
  // const [details, setDetails] = useState({})
  // const renderDetails = async () => {
  //   try {
  //     const response = await getInstructorData(router.query.slug)
  //     const response2 = await getAllInstructorIds()
  //     console.log('response', response);
  //     console.log('response2', response2);
  //     setDetails(response)
  //     console.log('details', details)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // useEffect(() => renderDetails(), [])

  return (
    <Layout>
      {details ? (
        <InstructorDetail instructorDetail={details} />
      ) : (
        <Container className="text-center p-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          {setTimeout(() => {
            router.push('/instructors')
          }, 2000)}
        </Container>
      )}
    </Layout>
  )
}

// export async function getStaticPaths() {
//   const allInstructors = await getAllInstructorIds()
//   const paths = await allInstructors?.map((instructor) => `/instructors/${instructor.params.slug}`)
//   if (!allInstructors) {
//     return {
//       notFound: true
//     }
//   }
//   return {
//     paths: paths || [],
//     fallback: true
//   }
// }

// export async function getStaticProps({ params }) {
//   const instructorData = await getInstructorData(params.slug)
//   return {
//     props: {
//       instructorData
//     }
//   }
// }

export default InstructorPage
