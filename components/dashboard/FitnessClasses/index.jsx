import { Container, Row, Col } from 'react-bootstrap'
import ClassTable from './ClassTable'
import FilterClasses from './FilterClasses'

const FitnessClasses = () => {
  return (
    <Container>
      <h3>All Classes</h3>
      <Row className="mb-3">
        <Col md={6}>
          <FilterClasses />
        </Col>
      </Row>
      <ClassTable />
    </Container>
  )
}

export default FitnessClasses