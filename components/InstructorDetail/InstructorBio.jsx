import { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import InstructorContact from './InstructorContact'

const InstructorBio = () => {
  const [contactFormVisible, setContactFormVisible] = useState(false)
  const renderContact = () => setContactFormVisible(!contactFormVisible)

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
        <InstructorContact renderContact={renderContact} />
      )}
    </Container>
  )
}

export default InstructorBio