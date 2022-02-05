import Link from 'next/link'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'


const ForgotPassword = () => {
  return (
    <Container>
      <Row>
        <Col sm={0}></Col>
        <Col sm={8} md={6} lg={4}>
          <div className="mt-5">
            <h3 className="mt-5 text-center">Password Recover</h3>
            <hr />
            <Form>
              <Form.Group className="mb-3" controlId="forgotPasswordEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="text@example.com" />
              </Form.Group>
              <div className="d-grid mt-5">
                <Button variant="outline-primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>

            <p className="mt-5 text-center">
              Want to sign in? <Link href="/signin">Login</Link>
            </p>
          </div>
        </Col>
        <Col sm={0}></Col>
      </Row>
    </Container>
  )
}

export default ForgotPassword