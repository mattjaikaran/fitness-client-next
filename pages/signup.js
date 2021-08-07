import { Container, Card } from 'react-bootstrap'
import Layout from '@/components/Layout'
import SignUp from '@/components/SignUp'

const SignupPage = () => {
  return (
    <Layout>
      <Container>
        <h1>Sign Up</h1>
        <Card>
          <SignUp />
        </Card>
      </Container>
    </Layout>
  )
}

export default SignupPage
