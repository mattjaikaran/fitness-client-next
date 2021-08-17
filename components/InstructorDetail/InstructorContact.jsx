import { Card, Row, Col, Form, Button } from 'react-bootstrap'

const InstructorContact = ({ renderContact }) => {
  const handleContactSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }
  return (
    <div className="mt-5">
      <Card className="p-5">
        <p onClick={renderContact}>Close Btn</p>
        <div>
          <h5>Get In Touch</h5>
        </div>
        <Row className="text-left">
          <Col md={6}>
            <h5>We are always ready to cooperate.</h5>
          </Col>
          <Col md={6}>
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
              <Button block variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default InstructorContact