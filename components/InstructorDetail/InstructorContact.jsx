import { useState } from 'react'
import { Card, Row, Col, Form, Alert, Button } from 'react-bootstrap'
import { IoLogoInstagram, IoLogoTiktok } from 'react-icons/io5'
import { GrFacebookOption } from 'react-icons/gr'

const InstructorContact = ({
  renderContact,
  handleContactSubmit,
  messageSuccess
}) => {
  return (
    <div className="mt-5">
      <Card className="p-3">
        <Card.Header
          style={{
            backgroundColor: '#fff',
            borderBottom: 'none'
          }}>
          <Row>
            <Col sm={0}></Col>
            <Col>
              <h3>Get In Touch</h3>
            </Col>
            <Col>
              <p className="text-right" onClick={renderContact}>
                X
              </p>
            </Col>
          </Row>
        </Card.Header>
        <Row className="text-left px-3 pb-3">
          <Col md={6} className="mb-3">
            <h5>
              We are always ready to cooperate.
              <br />
              Write to us and we will contact you.
            </h5>
            <div className="mt-4">
              <p className="mb-1">
                <strong>EMAIL</strong>
              </p>
              <p>
                <a className="text-muted" href="mailto:hello@josienorman.com">
                  hello@josienorman.com
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
                  target="_blank">
                  <IoLogoInstagram />
                </a>
                <a
                  className="text-muted mx-3"
                  href="https://facebook.com/"
                  target="_blank">
                  <GrFacebookOption />
                </a>
                <a
                  className="text-muted"
                  href="https://tiktok.com/"
                  target="_blank">
                  <IoLogoTiktok />
                </a>
              </p>
            </div>
          </Col>
          <Col md={6}>
            <h3 className="visible-xs text-center">Send Josie a Message</h3>
            <Form onSubmit={handleContactSubmit}>
              <Form.Group className="mb-3" controlId="contactFormName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Mary Smith" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="contactFormEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="test@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Leave a message"
                  style={{ height: '150px' }}
                />
              </Form.Group>
              <Button block variant="outline-primary" type="submit">
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
      </Card>
    </div>
  )
}

export default InstructorContact