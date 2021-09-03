import { Row, Card, Col, Button } from 'react-bootstrap'

const LocationHeader = ({ name, description, subDescription }) => {
  return (
    <div className="bg-dark text-center p-5">
      <div className="mb-5">
        <h1>Studios {name}</h1>
        <h5 className="my-5">{description}</h5>
        <h5>{subDescription}</h5>
      </div>
      <Row>
        <Col md={6} className="mb-5">
          <Card className="bg-dark">
            <h3>Ethereal Box</h3>
            <h4>500 sq ft.</h4>
            <Card.Body className="">
              <p className="px-md-5">
                All white flooring, walls, and celing. <br />
                REFLECTIVE. ILLUMINARY. VAST. <br />
                This box is for confidence, crisp action and clear direction,
                spirit.
              </p>
              <p>Max Athletes - 16</p>
              <div className="mt-auto">
                <Button variant="outline-primary" href="/style/1">
                  Book
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="bg-dark">
            <h3>Rooted Box</h3>
            <h4>250 sq ft.</h4>
            <Card.Body className="">
              <p className="px-md-5">
                Natural Wood floors, white walls, living plants. <br />
                EARTH. NATURE. ELEMENT. <br />
                This box is calm, soft and comfortable, the simplistic, basic
                tone is grounding.
              </p>
              <p>Max Athletes - 8</p>
              <div className="mt-auto">
                <Button variant="outline-primary" href="/style/1">
                  Book
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default LocationHeader