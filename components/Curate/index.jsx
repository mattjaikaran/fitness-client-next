import { Container, Row, Col } from 'react-bootstrap'

const Curate = ({
  title,
  title2,
  paragraphOne,
  paragraphTwo,
}) => {
  return (
    <Container className="text-center">
      <Row className="p-5">
        <Col></Col>
        <Col md={6}>
          <h2>{title}</h2>
          <h2 className="mt-4">{title2}</h2>
          <h6 className="mt-5">{paragraphOne}</h6>
          <h6 className="mt-5">{paragraphTwo}</h6>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default Curate