import { Container, Row, Col } from 'react-bootstrap'
import { teamList } from '@/copy/team'

const Team = () => {
  console.log(teamList)
  return (
    <Container>
      <h1 className="my-5 text-center">Team</h1>
      <Row className="mt-5">
        <Col md={2}></Col>
        <Col md={5}>
          {teamList.columnOne.map((instructor) => {
            return (
              <p key={instructor.id}>
                <strong>{instructor.name}</strong> -
                {instructor.instagram}
              </p>
            )
          })}
        </Col>
        <Col md={5}>
          {teamList.columnTwo.map((instructor) => {
            return (
              <p key={instructor.id}>
                <strong>{instructor.name}</strong> -
                {instructor.instagram}
              </p>
            )
          })}
        </Col>
      </Row>
    </Container>
  )
}


export default Team