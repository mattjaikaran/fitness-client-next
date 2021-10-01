import LocationHeader from '@/components/LocationHeader'
import RatesTabs from '@/components/RatesTabs'

const LocationDetails = ({ locationDetail }) => {
  return (
    <>
      <LocationHeader {...locationDetail} />
      <RatesTabs />
    </>
  )
}

export default LocationDetails