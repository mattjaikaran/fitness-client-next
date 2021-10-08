import Link from 'next/link'
import { useRouter } from 'next/router'
import { groq } from 'next-sanity'
import { usePreviewSubscription } from '../../lib/sanity'
import { getClient } from '../../lib/sanity.server'

import Layout from '@/components/Layout'
import InstructorDetail from '@/components/InstructorDetail'
import CustomSpinner from '@/components/CustomSpinner'

/**
 * Helper function to return the correct version of the document
 * If we're in "preview mode" and have multiple documents, return the draft
 */
function filterDataToSingleItem(data, preview) {
  if (!Array.isArray(data)) return data

  return data.length > 1 && preview
    ? data.filter((item) => item._id.startsWith(`drafts.`)).slice(-1)[0]
    : data.slice(-1)[0]
}

/**
 * Makes Next.js aware of all the slugs it can expect at this route
 *
 * See how we've mapped over our found slugs to add a `/` character?
 * Idea: Add these in Sanity and enforce them with validation rules :)
 * https://www.simeongriggs.dev/nextjs-sanity-slug-patterns
 */
export async function getStaticPaths() {
  const allSlugsQuery = groq`*[defined(slug.current)][].slug.current`
  const pages = await getClient().fetch(allSlugsQuery)

  return {
    paths: pages.map((slug) => `/instructors/${slug}`),
    fallback: true,
  }
}

/**
 * Fetch the data from Sanity based on the current slug
 *
 * Important: You _could_ query for just one document, like this:
 * *[slug.current == $slug][0]
 * But that won't return a draft document!
 * And you get a better editing experience 
 * fetching draft/preview content server-side
 *
 * Also: Ignore the `preview = false` param!
 * It's set by Next.js "Preview Mode" 
 * It does not need to be set or changed here
 */
export async function getStaticProps({params, preview = false}) {
  const query = groq`*[_type == "instructor" && slug.current == $slug]`
  const queryParams = { slug: params.slug }
  const data = await getClient(preview).fetch(query, queryParams)

  // Escape hatch, if our query failed to return data
  if (!data) return { notFound: true }

  // Helper function to reduce all returned documents down to just one
  const page = filterDataToSingleItem(data, preview)

  return {
    props: {
      // Pass down the "preview mode" boolean to the client-side
      preview,
      // Pass down the initial content, and our query
      data: { page, query, queryParams }
    }
  }
}

/**
 * The `usePreviewSubscription` takes care of updating
 * the preview content on the client-side
 */

const InstructorPage = ({ data, preview }) => {
  const router = useRouter()
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    initialData: data?.page,
    enabled: preview
  })

  // Client-side uses the same query, so we may need to filter it down again
  const page = filterDataToSingleItem(previewData, preview)

  return (
    <Layout>
      {preview && <Link href="/api/exit-preview">Preview Mode Activated!</Link>}
      {data ? (
        <InstructorDetail instructorDetail={data} />
      ) : (
        <>
          <CustomSpinner />
          {router.push('/instructors')}
        </>
      )}
    </Layout>
  )
}


export default InstructorPage
