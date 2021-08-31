import Link from 'next/link'
import { Form, Button } from 'react-bootstrap'
import styles from './SignUp.module.scss'

const SignUp = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword2">
          <Form.Label>Password Confirmation</Form.Label>
          <Form.Control type="password" placeholder="Password Confirmation" />
        </Form.Group>
        <Button block variant="login" type="submit">
          Sign Up
        </Button>
      </Form>
      <p className="mt-5 text-center">
        Have an cccount?{' '}
        <Link className={styles.link} href="/signin">
          Sign in
        </Link>
      </p>
    </>
  )
}

export default SignUp
