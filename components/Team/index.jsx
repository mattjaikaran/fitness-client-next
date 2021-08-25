import { Container, Row, Col } from 'react-bootstrap'
import { teamList } from '@/copy/team'

const Team = () => {
  console.log(teamList)
  return (
    <Container>
      <h1 className="ml-5">Team</h1>
      <Row className="mt-5 px-5">
        <Col md={6}>
          {teamList.columnOne.map((instructor) => {
            return (
              <p key={instructor.id}>
                <strong>{instructor.name}</strong> - {instructor.instagram}
              </p>
            )
          })}
        </Col>
        <Col md={6}>
          {teamList.columnTwo.map((instructor) => {
            return (
              <p key={instructor.id}>
                <strong>{instructor.name}</strong> - {instructor.instagram}
              </p>
            )
          })}
        </Col>
      </Row>
    </Container>
  )
}


export default Team