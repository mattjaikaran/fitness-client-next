import { Container, Card, Row, Col, Form, Alert, Button } from 'react-bootstrap'
import { IoLogoInstagram, IoLogoTiktok } from 'react-icons/io5'
import { GrFacebookOption } from 'react-icons/gr'

const InstructorContact = ({
  name,
  email,
  message,
  setName,
  setEmail,
  setMessage,
  contact,
  renderContact,
  messageSuccess,
  instructorFirstName,
  handleMessageInstructor,
}) => {
  return (
    <Container fluid className="mt-5">
      <Card className="p-3">
        <Card.Header
          style={{
            backgroundColor: '#fff',
            borderBottom: 'none'
          }}>
          <Row>
            <Col xs={2} sm={5}></Col>
            <Col xs={8} sm={5}>
              <h3 className="mb-3 mb-sm-5">Get In Touch</h3>
            </Col>
            <Col xs={2}>
              <p className="text-end" onClick={renderContact}>
                X
              </p>
            </Col>
          </Row>
        </Card.Header>
        <Row className="text-start px-3 pb-3">
          <Col md={6} className="mb-3">
            <h5>
              We are always ready to cooperate.
              <br className="hidden-xs" /> Write to us and we will contact you.
            </h5>
            <div className="mt-4">
              <p className="mb-1">
                <strong>EMAIL</strong>
              </p>
              <p>
                <a className="text-muted" href={`mailto:${contact?.email}`}>
                  {contact?.email}
                </a>
              </p>
              <p className="mb-1">
                <strong>PHONE</strong>
              </p>
              <p>
                <a className="text-muted" href={`tel:${contact?.phone}`}>
                  {contact?.phone}
                </a>
              </p>
              <p className="mb-1">
                <strong>LOCATION</strong>
              </p>
              <p>
                <span className="text-muted">New York, NY</span>
              </p>
              <p className="mb-1">
                <strong>SOCIAL</strong>
              </p>
              <p>
                <a
                  className="text-muted"
                  href={`https://instagram.com/${contact?.instagram}`}
                  target="_blank"
                  rel="noreferrer">
                  <IoLogoInstagram />
                </a>
                <a
                  className="text-muted mx-3"
                  href={`https://facebook.com/${contact?.facebook}`}
                  target="_blank"
                  rel="noreferrer">
                  <GrFacebookOption />
                </a>
                <a
                  className="text-muted"
                  href={`https://tiktok.com/${contact?.tiktok}`}
                  target="_blank"
                  rel="noreferrer">
                  <IoLogoTiktok />
                </a>
              </p>
            </div>
          </Col>
          <Col md={6}>
            <hr className="visible-xs" />
            <h3 className="visible-xs my-5 text-center">
              Send {instructorFirstName} a Message
            </h3>
            <Form onSubmit={handleMessageInstructor}>
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
      </Card>
    </Container>
  )
}

export default InstructorContact