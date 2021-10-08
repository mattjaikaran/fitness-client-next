import Link from 'next/link'
import Image from 'next/image'
import { Card } from 'react-bootstrap'
import styles from './Instructors.module.scss'

const InstructorCard = ({ instructor }) => {
  return (
    <Link href={`/instructors/${encodeURIComponent(slug)}`} passHref>
      <Card border="light">
        <Image
          layout="responsive"
          className={styles.instructorImg}
          width={450}
          height={500}
          src={instructor.featuredPhoto}
          alt="instructor featured image"
        />
        <Card.Body
          className={`${styles.cardBodyStyle} text-center bg-off-white`}>
          {fullName.length > 20 ? (
            <p className={styles.longName}>{fullName}</p>
          ) : (
            <h6>{fullName}</h6>
          )}
        </Card.Body>
      </Card>
    </Link>
  )
}

export default InstructorCard
