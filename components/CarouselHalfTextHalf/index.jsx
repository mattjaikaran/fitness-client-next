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
    <Container fluid>
      <Row>
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
            <Carousel interval={null} controls={false}>
              <Carousel.Item>
                <Image
                  width={950}
                  height={970}
                  layout="responsive"
                  src={images[0]}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  width={950}
                  height={970}
                  layout="responsive"
                  src={images[1]}
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          )}
        </Col>
        <Col className={`mt-sm-3 ${styles.textCol}`} lg={6}>
          <div className={styles.textCopy}>
            <h3>{carouselText}</h3>
            {carouselTextTwo && <h3 className="my-5">{carouselTextTwo}</h3>}
            {carouselTextThree && <h3>{carouselTextThree}</h3>}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default CarouselHalfTextHalf