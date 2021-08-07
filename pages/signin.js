import { Container, Card } from 'react-bootstrap'
import Layout from '@/components/Layout'
import SignIn from '@/components/SignIn'

const SigninPage = () => {
  return (
    <Layout>
      <Container>
        <h1>Sign In</h1>
        <Card>
          <SignIn />
        </Card>
      </Container>
    </Layout>
  )
}

export default SigninPage
