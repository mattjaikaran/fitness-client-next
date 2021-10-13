import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { getAllInstructorIds, getInstructorData } from '@/hooks/instructors'
import Layout from '@/components/Layout'
import InstructorDetail from '@/components/InstructorDetail'
import CustomSpinner from '@/components/CustomSpinner'

const url =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://sstudioss.com'
const InstructorPage = ({ instructorData }) => {
console.log('🚀 ~ file: [slug].js ~ line 9 ~ InstructorPage ~ instructorData', instructorData)
  const router = useRouter()
  const [details, setDetails] = useState({})
  const refreshData = () => {
    router.replace(router.asPath)
  }
  const renderDetails = async () => {
    try {
      const response = await getInstructorData(router.query.slug)
      setDetails(response)
    } catch (error) {
      console.log(error)
      refreshData()
    }
    console.log('details', details);
  }
  useEffect(() => !instructorData && renderDetails(), [])

  return (
    <Layout>
      {instructorData ? (
        <InstructorDetail instructorDetail={instructorData || details} />
      ) : (
        <>
          <CustomSpinner />
          {router.push('/instructors')}
        </>
      )}
    </Layout>
  )
}

export async function getStaticPaths(ctx) {
  const instructors = await getAllInstructorIds()
  // const paths = instructors.map((instructor) => ({
  //   params: { slug: instructor.slug }
  // }))

  // if (!paths) return {}
  return {
    paths: instructors || [],
    fallback: false 
    // fallback can be  true if you want to show a fallback version of page 
    // and serve JSON for unknown articles
  }
}


export async function getStaticProps(ctx) {
  try {
    const instructorData = await getInstructorData(ctx.params.slug)
    return {
        props: { instructorData },
    };
  } catch (error) {
    return {
      props: null
    }
  }
}

// export async function getServerSideProps({ req, res }) {
//   res.setHeader(
//     'Cache-Control',
//     'public, s-maxage=10, stale-while-revalidate=59'
//   )
//   const response = await axios.get(`${url}/api/instructors/${req.slug}`)
//   const instructorData = response.data
//   return {
//     props: { instructorData }
//   }
// }


export default InstructorPage
