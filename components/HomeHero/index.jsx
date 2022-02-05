import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import styles from './HomeHero.module.scss'

const FilterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }
  return (
    <Form className="mt-3 pt-5 orpheus" onSubmit={handleSubmit}>
      <Row className="mb-5">
        <Col md={4} className="mb-3">
          <Form.Group className="mb-3 d-inline" controlId="formBasicEmail">
            <Form.Select
              // className="bg-dark"
              aria-label="Floating label select example">
              <option>Where?</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={4} className="mb-3">
          <Form.Group className="mb-3 d-inline" controlId="formBasicPassword">
            <Form.Select
              // className="bg-dark"
              aria-label="Floating label select example">
              <option>When?</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={4} className="mb-3">
          <Form.Group className="mb-3 d-inline" controlId="formBasicCheckbox">
            <Form.Select
              // className="bg-dark"
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
    <div>
      <Container fluid className={styles.hero}>
        <Container className={`${styles.heroContent} text-center`}>
          <Row>
            <Col sm={0}></Col>
            <Col sm={8} lg={6}>
              <h1 className={styles.title}>SSTUDIOSS</h1>
              <hr className="hr-custom mt-5" />
            </Col>
            <Col sm={0}></Col>
          </Row>
        </Container>
      </Container>

      {/* for Phase 2 */}
      {/* <Container>
        <h5 className="pt-5 text-center">Find a Class</h5>
        <FilterForm className={styles.filterForm} />
      </Container> */}
    </div>
  )
}

export default HomeHero