import { Container, Row, Col } from 'react-bootstrap'
const Methodology = ({ title, p1, p2, p3, p4, p5 }) => {
  return (
    <Container className="text-center">
      <Row className="p-5">
        <Col></Col>
        <Col md={6}>
          <h1>{title}</h1>
          <p className="mt-5">{p1}</p>
          <p className="mt-5">{p2}</p>
          <p className="mt-5">{p3}</p>
          <p className="mt-5">{p4}</p>
          <p className="mt-5">{p5}</p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default Methodology
