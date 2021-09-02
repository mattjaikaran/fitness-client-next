import { useState } from 'react'
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap'
import AthleteContract from './AthleteContract'
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
          <Tabs className="mb-3">
            <Tab eventKey="athlete" title="Athlete">
              <ul>{renderAthleteDetails()}</ul>
              <p className="text-center mt-5">
                <strong onClick={handleAthleteContract}>Click Here</strong> to
                review our Athlete contract.
              </p>

              {showAthleteContract && (
                <AthleteContract
                  show={show}
                  onClick={handleShow}
                  onHide={handleClose}
                />
              )}
            </Tab>
            <Tab eventKey="provider" title="Provider">
              <ul>{renderProviderDetails()}</ul>
              <p className="text-center mt-5">
                <strong onClick={handleGlossary}>Click Here</strong> to review
                our Glossary.
              </p>

              {showGlossary && (
                <div className="mt-5">
                  <hr />
                  <h3 className="text-center mt-5">Glossary</h3>
                  <p className="mt-5">
                    <strong>Repurpose</strong> - Paying for a Box and then
                    putting out to the community for anyone to reserve a spot in
                    your session.
                  </p>
                  <p className="mt-3">
                    <strong>Session</strong> - A class, an event that persons
                    attend live in person
                  </p>
                  <p className="mt-3">
                    <strong>Stream 2</strong> - This is the box you check as
                    identifying that a person can stream your session. You can
                    identify the rate in the tool bar.
                  </p>
                  <p className="mt-3">
                    <strong>Stream 2</strong> - You are responsibile for collecting who 
                    attends your session by stream and responsible for collecting the 
                    money for them to stream.
                  </p>
                </div>
              )}
            </Tab>
          </Tabs>
        </Col>
        <Col sm={0}></Col>
      </Row>
    </Container>
  )
}

export default Membership