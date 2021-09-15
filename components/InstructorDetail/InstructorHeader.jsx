import { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import InstructorContact from './InstructorContact'

const InstructorHeader = ({
  instructorFirstName,
  instructorFullName,
  bio,
  classesTaught,
  contact
}) => {
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
    <div>
      <Container fluid className="text-center bg-dark p-5">
        <Container>
          <Row>
            <Col sm={0}></Col>
            <Col sm={6}>
              <h1>{instructorFullName}</h1>
              <p>
                <small>
                  {classesTaught?.length > 1
                    ? `${classesTaught?.join(', ')} Instructor`
                    : `${classesTaught} Instructor`}
                </small>
              </p>
              <p className="mt-3 py-3 px-lg-5">{bio}</p>
              <Button
                size="lg"
                variant="outline-primary hidden-xs"
                className="mt-3"
                onClick={renderContact}>
                Contact
              </Button>
              <div className="d-grid">
                <Button
                  size="lg"
                  variant="outline-primary visible-xs"
                  className="mt-3"
                  onClick={renderContact}>
                  Contact
                </Button>
              </div>
            </Col>
            <Col sm={0}></Col>
          </Row>
        </Container>
      </Container>
      <Container className="my-5">
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
            instructorFirstName={instructorFirstName}
            handleMessageInstructor={handleMessageInstructor}
            contact={contact}
          />
        )}
      </Container>
    </div>
  )
}

export default InstructorHeader
