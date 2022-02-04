import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import ClassSearchResults from './ClassSearchResults'

const SearchForClass = () => {
  return (
    <Container>
      <Row>
        <Col sm={0}></Col>
        <Col md={8} lg={6}>
          <h3 className="mt-5 text-center">Search Classes</h3>
          <Form>
            <Form.Group className="my-3" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control type="email" placeholder="Yoga" />
            </Form.Group>
            <Button size="lg" variant="outline-primary hidden-xs" type="submit">
              Submit
            </Button>
            <div className="d-grid">
              <Button
                size="lg"
                variant="outline-primary visible-xs"
                type="submit">
                Submit
              </Button>
            </div>
          </Form>

          <ClassSearchResults />
        </Col>
        <Col sm={0}></Col>
      </Row>
    </Container>
  )
}

export default SearchForClass