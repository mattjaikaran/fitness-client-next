import { useState } from 'react'
import { Container, Card, Row, Col, Form, Button } from 'react-bootstrap'
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle'

const InstructorBookAClass = () => {
  const [classTitle, setClassTitle] = useState('')
  const [value, onChange] = useState(new Date())
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState('')
  const [phone, setPhone] = useState('')
  const [classDescription, setClassDescription] = useState('')
  const handleBookClass = (e) => {
    e.preventDefault()
    console.log('submit')
    const classBookingDetails = {
      classTitle,
      value,
      email,
      location,
      phone,
      classDescription,
      status: 'pending'
    }
    console.log(classBookingDetails)
  }
  return (
    <Container>
      <h1 className="mt-5 text-center">Book a Class</h1>
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
        <Form.Group className="mb-3" controlId="bookClassLocation">
          <Form.Label>EMAIL</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="bookClassEmail">
          <Form.Label>LOCATION</Form.Label>
          <Form.Select
            aria-label="Location Select"
            value={location}
            onChange={(e) => setLocation(e.target.value)}>
            <option value="tribeca">Tribeca</option>
            <option value="flatiron">Flatiron</option>
          </Form.Select>
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
            onChange={e => setClassDescription(e.target.value)}
          />
        </Form.Group>
        <Button size="lg" variant="outline-primary hidden-xs" type="submit">
          Submit
        </Button>
        <div className="mt-3 d-grid">
          <Button size="lg" variant="outline-primary visible-xs" type="submit">
            Submit
          </Button>
        </div>
      </Form>

      <Card></Card>
    </Container>
  )
}

export default InstructorBookAClass
