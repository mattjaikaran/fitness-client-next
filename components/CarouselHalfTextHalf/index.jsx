import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
          <div>
            <Image
              width={950}
              height={970}
              layout="responsive"
              src={images[0]}
              alt="First slide"
            />
          </div>
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