import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import { renderListItems } from '@/hooks/utils'
import { sampleClasses } from '@/copy/sampleClasses'

const ClassSearchResults = () => {
  const renderResults = () => {
    return sampleClasses.map((result, i) => {
      const {
        id,
        title,
        description,
        date,
        time,
        instructor,
        location,
        room,
        capacity,
        studentsBooked,
        equipmentProvided,
        equipmentRequired
      } = result
      return (
        <Accordion.Item key={id} eventKey={i}>
          <Accordion.Header>
            {title} - {date} {time}
          </Accordion.Header>
          <Accordion.Body>
            <p>{description}</p>
            <ul>
              <li>
                Capacity:{' '}
                <span style={{ color: capacity - studentsBooked < 3 && 'red' }}>
                  {studentsBooked} / {capacity}
                </span>
              </li>
              {/* Can link to instructor page */}
              <li>Instructor: {instructor}</li>
              <li>Location: {location}</li>
              <li>Room: {room}</li>
              <li>
                Equipment Provided:
                <ul>{renderListItems(equipmentProvided)} </ul>
              </li>
              {equipmentRequired && (
                <li>
                  Equipment Provided:
                  <ul>{renderListItems(equipmentRequired)}</ul>
                </li>
              )}
            </ul>
            <div className="d-grid">
              <Button variant="outline-primary">
                Book Class
              </Button>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      )
    })
  }
  return (
    <Card border="light">
      <Card.Body className="orpheus">
        <Card.Title className="text-center">Search Results</Card.Title>
        <Accordion>{renderResults()}</Accordion>
      </Card.Body>
    </Card>
  )
}

export default ClassSearchResults