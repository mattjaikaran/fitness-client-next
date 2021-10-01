import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import { curatedClassesAndEvents } from '@/copy/curate'

const CuratedClassesAndEvents = () => {
  return (
    <Container className="orpheus">
      <Row>
        <Col sm={0}></Col>
        <Col md={6}>
          <h1 className="mt-5 text-center">Curate</h1>
          <h3 className="mt-4 mb-3 text-center">Classes &amp; Events</h3>
          <h6 className="mb-5 text-center">
            {curatedClassesAndEvents.subtitle}
          </h6>
          <p className="mt-5">{curatedClassesAndEvents.p1}</p>
          <p className="mt-5">{curatedClassesAndEvents.p2}</p>
          <p className="mt-0">
            {curatedClassesAndEvents.p3} <br />
            {curatedClassesAndEvents.p4} <br />
            {curatedClassesAndEvents.p5} <br />
            {curatedClassesAndEvents.p6}
          </p>
          {/* <p className="mt-0">{curatedClassesAndEvents.p4}</p>
          <p className="mt-0">{curatedClassesAndEvents.p5}</p>
          <p className="mt-0">{curatedClassesAndEvents.p6}</p> */}
          <Link href="/curate">
            <p className="mt-5">{curatedClassesAndEvents.p7}</p>
          </Link>
        </Col>
        <Col sm={0}></Col>
      </Row>
    </Container>
  )
}

export default CuratedClassesAndEvents