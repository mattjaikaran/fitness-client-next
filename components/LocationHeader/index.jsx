import { Row, Col, Button } from 'react-bootstrap'

const LocationHeader = ({ name, description, subDescription }) => {
  return (
    <div className="bg-dark text-center">
      <div>
        <h1>Studios {name}</h1>
        <h5>{description}</h5>
        <h5>{subDescription}</h5>
      </div>
      <Row>
        <Col span={6}>
          <h3>Ethereal Box</h3>
          <h4>500 sq ft.</h4>
          <p>
            All white flooring, walls, and celing. <br />
            REFLECTIVE. ILLUMINARY. VAST. <br />
            This box is for confidence, crisp action and clear direction,
            spirit.
          </p>
          <p>Max Athletes - 16</p>
          <Button variant="outline-primary" href="#">
            Book
          </Button>
        </Col>
        <Col span={6}>
          <h3>Rooted Box</h3>
          <h4>250 sq ft.</h4>
          <p>
            Natural Wood floors, white walls, living plants. <br />
            EARTH. NATURE. ELEMENT. <br />
            This box is calm, soft and comfortable, the simplistic, basic tone
            is grounding.
          </p>
          <p>Max Athletes - 8</p>
          <Button variant="outline-primary" href="#">
            Book
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default LocationHeader