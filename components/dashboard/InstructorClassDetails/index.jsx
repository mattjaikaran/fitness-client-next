import { Card, Button } from 'react-bootstrap'
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
          <Card.Subtitle>{description}</Card.Subtitle>
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
          <Button variant="outline-primary" size="large">Edit Class</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default InstructorClassDetails