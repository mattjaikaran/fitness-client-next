import { useState } from 'react'
import Link from 'next/link'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import {
  Row,
  Col,
  Form,
  Alert,
  Button,
  ButtonGroup,
  InputGroup
} from 'react-bootstrap'
import styles from './SignIn.module.scss'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginSuccess, setLoginSuccess] = useState(null)

  const handleSignin = async (e) => {
    e.preventDefault()
    const obj = {
      email,
      password
    }
    console.log('submit', obj)
    try {
      setLoginSuccess(true)
      setEmail('')
      setPassword('')
    } catch (error) {
      console.log(error)
      setLoginSuccess(false)
    }
  }
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
      <Form className="mt-5" onSubmit={handleSignin}>
        <Form.Group className="mb-3" controlId="signinEmail">
          <Form.Label>EMAIL</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="signinPassword">
          <Form.Label>PASSWORD</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="loginFormCheckbox">
          <Row>
            <Col>
              <Form.Check type="checkbox" label="Remember Me" />
            </Col>
            <Col className="text-right">
              <Link href="/forgot-password" className={styles.link}>
                Forgot Password?
              </Link>
            </Col>
          </Row>
        </Form.Group>
        <Button block variant="login" type="submit">
          Login
        </Button>
      </Form>
      {loginSuccess ? (
        <Alert className="mt-3" variant="success">
          Login Success. Redirecting to Dashboard...
        </Alert>
      ) : loginSuccess === false ? (
        <Alert className="mt-3" variant="danger">
          Something went wrong. Try again.
        </Alert>
      ) : null}
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
