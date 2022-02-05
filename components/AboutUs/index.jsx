import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { about } from '@/copy/about'

const AboutUs = () => {
  return (
    <Container className="orpheus">
      <Row>
        <Col sm={0}></Col>
        <Col md={6} lg={8}>
          <h1 className="my-5 text-center">About Us</h1>
          <p className="mt-4">{about.p1}</p>
          <p className="mt-4">
            {about.p2}
            <br />
            {about.p3}
          </p>
          <p className="mt-4">{about.p4}</p>
        </Col>
        <Col sm={0}></Col>
      </Row>
    </Container>
  )
}

export default AboutUs