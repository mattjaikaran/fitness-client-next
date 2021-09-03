import { Container, Row, Col, Image } from 'react-bootstrap'
import { instructorsList } from '@/copy/instructors'

const InstructorImages = () => {
  return (
    <Container fluid="lg" className="mt-3 p-md-5">
      <Row>
        <Col md={6} className="mb-3 p-0 px-lg-3">
          <Image
            fluid
            src={instructorsList[0].photos[0].imgUrl}
            alt="instrutor image 2"
          />
        </Col>
        <Col md={6} className="mb-3 p-0 px-md-3">
          <Image
            fluid
            src={instructorsList[0].photos[1].imgUrl}
            className="mb-3"
            alt="instrutor image 3"
          />
          <Image
            fluid
            src={
              instructorsList[0].photos[2].imgUrl ||
              'https://via.placeholder.com/650x200.png'
            }
            alt="instrutor image 4"
          />
        </Col>
        <Col md={6} className="mb-3 p-0 px-md-3">
          <Image
            fluid
            src={instructorsList[0].photos[3].imgUrl}
            alt="instrutor image 5"
          />
        </Col>
        <Col md={6} className="mb-3 p-0 px-md-3">
          <Image
            fluid
            src={
              instructorsList[0].photos[4].imgUrl ||
              'https://via.placeholder.com/600x400.png'
            }
            alt="instrutor image 6"
          />
        </Col>
      </Row>
    </Container>
  )
}

export default InstructorImages
