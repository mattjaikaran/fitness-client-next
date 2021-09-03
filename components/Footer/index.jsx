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
            <a href="/methodology">
              <p>Methodology</p>
            </a>
          </Link>
          <Link href="/commitment" passHref>
            <a href="/commitment">
              <p>Commitment</p>
            </a>
          </Link>
          <Link href="/curated-classes-and-events" passHref>
            <a href="/curated-classes-and-events">
              <p>Curated Classes &amp; Events</p>
            </a>
          </Link>
          <Link href="/team" passHref>
            <a href="/team">
              <p>Team</p>
            </a>
          </Link>
        </Col>
        <Col md={4}>
          <Link href="/residency" passHref>
            <a href="/residency">
              <p>Residency</p>
            </a>
          </Link>
          <Link href="/contact" passHref>
            <a href="/contact">
              <p>Contact Us</p>
            </a>
          </Link>
          <Link href="/investment-relations" passHref>
            <a href="/investment-relations">
              <p>Investment Relations</p>
            </a>
          </Link>
          <Link href="/privacy" passHref>
            <a href="/privacy">
              <p>Privacy</p>
            </a>
          </Link>
        </Col>
        <Col md={4}>
          <Link href="/locations" passHref>
            <a href="/locations">
              <p>Locations</p>
            </a>
          </Link>
          <Link href="/membership" passHref>
            <a href="/membership">
              <p>Memberships</p>
            </a>
          </Link>
          <Link href="/about" passHref>
            <a href="/about">
              <p>About Us</p>
            </a>
          </Link>
          <Link href="/customer-service" passHref>
            <a href="/customer-service">
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
