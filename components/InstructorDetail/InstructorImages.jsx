import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import InstructorCarousel from './InstructorCarousel'

const InstructorImages = ({ desktopPhotos, mobilePhotos }) => {
  console.log(
    '🚀 ~ file: InstructorImages.jsx ~ line 6 ~ InstructorImages ~ desktopPhotos',
    desktopPhotos
  )
  const renderImageGrid = () => {
    if (desktopPhotos.length === 4) {
      return (
        <Row>
          <Col md={6} className="mb-md-3 p-0 px-sm-2 px-md-2">
            <Image
              width={500}
              height={600}
              layout="responsive"
              src={desktopPhotos[0].imgUrl}
              alt="instructor image 1"
            />
          </Col>
          <Col md={6} className="mb-md-3 p-0 px-sm-2 px-md-2">
            <Image
              width={500}
              height={600}
              layout="responsive"
              src={desktopPhotos[1].imgUrl}
              alt="instructor image 2"
            />
          </Col>
          <Col md={6} className="mb-md-3 p-0 px-sm-2 px-md-2">
            <Image
              width={500}
              height={600}
              layout="responsive"
              src={desktopPhotos[2].imgUrl}
              alt="instructor image 3"
            />
          </Col>
          <Col md={6} className="mb-md-3 p-0 px-sm-2 px-md-2">
            <Image
              width={500}
              height={600}
              layout="responsive"
              src={desktopPhotos[3].imgUrl}
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
            src={desktopPhotos[0].imgUrl}
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
            src={desktopPhotos[1].imgUrl}
            alt="instructor image 2"
          />
          <Image
            width={500}
            height={300}
            layout="responsive"
            className="mt-md-3"
            src={desktopPhotos[2].imgUrl}
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
            src={desktopPhotos[3].imgUrl}
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
            src={desktopPhotos[4].imgUrl}
            alt="instructor image 5"
          />
        </Col>
      </Row>
    )
  }
  return (
    <Container fluid="xl" className="mt-3 p-md-5">
      {desktopPhotos && renderImageGrid()}
      <InstructorCarousel mobile mobileImages={mobilePhotos} />
    </Container>
  )
}

export default InstructorImages
