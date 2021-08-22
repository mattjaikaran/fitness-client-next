import { useRouter } from 'next/router'
import { Container, Carousel, Tabs, Tab, Image, Form, Button } from 'react-bootstrap'
import Box from '../BoxStyles/Box'
import { boxStyles } from '@/copy/boxStyles'


const FilterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }
  return (
    <Form className="mt-5" onSubmit={handleSubmit}>
      <Form.Control as="select">
        <option value="where">Where?</option>
      </Form.Control>
      <Form.Control as="select">
        <option value="style">Style</option>
      </Form.Control>
      <Form.Control as="select">
        <option value="when">When?</option>
      </Form.Control>
      <Button variant="outline-secondary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

const BoxStylesDetails = ({ id }) => {
  return (
    <Container>
      <FilterForm />
      <Image
        src="https://via.placeholder.com/1200x400"
        className="img-fluid my-5"
      />
      <Tabs defaultActiveKey="gallery" id="box-details-tabs">
        <Tab eventKey="gallery" title="Gallery">
          <Carousel fade controls={false}>
            <Carousel.Item>
              <img
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
              <img
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
              <img
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
