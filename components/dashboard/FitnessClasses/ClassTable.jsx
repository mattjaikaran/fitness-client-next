import { Table, Dropdown, Button } from 'react-bootstrap'

const ClassTable = ({ fitnessClasses }) => {
  const renderFitnessClasses = () =>
    fitnessClasses.map((fitnessClass) => {
      const {
        id,
        title,
        date,
        time,
        instructor,
        location,
        room,
        capacity,
        price,
        studentsBooked
      } = fitnessClass
      return (
        <tr key={id}>
          <td>
            {date} {time}
          </td>
          <td>{location}</td>
          <td>{room}</td>
          <td>{title}</td>
          <td>{instructor}</td>
          <td>Pending</td>
          <td>
            {studentsBooked}/{capacity}
          </td>
          <td>{`$${price}`}</td>
          <td>{`$${price * studentsBooked}`}</td>
          <td>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-actions" variant="outline-primary">
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
          <th>Price</th>
          <th>Income</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{renderFitnessClasses()}</tbody>
    </Table>
  )
}

export default ClassTable