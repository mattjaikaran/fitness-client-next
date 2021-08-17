import { Container, Tabs, Tab } from 'react-bootstrap'

const InstructorExperience = () => {
  return (
    <Container className="mt-3">
      <Tabs
        defaultActiveKey="expertise"
        id="uncontrolled-tab-example"
        className="mb-3">
        <Tab eventKey="expertise" title="Expertise">
          <p>Lorem Ipsum1</p>
        </Tab>
        <Tab eventKey="credentials" title="Credentials">
          <p>Lorem Ipsum2</p>
        </Tab>
      </Tabs>
    </Container>
  )
}

export default InstructorExperience
