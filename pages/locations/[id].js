import Layout from '@/components/Layout'
import LocationHeader from '@/components/LocationHeader'
import RatesTabs from '@/components/RatesTabs'

const Location = () => {
  return (
    <Layout>
      <LocationHeader 
        name="Tribeca"
        description="An intimate space ofering a bright and comfortable environment to broadcast your brand."
        subDescription="Our energy her is soft, quiet, calming"
      />
      <RatesTabs />
    </Layout>
  )
}

export default Location
