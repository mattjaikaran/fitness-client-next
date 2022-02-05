import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle'

const InstructorBookAClass = () => {
  // steps for multistep form with confirmation
  const [step, setStep] = useState(1)
  // class form data
  const [classTitle, setClassTitle] = useState('')
  const [value, onChange] = useState()
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState('Tribeca')
  const [phone, setPhone] = useState('')
  const [capacity, setCapacity] = useState('')
  const [price, setPrice] = useState('')
  const [classDescription, setClassDescription] = useState('')
  const [showDetails, setShowDetails] = useState(false)

  // for step 2 - booking the class + details
  const handleBookClass = (e) => {
    e.preventDefault()
    console.log('submit')
    const classBookingDetails = {
      classTitle,
      value,
      email,
      location,
      phone,
      capacity,
      price,
      classDescription,
      status: 'pending'
    }
    console.log(classBookingDetails)
    setShowDetails(true)
  }

  // for step 2 - confirmation
  const handleConfirm = (e) => {
    const classBookingDetails = {
      classTitle,
      value,
      email,
      location,
      phone,
      capacity,
      price,
      classDescription,
      status: 'booked'
    }
  }
  return (
    <Container>
      <Row>
        <Col sm={0}></Col>
        <Col md={8} lg={6}>
          <h3 className="mt-5 text-center">Book a Class</h3>
          <Form onSubmit={handleBookClass} className="orpheus">
            <Form.Group className="mb-3" controlId="bookClassTitle">
              <Form.Label>CLASS NAME</Form.Label>
              <Form.Control
                type="text"
                placeholder="Class Name"
                value={classTitle}
                onChange={(e) => setClassTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="bookClassLocation">
              <Form.Label>LOCATION</Form.Label>
              <Form.Select
                aria-label="Location Select"
                value={location}
                onChange={(e) => setLocation(e.target.value)}>
                <option value="Tribeca">Tribeca</option>
                <option value="Flatiron">Flatiron</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="bookClassEmail">
              <Form.Label>CLASS TIME</Form.Label>
              <div>
                <DateTimePicker
                  className="form-control"
                  onChange={onChange}
                  value={value}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="bookClassCapacity">
              <Form.Label>CAPACITY</Form.Label>
              <Form.Control
                type="text"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="bookClassPrice">
              <Form.Label>PRICE</Form.Label>
              <Form.Control
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="bookClassEmail">
              <Form.Label>EMAIL</Form.Label>
              <Form.Control
                type="email"
                placeholder="text@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="bookClassPhone">
              <Form.Label>PHONE</Form.Label>
              <Form.Control
                type="number"
                placeholder="917-555-0198"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="bookClassDescription">
              <Form.Label>CLASS DESCRIPTION</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                value={classDescription}
                onChange={(e) => setClassDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="bookClassDescription">
              <Form.Label>EQUIPMENT</Form.Label>
              <Form.Check type="switch" id="custom-switch" label="Equipment" />
            </Form.Group>
            <Button size="lg" variant="outline-primary hidden-xs" type="submit">
              Submit
            </Button>
            <div className="mt-3 d-grid">
              <Button
                size="lg"
                variant="outline-primary visible-xs"
                type="submit">
                Submit
              </Button>
            </div>
          </Form>

          {showDetails && (
            <Card className="orpheus mt-5  p-5">
              <Card.Body>
                <Card.Title>Confirm Class Details</Card.Title>
                <p className="mt-3">
                  <strong>Instructor</strong> - <span>Dwayne</span>
                </p>
                <p className="mt-3">
                  <strong>Class Title</strong> - {classTitle}
                </p>
                <p className="mt-3">
                  <strong>Class Time</strong> - {value?.toLocaleString()}
                </p>
                <p className="mt-3">
                  <strong>Capacity</strong> - {capacity}
                </p>
                <p className="mt-3">
                  <strong>Location</strong> - {location}
                </p>
                <p className="mt-3">
                  <strong>Phone Number</strong> - {phone}
                </p>
                <p className="mt-3">
                  <strong>Class Description</strong> - {classDescription}
                </p>
                <p className="mt-3">
                  <strong>Price</strong> - {price}
                </p>
                <Button size="lg" variant="outline-primary">
                  Confirm
                </Button>
              </Card.Body>
            </Card>
          )}
        </Col>
        <Col sm={0}></Col>
      </Row>
    </Container>
  )
}

export default InstructorBookAClass
