import { Container, Row, Col} from 'react-bootstrap'
import { about } from '@/copy/about'

const AboutUs = () => {
  return (
    <Container className="orpheus">
      <Row>
        <Col sm={0}></Col>
        <Col md={6} lg={8}>
          <h1 className="my-5 text-center">About Us</h1>
          <p className="mt-4">{about.p1}</p>
          <p className="mt-4">{about.p2}</p>
          <p className="mt-4">{about.p3}</p>
        </Col>
        <Col sm={0}></Col>
      </Row>
    </Container>
  )
}

export default AboutUs