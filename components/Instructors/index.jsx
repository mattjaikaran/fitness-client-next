import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import InstructorCard from './InstructorCard'
import { instructorsList } from '@/copy/instructors'

const Instructors = () => {
  const [instructors, setInstructors] = useState(instructorsList)
  console.log('instructors', instructors);
  
  const renderInstructorCard = () => {
    return instructors.map((instructor) => {
      return (
        <Col
          key={instructor.id}
          className="mb-3 px-1 px-sm-2"
          xs={6}
          md={4}
          sm={6}>
          <InstructorCard instructor={instructor} />
        </Col>
      )
    })
  }
  return (
    <Container fluid="xl">
      <h1 className="my-5 text-center">Instructors</h1>
      <Row>{renderInstructorCard()}</Row>
    </Container>
  )
}

export default Instructors