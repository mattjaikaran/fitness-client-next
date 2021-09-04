import { Container, Tabs, Tab, Row, Col } from 'react-bootstrap'

const InstructorExperienceTabs = () => {
  return (
    <Container className="mt-3 p-md-5 d-none d-sm-flex">
      <Col></Col>
      <Col sm={10} lg={8}>
        <Tabs
          defaultActiveKey="expertise"
          id="uncontrolled-tab-example"
          className="mb-3">
          <Tab eventKey="expertise" title="Expertise">
            <ul>
              <li>Certified Instructor from CrossFit</li>
              <li>Certified Instructor from Fight Club</li>
            </ul>
          </Tab>
          <Tab eventKey="credentials" title="Credentials">
            <ul>
              <li>
                Bachelor of Science in Exercise Science at NYU
              </li>
              <li>I moved a building with my bare hands</li>
            </ul>
          </Tab>
        </Tabs>
      </Col>
      <Col></Col>
    </Container>
  )
}

export default InstructorExperienceTabs
