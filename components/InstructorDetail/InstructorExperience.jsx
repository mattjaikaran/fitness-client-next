import { Container, Tabs, Tab } from 'react-bootstrap'

const InstructorExperience = () => {
  return (
    <Container className="text-center mt-3 p-md-5">
      <Tabs
        defaultActiveKey="expertise"
        id="uncontrolled-tab-example"
        className="mb-3">
        <Tab eventKey="expertise" title="Expertise">
          <p>Expertise</p>
        </Tab>
        <Tab eventKey="credentials" title="Credentials">
          <p>Credentials</p>
        </Tab>
      </Tabs>
    </Container>
  )
}

export default InstructorExperience
