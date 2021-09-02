import { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
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
    <Container className="text-center p-5">
      <h2 className="">Bio</h2>
      <p className="mt-5 px-md-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempore,
        vel praesentium modi eveniet optio, in molestias voluptatum sit id
        reiciendis reprehenderit eum quo velit, blanditiis nihil delectus fugiat
        saepe.
      </p>
      <Button
        variant="outline-secondary"
        className="mt-5 hidden-xs"
        onClick={renderContact}>
        Contact
      </Button>
      <Button
        block
        variant="outline-secondary"
        className="mt-5 visible-xs"
        onClick={renderContact}>
        Contact
      </Button>
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
  )
}

export default InstructorBio