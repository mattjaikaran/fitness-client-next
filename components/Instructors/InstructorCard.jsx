import { Card } from 'react-bootstrap'

const InstructorCard = ({ name }) => {
  return (
    <Card>
      <Card.Img variant="top" src="https://via.placeholder.com/350x450" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Yoga Instructor
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default InstructorCard