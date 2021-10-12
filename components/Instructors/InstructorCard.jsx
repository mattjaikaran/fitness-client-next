import Link from 'next/link'
import Image from 'next/image'
import { Card } from 'react-bootstrap'
import styles from './Instructors.module.scss'

const InstructorCard = ({ instructor: { slug, fullName, classesTaught, featuredPhoto } }) => {
  return (
    <Link href={`/instructors/${slug}`} passHref>
      {/* <div
        className={styles.instructorImg}
        style={{
          backgroundImage: `url(${featuredPhoto})`,
        }}>
        <div className={styles.instructorInfo}>
          <h5>{fullName}</h5>
          <p className="montserrat">
            <small>
              {classesTaught.length > 1
                ? classesTaught.join(' | ')
                : classesTaught}
            </small>
          </p>
        </div>
      </div> */}
      <Card border="light">
        <Image
          layout="responsive"
          className={styles.instructorImg}
          width={450}
          height={500}
          src={featuredPhoto}
          alt="instructor featured image"
        />
        <Card.Body
          className={`${styles.cardBodyStyle} text-center bg-off-white`}>
          {fullName.length > 20 ? (
            <p className={styles.longName}>{fullName}</p>
          ) : (
            <h6>{fullName}</h6>
          )}
          {/* <p className="montserrat">
            <small>
              {classesTaught.length > 1
                ? classesTaught.join(' | ')
                : classesTaught}
            </small>
          </p> */}
        </Card.Body>
      </Card>
    </Link>
  )
}

export default InstructorCard
