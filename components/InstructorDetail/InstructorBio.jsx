import { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import InstructorContact from './InstructorContact'

const InstructorBio = () => {
  const [contactFormVisible, setContactFormVisible] = useState(false)
  const renderContact = () => setContactFormVisible(!contactFormVisible)
  const [messageSuccess, setMessageSuccess] = useState(null)
  
  const handleContactSubmit = async (e) => {
    e.preventDefault()
    console.log('submit')
    try {
      setMessageSuccess(true)
    } catch (error) {
      console.log(error)
      setMessageSuccess(false)
    }
  }

  return (
    <Container className="text-center p-md-5">
      <h2>Bio</h2>
      <p className="mt-5 px-md-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempore,
        vel praesentium modi eveniet optio, in molestias voluptatum sit id
        reiciendis reprehenderit eum quo velit, blanditiis nihil delectus fugiat
        saepe.
      </p>
      <Button
        variant="outline-secondary"
        className="mt-3"
        onClick={renderContact}>
        Contact
      </Button>
      {contactFormVisible && (
        <InstructorContact
          messageSuccess={messageSuccess}
          renderContact={renderContact}
          handleContactSubmit={handleContactSubmit}
        />
      )}
    </Container>
  )
}

export default InstructorBio