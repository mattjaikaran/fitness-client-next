import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Curate = ({
  title,
  title2,
  paragraphOne,
  paragraphTwo,
  paragraphThree,
  paragraphFour,
}) => {
  return (
    <Container>
      <Row className="p-5">
        <Col></Col>
        <Col md={8} lg={6}>
          <h2 className="text-center">{title}</h2>
          <h2 className="mt-4 text-center">{title2}</h2>
          <h6 className="mt-5">{paragraphOne}</h6>
          <h6 className="mt-5">{paragraphTwo}</h6>
          <h6 className="my-0">{paragraphThree}</h6>
          <h6 className="my-0">{paragraphFour}</h6>
          <div className="mt-5">
            <h6>Curated classes launching January 2022</h6>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default Curate