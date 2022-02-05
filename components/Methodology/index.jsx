import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Methodology = ({ title, p1, p2, p3, p4, p5 }) => {
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
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default Methodology
