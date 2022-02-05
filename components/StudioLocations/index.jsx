import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Location from './Location'
import { studioLocations } from '@/copy/studioLocations'

const StudioLocations = ({ homePage }) => {
  const renderStudioDetails = () => {
    return studioLocations.map((studio) => {
      const { id, name, address, launchDate, description, btnText, btnLink } =
        studio
      return (
        <Col key={id} lg={4}>
          <Location
            name={name}
            address={address}
            launchDate={launchDate}
            description={description}
            btnText={btnText}
            btnLink={btnLink}
          />
        </Col>
      )
    })
  }
  return (
    <Container className="text-center">
      {homePage && <h2 className="mt-5">Studios</h2>}
      <Row className="mt-5">{renderStudioDetails()}</Row>
    </Container>
  )
}

export default StudioLocations
