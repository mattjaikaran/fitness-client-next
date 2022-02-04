import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const StudentJoinAClass = () => {
  const [location, setLocation] = useState('Tribeca')
  return (
    <Container>
      <Row>
        <Col sm={0}></Col>
        <Col md={8} lg={6}>
          <h3 className="mt-5 text-center">Join a Class</h3>
          <Form className="orpheus">
            <Form.Group className="mb-3" controlId="joinClassName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="joinClassEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="text@example.com" />
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
        </Col>
        <Col sm={0}></Col>
      </Row>
    </Container>
  )
}

export default StudentJoinAClass