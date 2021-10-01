import { Container, Row, Col } from 'react-bootstrap'
import { investmentRelations } from '@/copy/investmentRelations'
const InvestmentRelations = () => {
  const renderReleaseSchedule = () => {
    return investmentRelations.locations.map(location => {
      const { id, city, launchDate } = location
      return (
        <p key={id}>
          <strong>{city}</strong> - <span>{launchDate}</span>
        </p>
      )
    })
  }
  return (
    <Container className="orpheus">
      <Row>
        <Col sm={0}></Col>
        <Col md={6}>
          <h1 className="my-5">Investment Relations</h1>
          <p>{investmentRelations.p1}</p>
          <p>{investmentRelations.p2}</p>

          <div className="mt-5">{renderReleaseSchedule()}</div>
        </Col>
        <Col sm={0}></Col>
      </Row>
    </Container>
  )
}

export default InvestmentRelations