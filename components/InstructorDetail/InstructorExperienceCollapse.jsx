import { Accordion } from 'react-bootstrap'

const InstructorExperienceCollapse = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>Lorem ipsum</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>Lorem ipsum</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default InstructorExperienceCollapse