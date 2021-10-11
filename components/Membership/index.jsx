import { useState } from 'react'
import { Container, Row, Col, Tabs, Tab, Modal, Button } from 'react-bootstrap'
import Glossary from './Glossary'
import InstructorContract from './InstructorContract'
import { membership } from '@/copy/membership'
import styles from './Membership.module.scss'

const Membership = () => {
  const [showInstructorContract, setShowInstructorContract] = useState(false)
  const [showGlossary, setShowGlossary] = useState(false)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleInstructorContract = () => setShowInstructorContract(!showInstructorContract)
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
    <Container className="orpheus">
      <Row>
        <Col sm={0}></Col>
        <Col sm={8}>
          <h1 className="my-5 text-center">Membership</h1>
          <p>
            Method for reserving a <strong>BOX</strong>. A box is any space
            within our facility - small, medium, large and also our event open
            floor space.
          </p>
          <Tabs
            id="membership-tabs"
            className={styles.membershipTabs}>
            <Tab eventKey="athlete" title="Athlete">
              <ul>{renderAthleteDetails()}</ul>
            </Tab>
            <Tab eventKey="provider" title="Provider">
              <ul>{renderProviderDetails()}</ul>
              <p className="text-center mt-5">
                {!showInstructorContract ? (
                  <>
                    <strong onClick={handleInstructorContract}>
                      Click Here
                    </strong>{' '}
                    to review our Instructor contract.
                  </>
                ) : (
                  <>
                    <strong onClick={handleInstructorContract}>Click</strong> to
                    hide Instructor Contract.
                  </>
                )}
              </p>
              <p className="text-center mt-3">
                {!showGlossary ? (
                  <>
                    <strong onClick={handleGlossary}>Click Here</strong> to
                    review our Glossary.
                  </>
                ) : (
                  <>
                    <strong onClick={handleGlossary}>Click</strong> to hide
                    Glossary.
                  </>
                )}
              </p>

              {showInstructorContract && (
                <InstructorContract
                  handleShow={handleShow}
                  handleClose={handleClose}
                  show={show}
                />
              )}
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