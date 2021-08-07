import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import style from './Footer.module.scss'

const Footer = () => {
  return (
    <Container fluid className={style.footer}>
      <Row className="text-center">
        <Col md={4}>
          <p>
            <Link href="#">Methodology</Link>
          </p>
          <p>
            <Link href="#">Commitment</Link>
          </p>
          <p>
            <Link href="#">Curated Classes &amp; Events</Link>
          </p>
          <p>
            <Link href="#">Team</Link>
          </p>
        </Col>
        <Col md={4}>
          <p>
            <Link href="#">Residency</Link>
          </p>
          <p>
            <Link href="#">Contact Us</Link>
          </p>
          <p>
            <Link href="#">Investment Relations</Link>
          </p>
          <p>
            <Link href="#">Privacy</Link>
          </p>
        </Col>
        <Col md={4}>
          <p>
            <Link href="#">Locations</Link>
          </p>
          <p>
            <Link href="#">Memberships</Link>
          </p>
          <p>
            <Link href="#">About Us</Link>
          </p>
          <p>
            <Link href="#">Customer Service</Link>
          </p>
        </Col>
      </Row>
      <div>
        <p className="text-center">socials</p>
      </div>
    </Container>
  )
}

export default Footer
