import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { residency } from '@/copy/residency'

const Residency = () => {
  return (
    <Container className="orpheus">
      <Row>
        <Col sm={0}></Col>
        <Col md={8} lg={6} xl={8}>
          <h1 className="my-5 text-center">Residency</h1>
          <p>{residency.p1}</p>
          <p>{residency.p2}</p>
          <p>{residency.p3}</p>
          <p>
            <a href={`mailto: ${residency.p4}`}>{residency.p4}</a>
          </p>
        </Col>
        <Col sm={0}></Col>
      </Row>
    </Container>
  )
}

export default Residency
