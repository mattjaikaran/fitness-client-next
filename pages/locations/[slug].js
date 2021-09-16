import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Spinner } from 'react-bootstrap'
import Layout from '@/components/Layout'
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
    <Layout>
      {details ? (
        <LocationDetails locationDetail={details} />
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </Layout>
  )
}

export default LocationPage
