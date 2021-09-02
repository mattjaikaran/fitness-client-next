import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const Contact = () => {
  const handleContact = (e) => {
    e.preventDefault()
    console.log('submit contact')
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
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactEmail">
              <Form.Label>EMAIL</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactMessage">
              <Form.Label>MESSAGE</Form.Label>
              <Form.Control as="textarea" rows={5} />
            </Form.Group>
            <Button block type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
