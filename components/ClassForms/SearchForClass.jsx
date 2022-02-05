import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ClassSearchResults from './ClassSearchResults'

const SearchForClass = () => {
  const [fitnessClassName, setFitnessClassName] = useState('')
  const [showSearchResults, setShowSearchResults] = useState(false)

  const submitSearchClass = (e) => {
    e.preventDefault()
    const searchQuery = { fitnessClassName }
    console.log('searchQuery', searchQuery)
    setShowSearchResults(!showSearchResults)
  }
  return (
    <Container>
      <Row>
        <Col sm={0}></Col>
        <Col md={8} lg={6}>
          <h3 className="mt-5 text-center">Search Classes</h3>
          <Form onSubmit={submitSearchClass}>
            <Form.Group className="my-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Yoga"
                value={fitnessClassName}
                onChange={(e) => setFitnessClassName(e.target.value)}
              />
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
          {showSearchResults && <ClassSearchResults />}
        </Col>
        <Col sm={0}></Col>
      </Row>
    </Container>
  )
}

export default SearchForClass
