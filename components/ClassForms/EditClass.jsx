import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle'

const EditClass = ({ fitnessClass }) => {
  const {
    id,
    title,
    description,
    date,
    time,
    instructor,
    location,
    room,
    capacity,
    price,
    studentsBooked,
    equipmentProvided,
    equipmentRequired
  } = fitnessClass

  // steps for multistep form with confirmation
  const [step, setStep] = useState(1)
  // class form data
  const [classTitle, setClassTitle] = useState(title)
  const [value, onChange] = useState()
  const [email, setEmail] = useState('')
  const [classLocation, setClassLocation] = useState(location)
  const [phone, setPhone] = useState('')
  const [classCapacity, setClassCapacity] = useState(capacity)
  const [classPrice, setClassPrice] = useState(price)
  const [classDescription, setClassDescription] = useState(description)
  const [showDetails, setShowDetails] = useState(false)

  // for step 2 - booking the class + details
  const handleBookClass = (e) => {
    e.preventDefault()
    console.log('submit')
    const classBookingDetails = {
      classTitle,
      value,
      email,
      classLocation,
      phone,
      classCapacity,
      classPrice,
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
      classLocation,
      phone,
      classCapacity,
      classPrice,
      classDescription,
      status: 'booked'
    }
  }
  return (
    <Container>
      <Row>
        <Col sm={0}></Col>
        <Col md={8} lg={6}>
          <h3 className="mt-5 text-center">Edit Class</h3>
          <Form onSubmit={handleBookClass} className="orpheus">
            <Form.Group className="mb-3" controlId="editClassTitle">
              <Form.Label>CLASS NAME</Form.Label>
              <Form.Control
                type="text"
                placeholder="Class Name"
                value={classTitle}
                onChange={(e) => setClassTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editClassLocation">
              <Form.Label>LOCATION</Form.Label>
              <Form.Select
                aria-label="Location Select"
                value={classLocation}
                onChange={(e) => setClassLocation(e.target.value)}>
                <option value="Tribeca">Tribeca</option>
                <option value="Flatiron">Flatiron</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="editClassEmail">
              <Form.Label>CLASS TIME</Form.Label>
              <div>
                <DateTimePicker
                  className="form-control"
                  onChange={onChange}
                  value={value}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="editClassCapacity">
              <Form.Label>CAPACITY</Form.Label>
              <Form.Control
                type="text"
                value={classCapacity}
                onChange={(e) => setClassCapacity(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editClassPrice">
              <Form.Label>PRICE</Form.Label>
              <Form.Control
                type="text"
                value={classPrice}
                onChange={(e) => setClassPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editClassEmail">
              <Form.Label>EMAIL</Form.Label>
              <Form.Control
                type="email"
                placeholder="text@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editClassPhone">
              <Form.Label>PHONE</Form.Label>
              <Form.Control
                type="number"
                placeholder="917-555-0198"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editClassDescription">
              <Form.Label>CLASS DESCRIPTION</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                value={classDescription}
                onChange={(e) => setClassDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editClassDescription">
              <Form.Label>EQUIPMENT</Form.Label>
              <Form.Check type="switch" id="custom-switch" label="Equipment" />
            </Form.Group>
            <Button size="lg" variant="outline-primary hidden-xs" type="submit">
              Submit
            </Button>
            <Button
              size="lg"
              variant="outline-secondary hidden-xs"
              type="submit">
              Cancel
            </Button>
            <div className="mt-3 d-grid visible-xs">
              <Button size="lg" variant="outline-primary" type="submit">
                Submit
              </Button>
              <Button
                size="lg"
                variant="outline-secondary"
                className="mt-2"
                type="submit">
                Cancel
              </Button>
            </div>
          </Form>

          {showDetails && (
            <Card className="orpheus mt-5">
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
                  <strong>Capacity</strong> - {classCapacity}
                </p>
                <p className="mt-3">
                  <strong>Price</strong> - {classPrice}
                </p>
                <p className="mt-3">
                  <strong>Location</strong> - {classLocation}
                </p>
                <p className="mt-3">
                  <strong>Phone Number</strong> - {phone}
                </p>
                <p className="mt-3">
                  <strong>Class Description</strong> - {classDescription}
                </p>
                <Button
                  size="lg"
                  variant="outline-primary hidden-xs"
                  type="submit">
                  Confirm
                </Button>
                <Button
                  size="lg"
                  variant="outline-secondary hidden-xs"
                  type="submit">
                  Cancel
                </Button>
                <div className="mt-3 d-grid">
                  <Button
                    size="lg"
                    variant="outline-primary visible-xs"
                    type="submit">
                    Confirm
                  </Button>
                  <Button
                    size="lg"
                    variant="outline-secondary visible-xs"
                    className="mt-3"
                    type="submit">
                    Cancel
                  </Button>
                </div>
              </Card.Body>
            </Card>
          )}
        </Col>
        <Col sm={0}></Col>
      </Row>
    </Container>
  )
}

export default EditClass
