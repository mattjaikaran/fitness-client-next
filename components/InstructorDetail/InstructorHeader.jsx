import { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import InstructorContact from './InstructorContact'

const InstructorHeader = () => {
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
              <h1>Josie Norman</h1>
              <p>
                <small>Yoga Instructor</small>
              </p>
              <p className="mt-3 py-3 px-lg-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur veritatis adipisci molestiae esse quod ratione at
                laudantium ipsam voluptatum culpa magnam libero illum eligendi
                dolore, aspernatur perferendis
              </p>
              <Button
                size="lg"
                variant="outline-primary"
                className="mt-3"
                onClick={renderContact}>
                Contact
              </Button>
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
            handleMessageInstructor={handleMessageInstructor}
          />
        )}
      </Container>
    </div>
  )
}

export default InstructorHeader
