import { useState } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { IoLogoInstagram, IoLogoTiktok } from 'react-icons/io5'
import { AiOutlineYoutube } from 'react-icons/ai'

const CustomerService = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [messageSuccess, setMessageSuccess] = useState(null)
  const handleCustomerService = async (e) => {
    e.preventDefault()
    const obj = {
      name,
      email,
      message
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
      <h1 className="my-5 text-center">Customer Service</h1>
      <Row className="text-start px-3 pb-3">
        <Col md={6} className="mb-3">
          <div className="mt-4">
            <p className="mb-1">
              <strong>GENERAL INQUIRY</strong>
            </p>
            <p>
              <a
                className="text-muted orpheus"
                href="mailto:contact@sstudioss.com">
                contact@sstudioss.com
              </a>
            </p>
            <p className="mb-1">
              <strong>PHONE</strong>
            </p>
            <p>
              <a className="text-muted orpheus" href="tel:9174769040">
                (917) 476 9040
              </a>
            </p>
            {/* <p className="mb-1">
              <strong>ADDRESS</strong>
            </p>
            <p>
              <span className="text-muted orpheus">
                145 W Broadway, <br />
                New York, NY 100013
              </span>
            </p> */}
            {/* <p className="mb-1">
              <strong>SOCIAL</strong>
            </p>
            <p>
              <a
                className="text-muted orpheus pr-5"
                href="https://instagram.com/sstudiossnewyork"
                target="_blank"
                rel="noreferrer">
                <IoLogoInstagram />
              </a>
              <a
                className="text-muted mx-3"
                href="https://youtube.com/sstudiossnewyork"
                target="_blank"
                rel="noreferrer">
                <AiOutlineYoutube />
              </a>
              <a
                className="text-muted"
                href="https://tiktok.com/sstudiossnewyork"
                target="_blank"
                rel="noreferrer">
                <IoLogoTiktok />
              </a>
            </p> */}
          </div>
        </Col>
        <Col md={6}>
          <hr className="visible-xs" />
          <h3 className="visible-xs text-center">Send us a Message</h3>
          <Form onSubmit={handleCustomerService}>
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
              Something went wrong.{' '}
              <a href="mailto:contact@sstudioss.com">Email Us</a>
            </Alert>
          ) : null}
        </Col>
      </Row>
    </Container>
  )
}


export default CustomerService