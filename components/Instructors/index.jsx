import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import InstructorCard from './InstructorCard'
import CustomSpinner from '@/components/CustomSpinner' 
import { instructorsList } from '@/copy/instructors'

const Instructors = ({ instructorsList }) => {
  const [instructors, setInstructors] = useState(instructorsList)
  
  const renderInstructorCard = () => {
    return instructorsList.map((instructor) => {
      return (
        <Col
          key={instructor._id}
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
      <Row>{instructors ? renderInstructorCard() : <CustomSpinner />}</Row>
    </Container>
  )
}

export default Instructors