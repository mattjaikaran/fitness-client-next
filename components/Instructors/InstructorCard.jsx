import Link from 'next/link'
import Image from 'next/image'
import { Card } from 'react-bootstrap'
import styles from './Instructors.module.scss'

const InstructorCard = ({ instructor }) => {
  return (
    <Link href={`/instructors/${instructor.slug.current}`} passHref>
      <Card border="light">
        <Image
          layout="responsive"
          className={styles.instructorImg}
          width={450}
          height={500}
          src={instructor.featuredPhoto}
          alt="instructor featured image"
        />
        <Card.Body className="text-center bg-off-white">
          <h5>{instructor.fullName}</h5>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default InstructorCard
