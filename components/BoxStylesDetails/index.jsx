import { useState } from 'react'
import Image from 'next/image'
import { 
  Container, 
  Carousel, 
  Row, 
  Col, 
  Tabs, 
  Tab, 
  Card, 
  Form, 
  Button 
} from 'react-bootstrap'
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle'
import Box from '@/components/Box'
import { boxStyles } from '@/copy/boxStyles'
import BoxStylesTabs from './BoxStylesTabs'

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
            <option>Where?</option>
            <option value="Tribeca">Tribeca</option>
            <option value="Flatiron">Flatiron</option>
          </Form.Select>
        </Col>
        <Col md={3} className="mb-3">
          <Form.Select aria-label="Floating label select example">
            <option>What?</option>
            <option value="Yoga">Yoga</option>
            <option value="Spin">Spin</option>
            <option value="Kickboxing">Kickboxing</option>
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
            <Button size="lg" variant="outline-secondary" type="submit">
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
  const [value, onChange] = useState()
  const [classDescription, setClassDescription] = useState('')
  const handleBookClass = (e) => {
    const bookingURL =
      'https://example.acuityscheduling.com/schedule.php?firstName=First&lastName=Last&phone=Phone&email=email@example.com'
    e.preventDefault()
    console.log('submit')
    const classBookingDetails = {
      classTitle,
      value
    }
    console.log(classBookingDetails)
  }
  return (
    <Container className="mt-5">
      <Card>
        <Row>
          <Col sm={6} className="mb-3 mb-md-0 p-0">
            <Image
              width={1296}
              height={729}
              layout="responsive"
              src="https://images.unsplash.com/photo-1551656941-dc4f2593028b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
              alt="First slide"
            />
          </Col>
          <Col sm={6} className="pt-3 px-3 px-sm-5">
            <Form onSubmit={handleBookClass}>
              <h3 className="mt-3">Boxing: Mitt Work</h3>
              <Form.Group className="mb-3" controlId="contactName">
                <Form.Label>CLASS TITLE</Form.Label>
                <Form.Control
                  type="text"
                  name="classTitle"
                  value={classTitle}
                  onChange={(e) => setClassTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="contactDateTime">
                <Form.Label>CLASS TIME</Form.Label>
                <div>
                  <DateTimePicker className="form-control" onChange={onChange} value={value} />
                </div>
              </Form.Group>
              <div className="d-grid">
                <Button size="lg" type="submit" variant="outline-primary">
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

const BoxStylesDetails = ({ slug }) => {
  const [bookClassVisible, setBookClassVisible] = useState(false)
  const renderBookClassForm = () => setBookClassVisible(!bookClassVisible)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [messageSuccess, setMessageSuccess] = useState(null)
  
  const renderBoxes = () => {
    return boxStyles.map(box => {
      if (box.slug === slug) {
        return (
          <Col xs={12} key={box.id}>
            <Box
              name={box.name}
              slug={box.slug}
              description={box.description}
              btnText={box.btnText}
              onClick={renderBookClassForm}
            />
          </Col>
        )
      }
    })
  }
  return (
    <Container fluid="xl" className="px-0 orpheus">
      <Container>
        <FilterForm />
        <Row className="text-center mt-5">
          <Col sm={0}></Col>
          <Col sm={6} md={4} className="px-1">
            <Row>{renderBoxes()}</Row>
          </Col>
          <Col sm={0}></Col>
        </Row>
        {bookClassVisible && <BookingForm />}
      </Container>
      <div className="my-5">
        <Image
          width={1296}
          height={729}
          layout="responsive"
          src="https://images.unsplash.com/photo-1535743686920-55e4145369b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80"
          alt="Box featured image"
        />
      </div>
      <BoxStylesTabs slug={slug} />
    </Container>
  )
}

export default BoxStylesDetails
