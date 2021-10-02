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
              Because connection is a basic human need.
            </p>

            <p className="mt-5">
              We are committed to this methodology of PAY-PER-USE fitness.
            </p>
            <p className="mt-5">
              We simply would like to highlight, support and strengthen the
              relationship between the very best in creation, motivation and the
              community of athletes across the nation.
            </p>
            <p className="mt-5">
              We believe consumers and creators will prosper in a relationship
              and performance they construct. We believe there is a nation of
              fitness professionals out there who want to inspire, educated and
              motivate on their own wavelength. We are the platform of space for
              that relationship to exist and develop.
            </p>
          </div>
        </Col>
        <Col sm={0}></Col>
      </Row>
    </Container>
  )
}

export default Commitment