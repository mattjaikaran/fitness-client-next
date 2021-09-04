import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap'
import Layout from '@/components/Layout'
import LocationHeader from '@/components/LocationHeader'
import RatesTabs from '@/components/RatesTabs'

const LocationPage = () => {
  const router = useRouter()
  return (
    <Layout>
      <LocationHeader
        name={
          router.query.id === 'flatiron'
            ? 'Flatiron'
            : router.query.id === 'tribeca'
            ? 'Tribeca'
            : 'Midtown'
        }
        description="An intimate space ofering a bright and comfortable environment to broadcast your brand."
        subDescription="Our energy her is soft, quiet, calming"
      />
      <RatesTabs />
    </Layout>
  )
}

export default LocationPage
