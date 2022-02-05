import Container from 'react-bootstrap/Container'
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