import { Container, Row, Col } from 'react-bootstrap'
const Methodology = ({ title, p1, p2, p3, p4, p5, p6 }) => {
  return (
    <Container className="orpheus">
      <Row className="p-5">
        <Col></Col>
        <Col md={6}>
          <h1 className="text-center">{title}</h1>
          <p className="mt-5">{p1}</p>
          <p className="mt-5">{p2}</p>
          <p className="mt-5">{p3}</p>
          <p className="mt-5">{p4}</p>
          <p className="mt-5">{p5}</p>
          <p className="mt-5">{p6}</p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default Methodology
