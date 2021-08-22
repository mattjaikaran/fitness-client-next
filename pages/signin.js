import { Container, Row, Col } from 'react-bootstrap'
import Layout from '@/components/Layout'
import SignIn from '@/components/SignIn'

const SigninPage = () => {
  return (
    <Layout>
      <Container>
        <h1 className="text-center mt-5">Sign In</h1>
        <hr className="my-5" />
        <Row>
          <Col sm={0}></Col>
          <Col lg={6}>
            <SignIn />
          </Col>
          <Col sm={0}></Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default SigninPage
