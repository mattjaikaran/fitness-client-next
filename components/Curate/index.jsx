import { Container, Row, Col } from 'react-bootstrap'
import { curate } from '@/copy/curate'

const Curate = () => {
  return (
    <Container className="text-center">
      <Row className="p-5">
        <Col></Col>
        <Col md={6}>
          <h2>{curate.title}</h2>
          <h2>{curate.title2}</h2>
          <h6 className="mt-5">{curate.paragraphOne}</h6>
          <h6 className="mt-5">{curate.paragraphTwo}</h6>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default Curate