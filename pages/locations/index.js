import { Container } from 'react-bootstrap'
import Layout from '@/components/Layout'
import PageHero from '@/components/PageHero'
import StudioLocations from '@/components/StudioLocations'

const LocationsPage = () => {
  return (
    <Layout>
      <PageHero
        title="Studio Locations"
        subtitle={`“a collection of themed and equipped workout | community spaces - “BOX”`}
      />
      <Container>
        <StudioLocations />
      </Container>
    </Layout>
  )
}

export default LocationsPage