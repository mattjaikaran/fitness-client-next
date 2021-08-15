import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import style from './Footer.module.scss'

const Footer = () => {
  return (
    <Container fluid className={style.footer}>
      <Row className="text-center">
        <Col md={4}>
          <p>
            <Link href="/methodology">Methodology</Link>
          </p>
          <p>
            <Link href="/commitment">Commitment</Link>
          </p>
          <p>
            <Link href="/curated-classes-and-events">Curated Classes &amp; Events</Link>
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
      </Row>
      <div>
        <p className="text-center">socials here</p>
      </div>
    </Container>
  )
}

export default Footer
