import { Row, Col } from 'react-bootstrap'
import { curatedClassesAndEvents } from '@/copy/curate'

const CuratedClassesAndEvents = () => {
  return (
    <Row>
      <Col sm={0}></Col>
      <Col md={6}>
        <h1 className="my-5 text-center">Curated Classes &amp; Events</h1>
        <p className="mt-5">{curatedClassesAndEvents.p1}</p>
        <p className="mt-5">{curatedClassesAndEvents.p2}</p>
        <h4 className="mt-5">{curatedClassesAndEvents.subtitle}</h4>
        <p className="mt-5">{curatedClassesAndEvents.p3}</p>
        <p className="mt-5">{curatedClassesAndEvents.p4}</p>
      </Col>
      <Col sm={0}></Col>
    </Row>
  )
}

export default CuratedClassesAndEvents