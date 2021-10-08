import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'
import Instructors from '@/components/Instructors'
import { useRouter } from 'next/router'
import { groq } from 'next-sanity'
import { usePreviewSubscription } from '../../lib/sanity'
import { getClient } from '../../lib/sanity.server'


const query = groq`
  *[_type == "instructor"] | order(firstName desc)
`

const InstructorsPage = ({ instructorData }) => {
  const router = useRouter()
  const { data: instructors } = usePreviewSubscription(query, {
    initialData: instructorData,
    // enabled: preview || router.query.preview !== undefined
  })
  console.log('data:instructors ', instructors)
  return (
    <Layout>
      <Instructors instructorsList={instructors} />
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
