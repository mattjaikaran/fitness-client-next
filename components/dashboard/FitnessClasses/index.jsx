import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ClassTable from './ClassTable'
import FilterClasses from './FilterClasses'
import { sampleClasses } from '@/copy/sampleClasses'

const FitnessClasses = () => {
  return (
    <>
      <h6>All Classes</h6>
      <Row className="mb-3">
        <Col md={6}>
          <p>Add New Class</p>
        </Col>
        <Col md={6}>
          <FilterClasses />
        </Col>
      </Row>
      <ClassTable fitnessClasses={sampleClasses} />
    </>
  )
}

export default FitnessClasses