import { Container } from 'react-bootstrap'
import MainLayout from '@/layouts/MainLayout'
import PageHero from '@/components/PageHero'
import StudioLocations from '@/components/StudioLocations'

const LocationsPage = () => {
  return (
    <MainLayout>
      <PageHero title="Studio Locations" />
      <Container>
        <StudioLocations />
      </Container>
    </MainLayout>
  )
}

export default LocationsPage