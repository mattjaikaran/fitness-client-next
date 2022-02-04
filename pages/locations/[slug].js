import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Container, Spinner } from 'react-bootstrap'
import MainLayout from '@/layouts/MainLayout'
import LocationDetails from '@/components/LocationDetails'
import { getLocationDetails } from '@/hooks/getDetails'

const LocationPage = () => {
  const router = useRouter()
  const [details, setDetails] = useState({})
  const renderDetails = async () => {
    try {
      const response = await getLocationDetails(router.query.slug)
      setDetails(response)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => renderDetails(), [])
  return (
    <MainLayout>
      {details ? (
        <LocationDetails locationDetail={details} />
      ) : (
        <Container className="text-center p-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Container>
      )}
    </MainLayout>
  )
}

export default LocationPage
