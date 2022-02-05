import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'

const InstructorCarousel = ({ imagesArray, mobile }) => {
  const renderCarouselImages = () => {
    return imagesArray?.map(({ id, imgUrl }) => {
      return (
        <Carousel.Item key={id}>
          <Image
            width={350}
            height={350}
            layout="responsive"
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
