import { Card, ListGroup, Accordion } from 'react-bootstrap'

const sampleResults = [
  {
    id: 1,
    title: 'Yoga',
    date: '06/22/2022',
    time: '12:00PM',
    instructor: 'Jesse Smith',
    location: 'Tribeca',
    room: 'Nuclear Box',
    capacity: 12,
    studentsBooked: 2,
    equipmentProvided: ['Yoga Mats', 'Towels'],
    equipmentRequired: null
  },
  {
    id: 2,
    title: 'Spin',
    date: '06/22/2022',
    time: '11:00AM',
    instructor: 'Amanda Butler',
    location: 'Tribeca',
    room: 'Ethereal Box',
    capacity: 10,
    studentsBooked: 9,
    equipmentProvided: ['Bicycle'],
    equipmentRequired: ['Thing 1', 'Thing 2']
  }
]

const renderEquipment = (list) => list.map((e) => <li key={e}>{e}</li>)

const ClassSearchResults = () => {
  const renderResults = () => {
    return sampleResults.map((result, i) => {
      const {
        id,
        title,
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
            <ul>
              <li>
                Capacity: {' '}
                <span
                  style={{ color: capacity - studentsBooked < 3 && 'red' }}>
                  {studentsBooked} / {capacity}
                </span>
              </li>
              {/* Can link to instructor page */}
              <li>Instructor: {instructor}</li>
              <li>
                Equipment Provided:
                <ul>{renderEquipment(equipmentProvided)} </ul>
              </li>
              {equipmentRequired && (
                <li>
                  Equipment Provided:
                  <ul>{renderEquipment(equipmentRequired)} </ul>
                </li>
              )}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      )
    })
  }
  return (
    <Card border="light">
      <Card.Body className="orpheus">
        <Card.Title className="text-center">Search Results</Card.Title>
        {/* <ListGroup>{renderResults()}</ListGroup> */}
        <Accordion>{renderResults()}</Accordion>
      </Card.Body>
    </Card>
  )
}

export default ClassSearchResults