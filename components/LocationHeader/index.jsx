import { Row, Card, Col, Button } from 'react-bootstrap'

const LocationHeader = ({ name, pageDetails }) => {
  const renderBoxDetails = () => {
    return pageDetails?.boxes.map((box) => {
      const { id, name, size, capacity, boxDescription } = box
      return (
        <Col key={id} md={6} className="mb-5">
          <Card className="bg-dark">
            <h3 className="text-center">{name}</h3>
            <h4 className="text-center">{size} sq ft.</h4>
            <Card.Body className="px-md-5">
              <div className="orpheus ml-sm-5">
                <ul>
                  {boxDescription.map((description, i) => (
                    <li key={i}>{description}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto text-center">
                <p>Max Athletes - {capacity}</p>
                <Button variant="outline-primary" href="/style/1">
                  Book
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      )
    })
  }
  return (
    <div className="bg-dark p-5">
      <div className="mb-5 text-center">
        <h1>Studios {name}</h1>
        <h5 className="mt-5">{pageDetails?.subtitle}</h5>
        <h5 className="mt-3">{pageDetails?.subtitle2}</h5>
      </div>
      <Row>
        {pageDetails && renderBoxDetails()}
        {/* <Col md={6} className="mb-5">
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
        </Col> */}
      </Row>
    </div>
  )
}

export default LocationHeader