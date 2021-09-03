import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { SiTiktok } from 'react-icons/si'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <Container fluid className={styles.footer}>
      <Row className="text-center mt-5">
        <Col md={4}>
          <Link href="/methodology" passHref>
            <p>Methodology</p>
          </Link>
          <Link href="/commitment" passHref>
            <p>Commitment</p>
          </Link>
          <Link href="/curated-classes-and-events" passHref>
            <p>Curated Classes &amp; Events</p>
          </Link>
          <Link href="/team" passHref>
            <p>Team</p>
          </Link>
        </Col>
        <Col md={4}>
          <Link href="/residency" passHref>
            <p>Residency</p>
          </Link>
          <Link href="/contact" passHref>
            <p>Contact Us</p>
          </Link>
          <Link href="investment-relations" passHref>
            <p>Investment Relations</p>
          </Link>
          <Link href="/privacy" passHref>
            <p>Privacy</p>
          </Link>
        </Col>
        <Col md={4}>
          <Link href="/locations" passHref>
            <p>Locations</p>
          </Link>
          <Link href="/membership" passHref>
            <p>Memberships</p>
          </Link>
          <Link href="/about" passHref>
            <p>About Us</p>
          </Link>
          <Link href="/customer-service" passHref>
            <p>Customer Service</p>
          </Link>
        </Col>
        <Col md={12} className="my-5">
          <FaFacebookF className={styles.social} />
          <AiOutlineInstagram className={styles.social} />
          <SiTiktok className={styles.social} />
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
