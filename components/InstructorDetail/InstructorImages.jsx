import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import InstructorCarousel from './InstructorCarousel'

const InstructorImages = ({ desktopImages, mobileImages }) => {
  const renderImageGrid = () => {
    if (desktopImages.length === 4) {
      return (
        <Row>
          <Col md={6} className="mb-md-3 p-0 px-sm-2 px-md-2">
            <Image
              width={500}
              height={600}
              layout="responsive"
              src={desktopImages[0].imgUrl}
              alt="instructor image 1"
            />
          </Col>
          <Col md={6} className="mb-md-3 p-0 px-sm-2 px-md-2">
            <Image
              width={500}
              height={600}
              layout="responsive"
              src={desktopImages[1].imgUrl}
              alt="instructor image 2"
            />
          </Col>
          <Col md={6} className="mb-md-3 p-0 px-sm-2 px-md-2">
            <Image
              width={500}
              height={600}
              layout="responsive"
              src={desktopImages[2].imgUrl}
              alt="instructor image 3"
            />
          </Col>
          <Col md={6} className="mb-md-3 p-0 px-sm-2 px-md-2">
            <Image
              width={500}
              height={600}
              layout="responsive"
              src={desktopImages[3].imgUrl}
              alt="instructor image 4"
            />
          </Col>
        </Row>
      )
    }
    return (
      <Row className="justify-content-xl-center">
        <Col
          md={6}
          className="mb-md-3 px-0 px-sm-2 px-md-2 px-xl-2 text-center">
          <Image
            width={500}
            height={600}
            layout="responsive"
            src={desktopImages[0].imgUrl}
            alt="instructor image 1"
          />
        </Col>
        <Col
          md={6}
          className="mb-md-3 px-0 px-sm-2 px-md-2 px-xl-2 text-center">
          <Image
            width={500}
            height={300}
            layout="responsive"
            src={desktopImages[1].imgUrl}
            alt="instructor image 2"
          />
          <Image
            width={500}
            height={300}
            layout="responsive"
            className="mt-md-3"
            src={desktopImages[2].imgUrl}
            alt="instructor image 3"
          />
        </Col>
        <Col
          md={6}
          className="mb-md-3 px-0 px-sm-2 px-md-2 px-xl-2 text-center">
          <Image
            width={500}
            height={600}
            layout="responsive"
            src={desktopImages[3].imgUrl}
            alt="instructor image 4"
          />
        </Col>
        <Col
          md={6}
          className="mb-md-3 px-0 px-sm-2 px-md-2 px-xl-2 text-center">
          <Image
            width={500}
            height={600}
            layout="responsive"
            src={desktopImages[4].imgUrl}
            alt="instructor image 5"
          />
        </Col>
      </Row>
    )
  }
  return (
    <Container fluid="xl" className="mt-3 p-md-5">
      {renderImageGrid()}
      <InstructorCarousel mobile mobileImages={mobileImages} />
    </Container>
  )
}

export default InstructorImages
