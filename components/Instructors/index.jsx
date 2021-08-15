import { Row, Col } from 'react-bootstrap'
import InstructorCard from './InstructorCard'
import { instructorsList } from '@/copy/instructors'

const Instructors = () => {
  const renderInstructorCard = () => {
    return instructorsList.map(instructor => {
      const { id, name, classesTaught } = instructor
      return (
        <Col key={id} className="mb-3" md={4} sm={6}>
          <InstructorCard key={id} name={name} classesTaught={classesTaught} />
        </Col>
      )
    })
  }
  return (
    <Row>
      {renderInstructorCard()}
    </Row>
  )
}

export default Instructors