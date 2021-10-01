import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const StudentJoinAClass = () => {
  return (
    <Container>
      <Row>
        <Col sm={0}></Col>
        <Col md={8} lg={6}>
          <h1 className="mt-5 text-center">Join a Class</h1>
          <Form className="orpheus">
            <Form.Group className="mb-3" controlId="joinClassName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="joinClassEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Button variant="outline-primary hidden-xs" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col sm={0}></Col>
      </Row>
    </Container>
  )
}

export default StudentJoinAClass