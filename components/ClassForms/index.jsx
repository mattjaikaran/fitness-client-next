import { Container, Form, Button } from 'react-bootstrap'
import InstructorBookAClass from './InstructorBookAClass'
import StudentJoinAClass from './StudentJoinAClass'

const ClassForms = () => {
  return (
    <Container>
      <InstructorBookAClass />
      <StudentJoinAClass />
    </Container>
  )
}

export default ClassForms