import { Container, Tabs, Tab, Row, Col } from 'react-bootstrap'

const InstructorExperienceTabs = ({ experience }) => {
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
              {experience?.expertise?.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </Tab>
          <Tab eventKey="credentials" title="Credentials">
            <ul>
              {experience?.credentials?.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </Tab>
        </Tabs>
      </Col>
      <Col></Col>
    </Container>
  )
}

export default InstructorExperienceTabs
