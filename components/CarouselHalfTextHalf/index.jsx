import {  Row, Col, Image, Carousel } from 'react-bootstrap'
import styles from './CarouselHalfTextHalf.module.scss'

const CarouselHalfTextHalf = ({ textCopy }) => {
  return (
    <Row>
      <Col sm={6}>
        <Carousel interval={null} controls={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/450"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/450"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col className="mt-sm-3" sm={6}>
        <h3 className={styles.textCopy}>{textCopy}</h3>
      </Col>
    </Row>
  )
}

export default CarouselHalfTextHalf