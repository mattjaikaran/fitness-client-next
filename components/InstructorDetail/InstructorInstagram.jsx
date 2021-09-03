import { Container, Row, Col, Image } from 'react-bootstrap'
import InstructorCarousel from './InstructorCarousel'

const InstructorInstagram = ({ imagesArray }) => {
  const renderImageGrid = () => {
    return imagesArray.map(({ id, imgUrl}) => {
      return (
        <Col key={id} xs={6} md={4} className="mb-3">
          <Image
            className="img-fluid"
            src={imgUrl}
            alt={`Instructor Instagram Image ${id}`}
          />
        </Col>
      )
    })
  }
  return (
    <Container fluid="xs" className="text-center px-0 p-md-5 mt-md-3 my-5">
      <h3>Instagram</h3>
      <h6 className="mt-3 mb-5">
        <a
          className="text-black"
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer">
          @josie.norman
        </a>{' '}
        | 93.k Followers
      </h6>
      <Row className="hidden-xs">
        {renderImageGrid()}
      </Row>
      <InstructorCarousel mobile imagesArray={imagesArray} />
    </Container>
  )
}

export default InstructorInstagram
