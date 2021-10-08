import { Container, Row, Col } from 'react-bootstrap'
import { teamList } from '@/copy/team'

const Team = () => {
  return (
    <Container className="orpheus">
      <h1 className="my-5 text-center">Team</h1>
      <Row className="mt-5">
        <Col md={2}></Col>
        <Col md={5}>
          {teamList.columnOne.map((instructor) => {
            return (
              <p key={instructor.id}>
                <strong>{instructor.name}</strong> -{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://instagram.com/${instructor.instagram}`}>
                  @{instructor.instagram}
                </a>
              </p>
            )
          })}
        </Col>
        <Col md={5}>
          {teamList.columnTwo.map((instructor) => {
            return (
              <p key={instructor.id}>
                <strong>{instructor.name}</strong> -{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://instagram.com/${instructor.instagram}`}>
                  @{instructor.instagram}
                </a>
              </p>
            )
          })}
        </Col>
      </Row>
    </Container>
  )
}


export default Team