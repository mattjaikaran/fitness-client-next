import { useState } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [messageSuccess, setMessageSuccess] = useState(null)
  const handleContact = (e) => {
    e.preventDefault()
    const obj = {
      name, email, message
    }
    console.log('submit', obj)
    try {
      setMessageSuccess(true)
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      console.log(error)
      setMessageSuccess(false)
    }
  }
  return (
    <Container>
      <h1 className="text-center my-5">Contact Us</h1>
      <Row className="mt-5">
        <Col md={6}>
          <p>
            <strong>GENERAL INQUIRY</strong>
            <br />
            <a className="text-muted" href="mailto:contact@sstudioss.com">
              contact@sstudioss.com
            </a>
          </p>
          <p>
            <strong>CORPORATE CONNECTIONS</strong>
            <br />
            <a className="text-muted" href="mailto:corporate@sstudioss.com">
              corporate@sstudioss.com
            </a>
          </p>
          <p>
            <strong>PHONE</strong>
            <br />
            <a className="text-muted" href="tel:19174769040">
              (917) 476 9040
            </a>
          </p>
          <p>
            <strong>ADDRESS</strong>
            <br />
            <span className="text-muted">
              Manhattan Flagship facility Spring 2022
            </span>
          </p>
        </Col>
        <Col md={6}>
          <Form onSubmit={handleContact}>
            <Form.Group className="mb-3" controlId="contactName">
              <Form.Label>NAME</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactEmail">
              <Form.Label>EMAIL</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactMessage">
              <Form.Label>MESSAGE</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                type="text"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <div className="d-grid">
              <Button type="submit" variant="outline-primary">
                Submit
              </Button>
            </div>
          </Form>
          {messageSuccess ? (
            <Alert className="mt-3" variant="success">
              Message successfully sent!
            </Alert>
          ) : messageSuccess === false ? (
            <Alert className="mt-3" variant="danger">
              Something went wrong. Try again.
            </Alert>
          ) : null}
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
