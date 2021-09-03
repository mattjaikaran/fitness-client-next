import { Container, Carousel, Image } from 'react-bootstrap'

const InstructorCarousel = ({ imagesArray, mobile }) => {
  const renderCarouselImages = () => {
    return imagesArray?.map(({ id, imgUrl }) => {
      return (
        <Carousel.Item key={id}>
          <Image
            className="d-block w-100"
            src={imgUrl}
            alt={`Carousel slide ${id}`}
          />
        </Carousel.Item>
      )
    })
  }
  return (
    <Container fluid className={`px-0 mt-3 ${mobile && 'visible-xs'}`}>
      <Carousel interval={null} controls={false}>
        {renderCarouselImages()}
      </Carousel>
    </Container>
  )
}

export default InstructorCarousel