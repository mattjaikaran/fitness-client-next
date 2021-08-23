import { useState } from 'react'
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap'
import styles from './CarouselHalfTextHalf.module.scss'

const CarouselHalfTextHalf = ({ textCopy }) => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  return (
    <div>
      <Row>
        <Col sm={6}>
          <Carousel
            fade
            controls={false}
            activeIndex={index}
            onSelect={handleSelect}>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src="https://via.placeholder.com/450"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src="https://via.placeholder.com/450"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src="https://via.placeholder.com/450"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col className="mt-sm-3" sm={6}>
          <Container className="">
            <h3 className={styles.textCopy}>{textCopy}</h3>
          </Container>
        </Col>
      </Row>
    </div>
  )
}

export default CarouselHalfTextHalf