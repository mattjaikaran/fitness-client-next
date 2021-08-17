import { Container, Button } from 'react-bootstrap'

const InstructorBio = () => {
  return (
    <Container className="text-center p-5">
      <h2>Bio</h2>
      <p className="px-md-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempore,
        vel praesentium modi eveniet optio, in molestias voluptatum sit id
        reiciendis reprehenderit eum quo velit, blanditiis nihil delectus fugiat
        saepe.
      </p>
      <div>
        <Button variant="outline-secondary" href="#">Contact</Button>
      </div>
    </Container>
  )
}

export default InstructorBio