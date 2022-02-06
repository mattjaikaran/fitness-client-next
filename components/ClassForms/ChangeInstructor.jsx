import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const ChangeInstructor = ({ fitnessClass }) => {
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


  const [classTitle, setClassTitle] = useState(title)
  const [classLocation, setClassLocation] = useState(location)
  const [classInstructor, setClassInstructor] = useState(instructor)
  const [showDetails, setShowDetails] = useState(false)

  const handlechangeInstructor = (e) => {
    e.preventDefault()
    console.log('current instructor', instructor);
    console.log('new instructor', classInstructor);
  }

  return (
    <Container>
      <Row>
        <Col sm={0}></Col>
        <Col md={8} lg={6}>
          <h3 className="mt-5 text-center">Change Instructor</h3>
          <Form onSubmit={handlechangeInstructor} className="orpheus">
            <Form.Group className="mb-3" controlId="changeInstructorClassTitle">
              <Form.Label>CLASS NAME</Form.Label>
              <Form.Control
                type="text"
                placeholder="Class Name"
                value={classTitle}
                onChange={(e) => setClassTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="changeInstructorClassLocation">
              <Form.Label>LOCATION</Form.Label>
              <Form.Select
                aria-label="Location Select"
                value={classLocation}
                onChange={(e) => setClassLocation(e.target.value)}>
                <option value="Tribeca">Tribeca</option>
                <option value="Flatiron">Flatiron</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="changeInstructorClassInstructor">
              <Form.Label>Instructor</Form.Label>
              <Form.Control
                type="text"
                value={classInstructor}
                onChange={(e) => setClassInstructor(e.target.value)}
              />
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
            <div className="mt-3 d-grid">
              <Button
                size="lg"
                variant="outline-primary visible-xs"
                type="submit">
                Submit
              </Button>
              <Button
                size="lg"
                variant="outline-secondary visible-xs"
                className="mt-2"
                type="submit">
                Cancel
              </Button>
            </div>
          </Form>
        </Col>
        <Col sm={0}></Col>
      </Row>
    </Container>
  )
}

export default ChangeInstructor