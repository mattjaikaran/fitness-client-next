import { Container, Row, Col, Image } from 'react-bootstrap'

const InstructorInstagram = () => {
  return (
    <Container className="text-center p-md-5">
      <h3 className="mt-3">Instagram</h3>
      <h6 className="my-3">
        <a
          className="text-black"
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer">
          @josie.norman
        </a>
        | 93.k Followers
      </h6>
      <Row>
        <Col xs={6} md={4} className="mb-3">
          <Image
            className="img-fluid"
            src="https://via.placeholder.com/350x350.png"
            alt="instrutor instagram image 1"
          />
        </Col>
        <Col xs={6} md={4} className="mb-3">
          <Image
            className="img-fluid"
            src="https://via.placeholder.com/350x350.png"
            alt="instrutor instagram image 2"
          />
        </Col>
        <Col xs={6} md={4} className="mb-3">
          <Image
            className="img-fluid"
            src="https://via.placeholder.com/350x350.png"
            alt="instrutor instagram image 3"
          />
        </Col>
        <Col xs={6} md={4} className="mb-3">
          <Image
            className="img-fluid"
            src="https://via.placeholder.com/350x350.png"
            alt="instrutor instagram image 4"
          />
        </Col>
        <Col xs={6} md={4} className="mb-3">
          <Image
            className="img-fluid"
            src="https://via.placeholder.com/350x350.png"
            alt="instrutor instagram image 5"
          />
        </Col>
        <Col xs={6} md={4} className="mb-3">
          <Image
            className="img-fluid"
            src="https://via.placeholder.com/350x350.png"
            alt="instrutor instagram image 6"
          />
        </Col>
      </Row>
    </Container>
  )
}

export default InstructorInstagram
