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
          <p>
            <Link href="/methodology">Methodology</Link>
          </p>
          <p>
            <Link href="/commitment">Commitment</Link>
          </p>
          <p>
            <Link href="/curated-classes-and-events">
              Curated Classes &amp; Events
            </Link>
          </p>
          <p>
            <Link href="/team">Team</Link>
          </p>
        </Col>
        <Col md={4}>
          <p>
            <Link href="/residency">Residency</Link>
          </p>
          <p>
            <Link href="/contact">Contact Us</Link>
          </p>
          <p>
            <Link href="#">Investment Relations</Link>
          </p>
          <p>
            <Link href="/privacy">Privacy</Link>
          </p>
        </Col>
        <Col md={4}>
          <p>
            <Link href="/locations">Locations</Link>
          </p>
          <p>
            <Link href="/membership">Memberships</Link>
          </p>
          <p>
            <Link href="/about">About Us</Link>
          </p>
          <p>
            <Link href="/customer-service">Customer Service</Link>
          </p>
        </Col>
        <Col md={12} className="mt-5">
          <FaFacebookF className={styles.social} />
          <AiOutlineInstagram className={styles.social} />
          <SiTiktok className={styles.social} />
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
