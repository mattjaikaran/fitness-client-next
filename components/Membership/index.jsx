import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap'

const Membership = () => {
  return (
    <Container>
      <Row>
        <Col sm={0}></Col>
        <Col sm={6}>
          <h1 className="my-5 text-center">Membership</h1>
          <p>
            Method for reserving a <strong>BOX</strong>. A box is any space
            within our facility - small, medium, large and also our event open
            floor space.
          </p>
          <Tabs className="mb-3">
            <Tab eventKey="athlete" title="Athlete">
              <p>Athlete</p>
            </Tab>
            <Tab eventKey="provider" title="Provider">
              <p>Provider</p>
            </Tab>
          </Tabs>
        </Col>
        <Col sm={0}></Col>
      </Row>
    </Container>
  )
}

export default Membership