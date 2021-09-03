import { Container, Tabs, Tab, Accordion } from 'react-bootstrap'

const InstructorExperienceTabs = () => {
  return (
    <Container className="text-center mt-3 p-md-5">
      <Tabs
        defaultActiveKey="expertise"
        id="uncontrolled-tab-example"
        className="mb-3">
        <Tab eventKey="expertise" title="Expertise">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
            deserunt, quia pariatur eum sequi corporis blanditiis illum illo,
            quisquam harum ipsum? Nostrum voluptates cumque non recusandae hic
            consectetur sunt aspernatur.
          </p>
        </Tab>
        <Tab eventKey="credentials" title="Credentials">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
            deserunt, quia pariatur eum sequi corporis blanditiis illum illo,
            quisquam harum ipsum? Nostrum voluptates cumque non recusandae hic
            consectetur sunt aspernatur.
          </p>
        </Tab>
      </Tabs>
    </Container>
  )
}

export default InstructorExperienceTabs
