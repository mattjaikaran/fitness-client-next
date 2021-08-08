import { Container } from 'react-bootstrap'
import Layout from '@/components/Layout'
import Instructors from '@/components/Instructors'

const InstructorsPage = () => {
  return (
    <Layout>
      <Container>
        <h1>InstructorsPage</h1>
        <Instructors />
      </Container>
    </Layout>
  )
}

export default InstructorsPage
