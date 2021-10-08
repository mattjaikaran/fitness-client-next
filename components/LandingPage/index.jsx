import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import homeHero from '../../assets/img/home-hero.jpeg'


const LandingPage = () => {
  return (
    <div>"
      <Image src={homeHero} alt="home hero" />
      <Container className="orpheus text-center p-5">
        <h1>SSTUDIOSS</h1>
        <h6>Coming Soon</h6>
        <Row className="mt-5">
          <Col sm={4} className="mb-3">
            <h3>Studios New York</h3>
            <p>Fall 2021</p>
          </Col>
          <Col sm={4} className="mb-3">
            <h3>Studios Boston</h3>
            <p>Summer 2022</p>
          </Col>
          <Col sm={4} className="mb-3">
            <h3>Studios Arizona</h3>
            <p>Winter 2022</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LandingPage