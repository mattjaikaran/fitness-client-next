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
            <p>Because connection is a basic human need.</p>

            <p className="mt-5">
              {`Because PAY-PER-USE fitness & wellness studios will strengthen the
              relationship between providers and consumers everywhere.`}
            </p>
            <p className="mt-5">
              We believe both will prosper and advance in a relationship and
              environment they construct.
            </p>
            <p className="mt-5">
              We know the nation of fitness professionals who want to inspire,
              educate and motivate on their own wavelength. We are the platform
              of space for that relationship to exist and develop.
            </p>
            <p className="mt-5">
              {`We would like to provide you the consumer your own space for
              privacy, and flexibility in determining how you consume fitness &
              wellness. We would like to provide you the instructor the facility
              to operate your own brand and persona from.`}
            </p>
          </div>
        </Col>
        <Col sm={0}></Col>
      </Row>
    </Container>
  )
}

export default Commitment