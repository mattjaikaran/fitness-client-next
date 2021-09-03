import { useContext } from 'react'
import { Container, Row, Col, Accordion, Card, AccordionContext, useAccordionButton } from 'react-bootstrap'

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext)

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  )

  const isCurrentEventKey = activeEventKey === eventKey

  return (
    <Row onClick={decoratedOnClick}>
      <Col className="text-start">{children}</Col>
      <Col className="text-end">{isCurrentEventKey ? '-' : '+'}</Col>
    </Row>

  )
}

const InstructorExperienceCollapse = () => {
  return (
    <Container fluid className="visible-xs px-0 mt-5">
      <Accordion defaultActiveKey="0">
        <Card border="light">
          <Card.Header style={{ backgroundColor: 'white' }}>
            <ContextAwareToggle eventKey="0">Expertise</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul>
                <li>
                  Certified Instructor from CrossFit
                </li>
                <li>
                  Certified Instructor from Fight Club
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card border="light">
          <Card.Header style={{ backgroundColor: 'white' }}>
            <ContextAwareToggle eventKey="1">Credentials</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <ul>
                <li>
                  I graduated with a Bachelor of Science in Exercise Science at NYU
                </li>
                <li>
                  I moved a building with my bare hands
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  )
}

export default InstructorExperienceCollapse