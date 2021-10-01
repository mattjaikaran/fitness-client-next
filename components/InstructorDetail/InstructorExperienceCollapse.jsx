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

const InstructorExperienceCollapse = ({ experience }) => {
  return (
    <Container fluid className="visible-xs px-0 mt-5 orpheus">
      <Accordion defaultActiveKey="0">
        <Card border="light">
          <Card.Header style={{ backgroundColor: 'white' }}>
            <ContextAwareToggle eventKey="0">Expertise</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul>
                {experience?.expertise?.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
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
                {experience?.credentials?.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  )
}

export default InstructorExperienceCollapse