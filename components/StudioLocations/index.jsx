import { Row, Col } from 'react-bootstrap'
import Location from './Location'
import { studioLocations } from '@/copy/studioLocations'

const StudioLocations = ({ homePage }) => {
  const renderStudioDetails = () => {
    return studioLocations.map((studio) => {
      const { id, name, address, description, btnText, btnLink, text } = studio
      return (
        <Col key={id} md={4}>
          <Location
            name={name}
            address={address}
            description={description}
            btnText={btnText}
            btnLink={btnLink}
            text={text}
          />
        </Col>
      )
    })
  }
  return (
    <div className="text-center">
      {homePage && <h2>Studios</h2>}
      <Row>{renderStudioDetails()}</Row>
    </div>
  )
}

export default StudioLocations