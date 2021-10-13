import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'
import Instructors from '@/components/Instructors'
import axios from 'axios'
import { instructorsList } from '@/copy/instructors'

const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://sstudioss.com'
const InstructorsPage = ({ data }) => {
  const [details, setDetails] = useState(data || instructorsList)
  const renderDetails = async () => {
    try {
      const response = await axios.get(`${url}/api/instructors`)
      console.log('response.data', response.data)
      setDetails(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => !data && renderDetails(), [])
  return (
    <Layout>
      <Instructors data={details} />
    </Layout>
  )
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const response = await axios.get(`${url}/api/instructors`)
  const data = response.data
  return {
    props: { slug: data }
  }
}

export default InstructorsPage
