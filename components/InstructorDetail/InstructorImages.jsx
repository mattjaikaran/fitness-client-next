import { Container, Row, Col, Image } from 'react-bootstrap'
import { instructorsList } from '@/copy/instructors'

const InstructorImages = ({ id }) => {
  return (
    <Container className="mt-3 p-md-5">
      <Row>
        {/* <Col xs={12} className="mb-3">
          <Image 
            src="https://via.placeholder.com/1200x450.png" 
            className="img-fluid"
            alt="instrutor image 1" />
        </Col> */}
        <Col md={6} className="mb-3">
          <Image
            src={
              instructorsList[id - 1].photos[0].imgUrl ||
              'https://via.placeholder.com/600x400.png'
            }
            className="img-fluid"
            alt="instrutor image 2"
          />
        </Col>
        <Col md={6} className="mb-3">
          <Image
            src={
              instructorsList[id - 1].photos[1].imgUrl ||
              'https://via.placeholder.com/650x200.png'
            }
            className="img-fluid mb-3"
            alt="instrutor image 3"
          />
          <Image
            src={
              instructorsList[id - 1].photos[2].imgUrl ||
              'https://via.placeholder.com/650x200.png'
            }
            className="img-fluid"
            alt="instrutor image 4"
          />
        </Col>
        <Col md={6} className="mb-3">
          <Image
            src={
              instructorsList[id - 1].photos[3].imgUrl ||
              'https://via.placeholder.com/600x400.png'
            }
            className="img-fluid"
            alt="instrutor image 5"
          />
        </Col>
        <Col md={6} className="mb-3">
          <Image
            src={
              instructorsList[id - 1].photos[4].imgUrl ||
              'https://via.placeholder.com/600x400.png'
            }
            className="img-fluid"
            alt="instrutor image 6"
          />
        </Col>
      </Row>
    </Container>
  )
}

export default InstructorImages
