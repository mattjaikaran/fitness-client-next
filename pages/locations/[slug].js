import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import LocationDetails from '@/components/LocationDetails'
import CustomSpinner from '@/components/CustomSpinner'
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
      ) : <CustomSpinner />}
    </Layout>
  )
}

export default LocationPage
