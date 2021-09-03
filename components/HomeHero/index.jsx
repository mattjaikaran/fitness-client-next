import { Container, Form, Row, Control, Select, Col, Button } from 'react-bootstrap'
import styles from './HomeHero.module.scss'

const FilterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }
  return (
    <Form className="mt-5 pt-5" onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group className="mb-3 d-inline" controlId="formBasicEmail">
            <Form.Select
              className="bg-dark"
              aria-label="Floating label select example">
              <option>Where?</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3 d-inline" controlId="formBasicPassword">
            <Form.Select
              className="bg-dark"
              aria-label="Floating label select example">
              <option>When?</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3 d-inline" controlId="formBasicCheckbox">
            <Form.Select
              className="bg-dark"
              aria-label="Floating label select example">
              <option>What?</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
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
        <h1 className={styles.title}></h1>
        <FilterForm className={styles.filterForm} />
      </Container>
    </div>
  )
}

export default HomeHero