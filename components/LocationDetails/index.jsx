import LocationHeader from '@/components/LocationHeader'
import RatesTabs from '@/components/RatesTabs'

const LocationDetails = ({ locationDetail }) => {
  console.log('🚀 ~ file: index.jsx ~ line 5 ~ LocationDetails ~ locationDetail', locationDetail)
  return (
    <>
      <LocationHeader {...locationDetail} />
      <RatesTabs />
    </>
  )
}

export default LocationDetails