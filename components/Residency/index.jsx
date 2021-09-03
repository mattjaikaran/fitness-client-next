import { Container, Row, Col } from 'react-bootstrap'
import { residency } from '@/copy/residency'

const Residency = () => {
  return (
    <Container>
      <Row>
        <Col sm={0}></Col>
        <Col sm={6}>
          <h1 className="my-5 text-center">Residency</h1>
          <p>{residency.p1}</p>
          <p>{residency.p2}</p>
          <p>{residency.p3}</p>
          <p>
            <strong>{residency.p4}</strong>
          </p>
          <p>{residency.p5}</p>
        </Col>
        <Col sm={0}></Col>
      </Row>
    </Container>
  )
}

export default Residency