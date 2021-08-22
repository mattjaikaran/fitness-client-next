import Link from 'next/link'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { Row, Col, Form, Button, ButtonGroup, InputGroup } from 'react-bootstrap'
import styles from './SignIn.module.scss'

const SignIn = () => {
  return (
    <>
      <ButtonGroup className="mr-2 d-flex" aria-label="Facebook Login">
        <InputGroup.Prepend>
          <InputGroup.Text className={styles.facebookPrepend}>
            <FaFacebookF />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <Button variant="facebook">Connect With Facebook</Button>
      </ButtonGroup>
      <ButtonGroup className="mt-3 mr-2 d-flex" aria-label="Twitter Login">
        <InputGroup.Prepend>
          <InputGroup.Text className={styles.twitterPrepend}>
            <FaTwitter />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <Button variant="twitter">Connect With Twitter</Button>
      </ButtonGroup>
      <Form className="mt-3">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Row>
            <Col>
              <Form.Check type="checkbox" label="Remember Me" />
            </Col>
            <Col className="text-right">
              <Link href="#" className={styles.link}>
                Forgot Password?
              </Link>
            </Col>
          </Row>
        </Form.Group>
        <Button block variant="login" type="submit">
          Login
        </Button>
      </Form>
      <p className="mt-5 text-center">
        No account?{' '}
        <Link className={styles.link} href="/signup">
          Sign up
        </Link>
      </p>
    </>
  )
}

export default SignIn