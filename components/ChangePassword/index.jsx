import Link from 'next/link'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const ChangePassword = () => {
  return (
    <Container>
      <Row>
        <Col sm={0}></Col>
        <Col sm={8} md={6} lg={4}>
          <div className="mt-5">
            <h3 className="mt-5 text-center">Change Password</h3>
            <hr />
            <Form>
              <Form.Group
                className="mb-3"
                controlId="changePasswordNewPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="changePasswordNewPassword2">
                <Form.Label>Confirm New Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Button block variant="outline-primary" type="submit">
                Reset
              </Button>
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

export default ChangePassword
