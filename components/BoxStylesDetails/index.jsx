import { useRouter } from 'next/router'
import { Container, Carousel, Row, Col, Tabs, Tab, Image, Form, Button } from 'react-bootstrap'
import Box from '@/components/Box'
import { boxStyles } from '@/copy/boxStyles'

// can make reusable for HomeHero component
const FilterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }
  return (
    <Form className="pt-5" onSubmit={handleSubmit}>
      <Form.Row>
        <Col md={3}>
          <Form.Control as="select">
            <option value="where">Where?</option>
          </Form.Control>
        </Col>
        <Col md={3}>
          <Form.Control as="select">
            <option value="style">Style</option>
          </Form.Control>
        </Col>
        <Col md={3}>
          <Form.Control as="select">
            <option value="when">When?</option>
          </Form.Control>
        </Col>
        <Col sm={12} md={3}>
          <Button block variant="outline-secondary" type="submit">
            Find a Class
          </Button>
        </Col>
      </Form.Row>
    </Form>
  )
}

const BoxStylesDetails = ({ id }) => {
  const router = useRouter()
  const routerId = parseFloat(router.query.id) 
  return (
    <Container>
      <FilterForm />
      <Row className="text-center mt-5">
        <Col></Col>
        <Col sm={6} md={4}>
          {routerId === id && (
            <Box
              name={boxStyles[routerId - 1].name}
              description={boxStyles[routerId - 1].description}
              btnText={boxStyles[routerId - 1].btnText}
              btnLink={boxStyles[routerId - 1].btnLink}
            />
          )}
        </Col>
        <Col></Col>
      </Row>
      <Image
        src="https://via.placeholder.com/1200x400"
        className="img-fluid my-5"
        alt="Box featured image"
      />
      <Tabs defaultActiveKey="gallery" id="box-details-tabs">
        <Tab eventKey="gallery" title="Gallery">
          <Carousel controls={false}>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src="https://via.placeholder.com/600x400"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src="https://via.placeholder.com/600x400"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src="https://via.placeholder.com/600x400"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Tab>
        <Tab eventKey="video" title="Video">
          Video
        </Tab>
        <Tab eventKey="floorPlan" title="Floor Plan">
          Floor Plan
        </Tab>
        <Tab eventKey="rates" title="Rates">
          Rates
        </Tab>
      </Tabs>
    </Container>
  )
}

export default BoxStylesDetails
