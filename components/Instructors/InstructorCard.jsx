import Link from 'next/link'
import { Card } from 'react-bootstrap'

const InstructorCard = ({ instructor: { id, fullName, classesTaught } }) => {
  return (
    <Link href={`/instructors/${id}`} passHref>
      <Card>
        <Card.Img variant="top" src={'https://via.placeholder.com/450x500'} />
        <Card.Body className="text-center">
          <h6>{fullName}</h6>
          <p>
            {classesTaught.length > 1
              ? classesTaught.join(' | ')
              : `${classesTaught} Instructor`}
          </p>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default InstructorCard
