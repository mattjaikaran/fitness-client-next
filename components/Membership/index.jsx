import { Container, Tabs, Tab } from 'react-bootstrap'

const Membership = () => {
  return (
    <Container>
      <p>
        Method for reserving a "BOX." A box is any space within our facility -
        small, medium, large and also our event open floor space.
      </p>
      <Tabs className="mb-3">
        <Tab eventKey="athlete" title="Athlete">
          <p>Athlete</p>
        </Tab>
        <Tab eventKey="provider" title="Provider">
          <p>Provider</p>
        </Tab>
      </Tabs>
    </Container>
  )
}

export default Membership