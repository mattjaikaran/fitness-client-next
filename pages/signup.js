import { Container, Row, Col } from 'react-bootstrap'
import Layout from '@/components/Layout'
import SignUp from '@/components/SignUp'

const SignupPage = () => {
  return (
    <Layout>
      <Container>
        <h1 className="text-center mt-5">Sign Up</h1>
        <hr className="my-5" />
        <Row>
          <Col sm={0}></Col>
          <Col lg={6}>
            <SignUp />
          </Col>
          <Col sm={0}></Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default SignupPage
