import { Table, Dropdown, Button } from 'react-bootstrap'

const sampleClasses = [
  {
    id: 1,
    title: 'Yoga 101',
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
    title: 'Spin 3000',
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

const ClassTable = () => {
  const renderFitnessClasses = () => sampleClasses.map(fitnessClass => {
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
    } = fitnessClass
    return (
      <tr key={id}>
        <td>{date} {time}</td>
        <td>{location}</td>
        <td>{room}</td>
        <td>{title}</td>
        <td>{instructor}</td>
        <td>Pending</td>
        <td>{studentsBooked}/{capacity}</td>
        <td>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-actions">
              Class Actions
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>View Details</Dropdown.Item>
              <Dropdown.Item>Update Details</Dropdown.Item>
              <Dropdown.Item>Reschedule</Dropdown.Item>
              <Dropdown.Item>Change Instructor</Dropdown.Item>
              <Dropdown.Item>
                <span style={{ color: 'red' }}>Cancel Class</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    )
  })
  return (
    <Table bordered responsive>
      <thead>
        <tr>
          <th>Date</th>
          <th>Location</th>
          <th>Room</th>
          <th>Title</th>
          <th>Instructor</th>
          <th>Status</th>
          <th>Capacity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{renderFitnessClasses()}</tbody>
    </Table>
  )
}

export default ClassTable