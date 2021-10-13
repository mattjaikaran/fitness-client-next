import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { getInstructorData } from '@/hooks/instructors'
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
  const renderDetails = async () => {
    try {
      const response = await getInstructorData(router.query.slug)
      setDetails(response)
    } catch (error) {
      console.log(error)
    }
    console.log('details', details);
  }
  useEffect(() => !instructorData && renderDetails(), [])

  return (
    <Layout>
      {details ? (
        <InstructorDetail instructorDetail={details} />
      ) : (
        <>
          <CustomSpinner />
          {router.push('/instructors')}
        </>
      )}
    </Layout>
  )
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const response = await axios.get(`${url}/api/instructors/${req.slug}`)
  const data = response.data
  return {
    props: { data }
  }
}


export default InstructorPage
