import { useState } from 'react'
import { Container, Row, Col, Tabs, Tab, Modal, Button } from 'react-bootstrap'
import Glossary from './Glossary'
import { membership } from '@/copy/membership'

const Membership = () => {
  const [showAthleteContract, setShowAthleteContract] = useState(false)
  const [showGlossary, setShowGlossary] = useState(false)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleAthleteContract = () => setShowAthleteContract(!showAthleteContract)
  const handleGlossary = () => setShowGlossary(!showGlossary)

  const renderAthleteDetails = () => {
    return membership.athlete.map(({ id, text }) => {
      return <li key={id}>{text}</li>
    })
  }
  const renderProviderDetails = () => {
    return membership.provider.map(({ id, text }) => {
      return <li key={id}>{text}</li>
    })
  }
  return (
    <Container>
      <Row>
        <Col sm={0}></Col>
        <Col sm={8}>
          <h1 className="my-5 text-center">Membership</h1>
          <p>
            Method for reserving a <strong>BOX</strong>. A box is any space
            within our facility - small, medium, large and also our event open
            floor space.
          </p>
          <Tabs className="mb-3" id="membershipTabs">
            <Tab eventKey="athlete" title="Athlete">
              <ul>{renderAthleteDetails()}</ul>
              <p className="text-center mt-5">
                <strong onClick={handleAthleteContract}>Click Here</strong> to
                review our Athlete contract.
              </p>

              {showAthleteContract && (
                <div className="mt-5">
                  <hr />
                  <h3 className="text-center mt-5">Athlete Contract</h3>
                  <p className="mt-5">
                    {`This Agreement (this "Agreement"), dated as of _____________
                    ("Effective Date") is by and between Studio Tribeca located
                    at 80 Warren Street New York, NY 10014 and
                    ____________________________ and __________________
                    referenced at "Talent."`}
                  </p>
                  <p className="mt-5">
                    {`This agreement is to allow the Talent to use and operate
                    their likeness and brand out of our facilities as a
                    "Provider" member.`}
                  </p>
                  <p className="mt-5">
                    {`Talent will be enabled to reserve a Box up to 45 days from
                    date of reservation. At the time of 14 days from
                    reservation, the talent authorizes the Entity to draw the
                    fee for the Box reservation.`}
                  </p>
                  <div className="text-center mt-5">
                    <Button
                      className="hidden-xs"
                      variant="outline-secondary"
                      onClick={handleShow}>
                      Download PDF
                    </Button>
                    <Button
                      block
                      className="visible-xs"
                      variant="outline-secondary"
                      onClick={handleShow}>
                      Download PDF
                    </Button>
                  </div>
                  <div className="mt-5">
                    <p>
                      Let's continue the conversation and explore this
                      partnership -
                    </p>
                    <p className="mt-5">
                      <strong>Matt Marchese</strong>
                    </p>
                    <p>
                      <a href="mailto:contact@sstudioss.com">
                        contact@sstudioss.com
                      </a>
                    </p>
                    <p>
                      <a href="tel:9175550198">(917) 555 0198</a>
                    </p>
                  </div>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Athlete Contract</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Booya!</Modal.Body>
                    <Modal.Footer>
                      <Button variant="outline-secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              )}
            </Tab>
            <Tab eventKey="provider" title="Provider">
              <ul>{renderProviderDetails()}</ul>
              <p className="text-center mt-5">
                <strong onClick={handleGlossary}>Click Here</strong> to review
                our Glossary.
              </p>

              {showGlossary && <Glossary />}
            </Tab>
          </Tabs>
        </Col>
        <Col sm={0}></Col>
      </Row>
    </Container>
  )
}

export default Membership