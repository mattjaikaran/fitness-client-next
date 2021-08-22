import { Container, Form, Col, Button } from 'react-bootstrap'
import styles from './HomeHero.module.scss'

const FilterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }
  return (
    <Form className="pt-5" onSubmit={handleSubmit}>
      <Form.Row>
        <Col>
          <Form.Control as="select">
            <option value="where">Where?</option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Control as="select">
            <option value="style">Style</option>
          </Form.Control>
        </Col>
        <Col>
          <Form.Control as="select">
            <option value="when">When?</option>
          </Form.Control>
        </Col>
      </Form.Row>
      <Button className="mt-5" variant="outline-secondary" type="submit">
        Find a Class
      </Button>
    </Form>
  )
}

const HomeHero = () => {
  return (
    <div
      className={styles.hero}
      style={{
        backgroundImage:
          'url(https://via.placeholder.com/1200x450.png?text=Studios)'
      }}>
      <Container className={`${styles.heroContent} text-center`}>
        <h1 className={styles.title}>Studios</h1>
        <FilterForm className={styles.filterForm} />
      </Container>
    </div>
  )
}

export default HomeHero