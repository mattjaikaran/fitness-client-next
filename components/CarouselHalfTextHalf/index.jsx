import { useState } from 'react'
import { Row, Col, Image, Carousel } from 'react-bootstrap'

const CarouselHalfTextHalf = ({ textCopy }) => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  return (
    <Row>
      <Col>
        <Carousel 
          fade 
          controls={false}
          activeIndex={index} 
          onSelect={handleSelect}>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="https://via.placeholder.com/350"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="https://via.placeholder.com/350"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="https://via.placeholder.com/350"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col>
        <h3>{textCopy}</h3>
      </Col>
    </Row>
  )
}

export default CarouselHalfTextHalf