import Link from 'next/link'
import { Card } from 'react-bootstrap'

const InstructorCard = ({ instructor: { slug, fullName, classesTaught } }) => {
  return (
    <Link 
      href={`/instructors/${slug}`}
      passHref>
      <Card border="light">
        <Card.Img variant="top" src={'https://via.placeholder.com/450x500'} />
        <Card.Body className="text-center">
          <h6>{fullName}</h6>
          <p>
            <small>
              {classesTaught.length > 1
                ? classesTaught.join(' | ')
                : classesTaught}
            </small>
          </p>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default InstructorCard
