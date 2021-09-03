import { useState } from 'react'
import Link from 'next/link'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import styles from './SignUp.module.scss'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [loginSuccess, setLoginSuccess] = useState(null)

  const handleSignup = async (e) => {
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
      setPassword2('')
    } catch (error) {
      console.log(error)
      setLoginSuccess(false)
    }
  }
  return (
    <Container>
      <h1 className="text-center mt-5">Sign Up</h1>
      <Row>
        <Col sm={0}></Col>
        <Col md={8} lg={6}>
          <hr className="my-5" />
          <Form onSubmit={handleSignup}>
            <Form.Group className="mb-3" controlId="signupEmail">
              <Form.Label>EMAIL</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="signupPassword">
              <Form.Label>PASSWORD</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="signupPassword2">
              <Form.Label>PASSWORD CONFIRMATION</Form.Label>
              <Form.Control
                type="password"
                name="password2"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />
            </Form.Group>
            <div className="d-grid mt-5">
              <Button type="submit" variant="login">
                Sign Up
              </Button>
            </div>
          </Form>
          {loginSuccess ? (
            <Alert className="mt-3" variant="success">
              Account Created! Check your email.
            </Alert>
          ) : loginSuccess === false ? (
            <Alert className="mt-3" variant="danger">
              Something went wrong. Try again.
            </Alert>
          ) : null}
          <p className="mt-5 text-center">
            Have an Account?{' '}
            <Link className={styles.link} href="/signin">
              Sign in
            </Link>
          </p>
        </Col>
        <Col sm={0}></Col>
      </Row>
    </Container>
  )
}

export default SignUp
