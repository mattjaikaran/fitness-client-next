import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import ClassSearchResults from './ClassSearchResults'

const StudentJoinAClass = () => {
  const [fitnessClassName, setFitnessClassName] = useState('')
  const [location, setLocation] = useState('Tribeca')
  const [showSearchResults, setShowSearchResults] = useState(false)

  const submitSearchClass = (e) => {
    e.preventDefault()
    const searchQuery = {
      fitnessClassName, 
      location
    }
    console.log('searchQuery', searchQuery)
    setShowSearchResults(!showSearchResults)
  }
  return (
    <Container>
      <Row>
        <Col sm={0}></Col>
        <Col md={8} lg={6}>
          <h3 className="mt-5 text-center">Join a Class</h3>
          <Form className="orpheus" onSubmit={submitSearchClass}>
            <Form.Group className="mb-3" controlId="joinClassName">
              <Form.Label>Class Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Yoga"
                value={fitnessClassName}
                onChange={(e) => setFitnessClassName(e.target.value)}
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
          {showSearchResults && <ClassSearchResults />}
        </Col>
        <Col sm={0}></Col>
      </Row>
    </Container>
  )
}

export default StudentJoinAClass