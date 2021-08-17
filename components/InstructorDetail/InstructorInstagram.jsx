import { Container, Row, Col, Image } from 'react-bootstrap'

const InstructorInstagram = () => {
  return (
    <Container className="text-center p-md-5">
      <h3 className="mt-3">Instagram</h3>
      <h6 className="mt-3">@josie.norman | 93.k Followers</h6>
      <Row>
        <Col xs={6} md={4} className="mb-3">
          <Image
            className="img-fluid"
            src="https://via.placeholder.com/350x350.png"
          />
        </Col>
        <Col xs={6} md={4} className="mb-3">
          <Image
            className="img-fluid"
            src="https://via.placeholder.com/350x350.png"
          />
        </Col>
        <Col xs={6} md={4} className="mb-3">
          <Image
            className="img-fluid"
            src="https://via.placeholder.com/350x350.png"
          />
        </Col>
        <Col xs={6} md={4} className="mb-3">
          <Image
            className="img-fluid"
            src="https://via.placeholder.com/350x350.png"
          />
        </Col>
        <Col xs={6} md={4} className="mb-3">
          <Image
            className="img-fluid"
            src="https://via.placeholder.com/350x350.png"
          />
        </Col>
        <Col xs={6} md={4} className="mb-3">
          <Image
            className="img-fluid"
            src="https://via.placeholder.com/350x350.png"
          />
        </Col>
      </Row>
    </Container>
  )
}

export default InstructorInstagram
