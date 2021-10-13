import { Container, Row, Col } from 'react-bootstrap'

const Commitment = () => {
  return (
    <Container className="orpheus">
      <Row>
        <Col sm={0}></Col>
        <Col sm={8} lg={6}>
          <h1 className="mt-5 text-center">Commitment</h1>

          <h5 className="mt-5">
            <q>
              <strong>{`because creativity breeds creativity`}</strong>
            </q>
          </h5>
          <p>
            <small>- author unknown</small>
          </p>

          <div className="mt-5">
            <p>
              Because connection is a basic human need. Because we believe both
              consumer and creator will prosper and advance in a relationship
              and environment they construct. We are the platform of space for
              this relationship to exist and develop.
            </p>
            <p className="mt-5">
              {`We would like to provide you the consumer your own space for
              privacy, and flexibility in determining how you consume fitness &
              wellness - help in your health. We would like to provide you the
              instructor the facility to operate your own brand and persona from
              - help in your wealth.`}
            </p>
            <p className="mt-5">
              Our commitment is to you.
            </p>
          </div>
        </Col>
        <Col sm={0}></Col>
      </Row>
    </Container>
  )
}

export default Commitment