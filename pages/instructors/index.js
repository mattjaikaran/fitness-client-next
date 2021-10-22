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

export async function getStaticProps({ params, preview = false }) {
  const instructor = await getClient(preview).fetch(query)

  return {
    props: {
      instructorData: instructor,
      preview
    },
    revalidate: 10
  }
}

export default InstructorsPage
