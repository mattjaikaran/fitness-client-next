import { Container, Row, Col } from 'react-bootstrap'
import Location from './Location'
import { studioLocations } from '@/copy/studioLocations'

const StudioLocations = ({ homePage }) => {
  const renderStudioDetails = () => {
    return studioLocations.map((studio) => {
      const { id, name, address, description, btnText, btnLink, text } = studio
      return (
        <Col key={id} lg={4}>
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
    <Container className="text-center">
      {homePage && <h2 className="mt-3">Studios</h2>}
      <Row className="mt-5">{renderStudioDetails()}</Row>
    </Container>
  )
}

export default StudioLocations