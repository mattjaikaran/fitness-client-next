import { useRouter } from 'next/router'
import { Row, Card, Col, Button } from 'react-bootstrap'

const LocationHeader = ({ name, pageDetails }) => {
  const router = useRouter()
  const renderBoxDetails = () => {
    return pageDetails?.boxes.map((box) => {
      const { id, slug, name, size, capacity, boxDescription } = box
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
                <Button 
                  size="lg"
                  variant="outline-primary" 
                  onClick={() => router.push(`/style/${slug}`)}>
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
      </Row>
    </div>
  )
}

export default LocationHeader