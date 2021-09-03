import { Container } from 'react-bootstrap'
import Layout from '@/components/Layout'
import PageHero from '@/components/PageHero'
import StudioLocations from '@/components/StudioLocations'

const LocationsPage = () => {
  return (
    <Layout>
      <PageHero
        title="Studios"
        img={
          'https://images.unsplash.com/photo-1567598508481-65985588e295?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80'
        }
      />
      <Container>
        <StudioLocations />
      </Container>
    </Layout>
  )
}

export default LocationsPage