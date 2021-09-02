import { useState } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { IoLogoInstagram, IoLogoTiktok } from 'react-icons/io5'
import { GrFacebookOption } from 'react-icons/gr'

const CustomerService = () => {
  const [messageSuccess, setMessageSuccess] = useState(null)
  const handleContactSubmit = async (e) => {
    e.preventDefault()
    console.log('submit')
    try {
      setMessageSuccess(true)
    } catch (error) {
      console.log(error)
      setMessageSuccess(false)
    }
  }
  return (
    <Container>
      <h1 className="my-5 text-center">Customer Service</h1>
      <Row className="text-left px-3 pb-3">
        <Col md={6} className="mb-3">
          <h5>
            We are always ready to cooperate.
            <br />
            Write to us and we will contact you.
          </h5>
          <h6>Monday to Friday 10 am to 6:30 pm EST</h6>
          <div className="mt-4">
            <p className="mb-1">
              <strong>GENERAL INQUIRY</strong>
            </p>
            <p>
              <a className="text-muted" href="mailto:contact@sstudioss.com">
                contact@sstudioss.com
              </a>
            </p>
            <p className="mb-1">
              <strong>PHONE</strong>
            </p>
            <p>
              <a className="text-muted" href="tel:2122330507">
                (212) 233 0507
              </a>
            </p>
            <p className="mb-1">
              <strong>ADDRESS</strong>
            </p>
            <p>
              <span className="text-muted">
                145 W Broadway, <br />
                New York, NY 100013
              </span>
            </p>
            <p className="mb-1">
              <strong>SOCIAL</strong>
            </p>
            <p>
              <a
                className="text-muted"
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer">
                <IoLogoInstagram />
              </a>
              <a
                className="text-muted mx-3"
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer">
                <GrFacebookOption />
              </a>
              <a
                className="text-muted"
                href="https://tiktok.com/"
                target="_blank"
                rel="noreferrer">
                <IoLogoTiktok />
              </a>
            </p>
          </div>
        </Col>
        <Col md={6}>
          <hr className="visible-xs" />
          <h3 className="visible-xs text-center">Send us a Message</h3>
          <Form onSubmit={handleContactSubmit}>
            <Form.Group className="mb-3" controlId="contactFormName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Mary Smith" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactFormEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="test@example.com"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactFormMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Leave a message"
                style={{ height: '150px' }}
                required
              />
            </Form.Group>
            <Button block type="submit">
              Submit
            </Button>
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


export default CustomerService