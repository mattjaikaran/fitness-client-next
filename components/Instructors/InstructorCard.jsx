import Link from 'next/link'
import Image from 'next/image'
import { Card } from 'react-bootstrap'

const InstructorCard = ({ instructor: { slug, fullName, classesTaught, featuredPhoto } }) => {
  return (
    <Link href={`/instructors/${slug}`} passHref>
      <Card border="light">
        <Image 
          layout="responsive"
          width={450}
          height={500}
          src={featuredPhoto}
          alt="instructor featured image" />
        <Card.Body className="text-center">
          <h5>{fullName}</h5>
          <p className="montserrat">
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
