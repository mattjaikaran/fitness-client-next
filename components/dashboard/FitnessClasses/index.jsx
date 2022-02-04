import { Row, Col, Card } from 'react-bootstrap'
import ClassTable from './ClassTable'
import FilterClasses from './FilterClasses'
import { sampleClasses } from '@/copy/sampleClasses'

const FitnessClasses = () => {
  return (
    <>
      <h6>All Classes</h6>
      <Row className="mb-3">
        <Col md={6}>
          <FilterClasses />
        </Col>
        <Col md={6}>
          <p>Add New Class</p>
        </Col>
      </Row>
      <Card>
        <Card.Body>
          <ClassTable fitnessClasses={sampleClasses} />
        </Card.Body>
      </Card>
    </>
  )
}

export default FitnessClasses