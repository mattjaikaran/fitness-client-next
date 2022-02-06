import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { renderListItems } from '@/hooks/utils'

const InstructorClassDetails = ({ fitnessClass }) => {
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
    price,
    length,
    studentsBooked,
    equipmentProvided,
    equipmentRequired
  } = fitnessClass
  return (
    <div>
      <p>InstructorClassDetails</p>
      <Card border="light" className="orpheus">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <p>Description: {description}</p>
          <div>
            <ul>
              <li>Location: {location}</li>
              <li>Room: {room}</li>
              <li>Date: {date}</li>
              <li>Time: {time}</li>
              <li>Length: {length} mins</li>
              <li>
                Capacity:{' '}
                <span style={{ color: capacity - studentsBooked < 3 && 'red' }}>
                  {studentsBooked} / {capacity}
                </span>
              </li>
              {/* Can link to instructor page */}
              <li>Instructor: {instructor}</li>
              <li>Price: {`$${price}`}</li>
              <li>
                Equipment Provided:
                <ul>{renderListItems(equipmentProvided)} </ul>
              </li>
              {equipmentRequired && (
                <li>
                  Equipment Provided:
                  <ul>{renderListItems(equipmentRequired)} </ul>
                </li>
              )}
            </ul>
          </div>
          <Button variant="outline-primary hidden-xs" size="lg">
            Edit Class
          </Button>
          <div className="mt-3 d-grid visible-xs">
            <Button variant="outline-primary" size="lg">
              Edit Class
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default InstructorClassDetails