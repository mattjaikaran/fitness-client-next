import { Container, Row, Col, Image } from 'react-bootstrap'

const InstructorImages = () => {
  return (
    <Container className="mt-3 p-md-5">
      <Row>
        <Col xs={12} className="mb-3">
          <Image src="https://via.placeholder.com/1200x450.png" className="img-fluid" />
        </Col>
        <Col md={6} className="mb-3">
          <Image src="https://via.placeholder.com/600x400.png" className="img-fluid" />
        </Col>
        <Col md={6} className="mb-3">
          <Image src="https://via.placeholder.com/650x200.png" className="img-fluid mb-3" />
          <Image src="https://via.placeholder.com/650x200.png" className="img-fluid" />
        </Col>
        <Col md={6} className="mb-3">
          <Image src="https://via.placeholder.com/600x400.png" className="img-fluid" />
        </Col>
        <Col md={6} className="mb-3">
          <Image src="https://via.placeholder.com/600x400.png" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  )
}

export default InstructorImages
