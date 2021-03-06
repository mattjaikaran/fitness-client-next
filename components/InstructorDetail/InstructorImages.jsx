import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InstructorCarousel from './InstructorCarousel'

const InstructorImages = ({ desktopPhotos, mobilePhotos }) => {
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
    if (desktopPhotos.length === 6) {
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
          <Col md={6} className="mb-md-3 p-0 px-sm-2 px-md-2">
            <Image
              width={500}
              height={600}
              layout="responsive"
              src={desktopPhotos[4].imgUrl}
              alt="instructor image 5"
            />
          </Col>
          <Col md={6} className="mb-md-3 p-0 px-sm-2 px-md-2">
            <Image
              width={500}
              height={600}
              layout="responsive"
              src={desktopPhotos[5].imgUrl}
              alt="instructor image 6"
            />
          </Col>
        </Row>
      )
    }
    // 5 and 7 have different layouts than 4/6
    if (desktopPhotos.length === 5) {
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
    if (desktopPhotos.length === 7) {
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
          <Col
            md={6}
            className="mb-md-3 px-0 px-sm-2 px-md-2 px-xl-2 text-center">
            <Image
              width={500}
              height={600}
              layout="responsive"
              src={desktopPhotos[5].imgUrl}
              alt="instructor image 6"
            />
          </Col>
          <Col
            md={6}
            className="mb-md-3 px-0 px-sm-2 px-md-2 px-xl-2 text-center">
            <Image
              width={500}
              height={600}
              layout="responsive"
              src={desktopPhotos[6].imgUrl}
              alt="instructor image 7"
            />
          </Col>
        </Row>
      )
    }
  }
  
  return (
    <Container fluid="xl" className="mt-3 p-md-5">
      {desktopPhotos && renderImageGrid()}
      <InstructorCarousel mobile mobileImages={mobilePhotos} />
    </Container>
  )
}

export default InstructorImages
