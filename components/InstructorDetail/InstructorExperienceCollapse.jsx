import { useContext } from 'react'
import { AccordionContext, useAccordionButton } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'


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
          <Card.Header>
            <ContextAwareToggle eventKey="0">Expertise</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="bg-off-white">
              <ul>
                {experience?.expertise?.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card border="light">
          <Card.Header>
            <ContextAwareToggle eventKey="1">Credentials</ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body className="bg-off-white">
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