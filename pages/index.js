import { Button } from 'react-bootstrap'
import Layout from '@/components/Layout'
import styles from '../styles/Home.module.scss'

const Home = () => {
  return (
    <Layout>
      <h1>Home Page</h1>
      <Button variant="outline-primary">Explore Instructors</Button>
      <Button variant="outline-secondary">Explore Classes</Button>
    </Layout>
  )
}


export default Home