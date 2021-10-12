import Image from 'next/image'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import styles from './CarouselHalfTextHalf.module.scss'

const CarouselHalfTextHalf = ({
  carouselText,
  carouselTextTwo,
  carouselTextThree,
  images
}) => {
  return (
    <Container fluid="xl">
      <Row style={{ border: '1px solid black' }}>
        <Col className="px-0" lg={6}>
          {images.length < 2 ? (
            <div>
              <Image
                width={950}
                height={970}
                layout="responsive"
                src={images[0]}
                alt="First slide"
              />
            </div>
          ) : (
            <Carousel interval={3000} controls={false}>
              {images.map((image) => (
                <Carousel.Item key={image}>
                  <Image
                    width={950}
                    height={970}
                    layout="responsive"
                    src={image}
                    alt="carousel slide"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </Col>
        <Col className={`mt-sm-3 ${styles.textCol}`} lg={6}>
          <div className={styles.textCopy}>
            <h3>{carouselText}</h3>
            {carouselTextTwo && (
              <h3 className="my-3 my-md-5">{carouselTextTwo}</h3>
            )}
            {carouselTextThree && <h3>{carouselTextThree}</h3>}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default CarouselHalfTextHalf