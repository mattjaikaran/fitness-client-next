import { Container } from 'react-bootstrap'
import Layout from '@/components/Layout'
import PageHero from '@/components/PageHero'
import StudioLocations from '@/components/StudioLocations'

const LocationsPage = () => {
  return (
    <Layout>
      <PageHero
        title="Studios"
        img={"https://via.placeholder.com/1200x450.png?text=Studios"}
      />
      <Container>
        <StudioLocations />
      </Container>
    </Layout>
  )
}

export default LocationsPage