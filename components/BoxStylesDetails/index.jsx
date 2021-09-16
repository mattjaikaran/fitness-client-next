import { useState} from 'react'
import { useRouter } from 'next/router'
import { Container, Carousel, Row, Col, Tabs, Tab, Image, Card, Form, Button } from 'react-bootstrap'
import {
  tribecaRootedSchedule,
  tribecaNuclearSchedule,
  flatironNaturalSchedule
} from '@/copy/studioLocations'
import Box from '@/components/Box'
import RateTable from '@/components/RatesTabs/RateTable'
import { boxStyles } from '@/copy/boxStyles'

// can make reusable for HomeHero component
const FilterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }
  return (
    <Form className="pt-5" onSubmit={handleSubmit}>
      <Row>
        <Col md={3} className="mb-3">
          <Form.Select aria-label="Floating label select example">
            <option>What?</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col md={3} className="mb-3">
          <Form.Select aria-label="Floating label select example">
            <option>Where?</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col md={3} className="mb-5">
          <Form.Select aria-label="Floating label select example">
            <option>When?</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col sm={12} md={3}>
          <div className="d-grid">
            <Button variant="outline-secondary" type="submit">
              Find a Class
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  )
}

const BookingForm = () => {
  const [classTitle, setClassTitle] = useState('')
  const [classDescription, setClassDescription] = useState('')
  const handleBookClass = (e) => {
    const bookingURL =
      'https://example.acuityscheduling.com/schedule.php?firstName=First&lastName=Last&phone=Phone&email=email@example.com'
    e.preventDefault()
    console.log('submit')
  }
  return (
    <Container className="mt-5">
      <Card>
        <Row>
          <Col sm={6} className="mb-3 mb-md-0 p-0">
            <Image
              fluid
              className="d-block w-100"
              src="https://via.placeholder.com/800x700"
              alt="First slide"
            />
          </Col>
          <Col sm={6} className="pt-3 px-3 px-md-5">
            <Form onSubmit={handleBookClass}>
              <h3>Boxing: Mitt Work</h3>
              <Form.Group className="mb-3" controlId="contactName">
                <Form.Label>NAME</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={classTitle}
                  onChange={(e) => setClassTitle(e.target.value)}
                />
              </Form.Group>
              <div className="d-grid">
                <Button type="submit" variant="outline-primary">
                  Register
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

const BoxStylesDetails = ({ id }) => {
  const router = useRouter()
  const routerId = parseFloat(router.query.id) 
  const [bookClassVisible, setBookClassVisible] = useState(false)
  const renderBookClassForm = () => setBookClassVisible(!bookClassVisible)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [messageSuccess, setMessageSuccess] = useState(null)
  
  return (
    <Container fluid="xl">
      <Container>
        <FilterForm />
        <Row className="text-center mt-5">
          <Col sm={0}></Col>
          <Col sm={6} md={4} className="px-1">
            {routerId === id && (
              <Box
                name={boxStyles[routerId - 1].name}
                description={boxStyles[routerId - 1].description}
                btnText={boxStyles[routerId - 1].btnText}
                onClick={renderBookClassForm}
              />
            )}
          </Col>
          <Col sm={0}></Col>
        </Row>
        {bookClassVisible && <BookingForm />}
      </Container>
      <Image
        fluid
        src="https://images.unsplash.com/photo-1535743686920-55e4145369b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80"
        className="my-5"
        alt="Box featured image"
      />
      <Tabs defaultActiveKey="gallery" id="box-details-tabs" className="px-0">
        <Tab eventKey="gallery" title="Gallery">
          <Carousel controls={false} interval={null}>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1599447421376-611783057464?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1609218316109-9f284664dd49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1551656941-dc4f2593028b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Tab>
        <Tab eventKey="video" title="Video">
          <Image
            fluid
            src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2550&q=80"
          />
        </Tab>
        <Tab eventKey="floorPlan" title="Floor Plan">
          <Image
            fluid
            src="https://images.unsplash.com/photo-1552196527-bffef41ef674?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2126&q=80"
          />
        </Tab>
        <Tab eventKey="rates" title="Rates">
          <RateTable box={tribecaRootedSchedule} />
        </Tab>
      </Tabs>
    </Container>
  )
}

export default BoxStylesDetails
