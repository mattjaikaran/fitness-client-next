import { Container, Row, Col, Image } from 'react-bootstrap'
import InstructorCarousel from './InstructorCarousel'

const InstructorImages = ({ desktopImages, mobileImages }) => {
  const renderImageGrid = () => {
    if (desktopImages.length === 4) {
      return (
        <Row>
          <Col md={6} className="mb-md-3 p-0 px-sm-2">
            <Image
              fluid
              src={desktopImages[0].imgUrl}
              alt="instructor image 1"
            />
          </Col>
          <Col md={6} className="mb-md-3 p-0 px-sm-2">
            <Image
              fluid
              src={desktopImages[1].imgUrl}
              alt="instructor image 2"
            />
          </Col>
          <Col md={6} className="mb-md-3 p-0 px-sm-2">
            <Image
              fluid
              src={desktopImages[2].imgUrl}
              alt="instructor image 3"
            />
          </Col>
          <Col md={6} className="mb-md-3 p-0 px-sm-2">
            <Image
              fluid
              src={desktopImages[3].imgUrl}
              alt="instructor image 4"
            />
          </Col>
        </Row>
      )
    }
    return (
      <Row className="justify-content-xl-center">
        <Col md={6} className="mb-md-3 p-0 px-sm-2 px-xl-0 text-center">
          <Image fluid src={desktopImages[0].imgUrl} alt="instructor image 2" />
        </Col>
        <Col md={6} className="mb-md-3 p-0 px-sm-2 px-xl-0 text-center">
          <Image
            fluid
            src={desktopImages[1].imgUrl}
            className="mb-md-3"
            alt="instructor image 2"
          />
          <Image fluid src={desktopImages[2].imgUrl} alt="instructor image 3" />
        </Col>
        <Col md={6} className="mb-md-3 p-0 px-sm-2 px-xl-0 text-center">
          <Image fluid src={desktopImages[3].imgUrl} alt="instructor image 4" />
        </Col>
        <Col md={6} className="mb-md-3 p-0 px-sm-2 px-xl-0 text-center">
          <Image fluid src={desktopImages[4].imgUrl} alt="instructor image 5" />
        </Col>
      </Row>
    )
  }
  return (
    <Container fluid="xl" className="mt-3 p-md-5">
      {renderImageGrid()}
      <InstructorCarousel mobile mobileImages={mobileImages} />
    </Container>
  )
}

export default InstructorImages
