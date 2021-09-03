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
            <a>
              <p>Methodology</p>
            </a>
          </Link>
          <Link href="/commitment" passHref>
            <a>
              <p>Commitment</p>
            </a>
          </Link>
          <Link href="/curated-classes-and-events" passHref>
            <a>
              <p>Curated Classes &amp; Events</p>
            </a>
          </Link>
          <Link href="/team" passHref>
            <a>
              <p>Team</p>
            </a>
          </Link>
        </Col>
        <Col md={4}>
          <Link href="/residency" passHref>
            <a>
              <p>Residency</p>
            </a>
          </Link>
          <Link href="/contact" passHref>
            <a>
              <p>Contact Us</p>
            </a>
          </Link>
          <Link href="/investment-relations" passHref>
            <a>
              <p>Investment Relations</p>
            </a>
          </Link>
          <Link href="/privacy" passHref>
            <a>
              <p>Privacy</p>
            </a>
          </Link>
        </Col>
        <Col md={4}>
          <Link href="/locations" passHref>
            <a>
              <p>Locations</p>
            </a>
          </Link>
          <Link href="/membership" passHref>
            <a>
              <p>Memberships</p>
            </a>
          </Link>
          <Link href="/about" passHref>
            <a>
              <p>About Us</p>
            </a>
          </Link>
          <Link href="/customer-service" passHref>
            <a>
              <p>Customer Service</p>
            </a>
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
