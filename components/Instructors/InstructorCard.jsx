import Link from 'next/link'
import { Card } from 'react-bootstrap'

const InstructorCard = ({ id, name, classesTaught }) => {
  return (
    <Link href={`/instructors/${id}`}>
      <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/350x450" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Yoga Instructor</Card.Text>
          <p>{classesTaught}</p>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default InstructorCard
