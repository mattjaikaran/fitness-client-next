import { Row, Col } from 'react-bootstrap'
import InstructorCard from './InstructorCard'

const Instructors = ({ instructors }) => {
  const renderInstructorCard = () => {
    return instructors?.map((instructor) => {
      return (
        <Col key={instructor.id} className="mb-3" md={4} sm={6}>
          <InstructorCard instructor={instructor} />
        </Col>
      )
    })
  }
  return <Row>{renderInstructorCard()}</Row>
}

export default Instructors