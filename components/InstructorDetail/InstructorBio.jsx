import { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import InstructorContact from './InstructorContact'

const InstructorBio = () => {
  const [contactFormVisible, setContactFormVisible] = useState(false)
  const renderContact = () => setContactFormVisible(!contactFormVisible)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [messageSuccess, setMessageSuccess] = useState(null)
  
  const handleMessageInstructor = async (e) => {
    e.preventDefault()
    const obj = {
      name,
      email,
      message
    }
    console.log('submit', obj)
    try {
      setMessageSuccess(true)
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      console.log(error)
      setMessageSuccess(false)
    }
  }

  return (
    <Container className="text-center py-5 p-lg-5">
      <Row className="justify-content-center">
        <Row>
          <Col sm={0}></Col>
          <Col md={6}>
            <h2>Bio</h2>
            <p className="mt-3 px-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              tempore, vel praesentium modi eveniet optio, in molestias
              voluptatum sit id reiciendis reprehenderit eum quo velit,
              blanditiis nihil delectus fugiat saepe.
            </p>
          </Col>
          <Col sm={0}></Col>
        </Row>
        <div className="d-grid">
          <div className="d-block">
            <Button
              variant="outline-secondary"
              className="mt-3 hidden-xs"
              onClick={renderContact}>
              Contact
            </Button>
          </div>
          <Button
            size="lg"
            variant="outline-secondary"
            className="mt-3 visible-xs"
            onClick={renderContact}>
            Contact
          </Button>
        </div>
        {contactFormVisible && (
          <InstructorContact
            name={name}
            email={email}
            message={message}
            setName={setName}
            setEmail={setEmail}
            setMessage={setMessage}
            messageSuccess={messageSuccess}
            renderContact={renderContact}
            handleMessageInstructor={handleMessageInstructor}
          />
        )}
      </Row>
    </Container>
  )
}

export default InstructorBio