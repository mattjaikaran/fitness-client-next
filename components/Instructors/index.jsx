import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import InstructorCard from './InstructorCard'
import CustomSpinner from '@/components/CustomSpinner' 
import { instructorsList } from '@/copy/instructors'

const Instructors = ({ data }) => {
  const [instructors, setInstructors] = useState(data)
  useEffect(() => !instructors && setInstructors(instructorsList), [])

  const renderInstructorCard = () => {
    return instructors.map((instructor) => {
      console.log(
        '🚀 ~ file: index.jsx ~ line 22 ~ returninstructors.map ~ instructor',
        instructor
      )
      return (
        <Col
          key={instructor.slug}
          className="px-1 px-sm-2"
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