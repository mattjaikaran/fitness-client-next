import Link from 'next/link'
import { Card } from 'react-bootstrap'

const InstructorCard = ({ instructor }) => {
  const { id, name, classesTaught } = instructor
  return (
    <Link href={`/instructors/${id}`} passHref>
      <Card>
        <Card.Img variant="top" src={'https://via.placeholder.com/450x500'} />
        <Card.Body className="text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {classesTaught.length > 1
              ? classesTaught.join(' | ')
              : `${classesTaught} Instructor`}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default InstructorCard
