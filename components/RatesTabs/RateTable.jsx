import Table from 'react-bootstrap/Table'

const RateTable = ({ box }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th colSpan="2">
            <span className="hidden-xs">Monday to Friday</span>
            <span className="visible-xs">M - F</span>
          </th>
          <th>Rates</th>
          <th colSpan="2">Saturday</th>
          <th>Rates</th>
          <th colSpan="2">Sunday</th>
          <th>Rates</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="2">
            <p>{box.mondayToFriday[0].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.mondayToFriday[0].price.toFixed(2)}</p>
          </td>
          <td colSpan="2">
            <p>{box.saturday[0].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.saturday[0].price.toFixed(2)}</p>
          </td>
          <td colSpan="2">
            <p>{box.sunday[0].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.sunday[0].price.toFixed(2)}</p>
          </td>
        </tr>

        <tr>
          <td colSpan="2">
            <p>{box.mondayToFriday[1].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.mondayToFriday[1].price.toFixed(2)}</p>
          </td>
          <td colSpan="2">
            <p>{box.saturday[1].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.saturday[1].price.toFixed(2)}</p>
          </td>
          <td colSpan="2">
            <p>{box.sunday[1].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.sunday[1].price.toFixed(2)}</p>
          </td>
        </tr>

        <tr>
          <td colSpan="2">
            <p>{box.mondayToFriday[2].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.mondayToFriday[2].price.toFixed(2)}</p>
          </td>
          <td colSpan="2">
            <p>{box.saturday[2].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.saturday[2].price.toFixed(2)}</p>
          </td>
          <td colSpan="2">
            <p>{box.sunday[2].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.sunday[2].price.toFixed(2)}</p>
          </td>
        </tr>

        <tr>
          <td colSpan="2">
            <p>{box.mondayToFriday[3].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.mondayToFriday[3].price.toFixed(2)}</p>
          </td>
          <td colSpan="2">
            <p>{box.saturday[3].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.saturday[3].price.toFixed(2)}</p>
          </td>
          <td colSpan="2">
            <p>{box.sunday[3].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.sunday[3].price.toFixed(2)}</p>
          </td>
        </tr>

        <tr>
          <td colSpan="2">
            <p>{box.mondayToFriday[4].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.mondayToFriday[4].price.toFixed(2)}</p>
          </td>
          <td colSpan="2">
            <p>{box.saturday[4].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.saturday[4].price.toFixed(2)}</p>
          </td>
          <td colSpan="2">
            <p>{box.sunday[4].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.sunday[4].price.toFixed(2)}</p>
          </td>
        </tr>

        <tr>
          <td colSpan="2">
            <p>{box.mondayToFriday[5].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.mondayToFriday[5].price.toFixed(2)}</p>
          </td>
          <td colSpan="2">
            <p>{box.saturday[5].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.saturday[5].price.toFixed(2)}</p>
          </td>
          <td colSpan="2">
            <p>{box.sunday[5].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.sunday[5].price.toFixed(2)}</p>
          </td>
        </tr>

        <tr>
          <td colSpan="2">
            <p>{box.mondayToFriday[6].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.mondayToFriday[6].price.toFixed(2)}</p>
          </td>
          <td colSpan="2">
            <p>{box.saturday[6].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.saturday[6].price.toFixed(2)}</p>
          </td>
          <td colSpan="2">
            <p>{box.sunday[6].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.sunday[6].price.toFixed(2)}</p>
          </td>
        </tr>

        <tr>
          <td colSpan="2">
            <p>{box.mondayToFriday[7].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.mondayToFriday[7].price.toFixed(2)}</p>
          </td>
          <td colSpan="2">
            <p>{box.saturday[7].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.saturday[7].price.toFixed(2)}</p>
          </td>
          <td colSpan="2">
            <p>{box.sunday[7].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.sunday[7].price.toFixed(2)}</p>
          </td>
        </tr>

        <tr>
          <td colSpan="2">
            <p>{box.mondayToFriday[8].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.mondayToFriday[8].price.toFixed(2)}</p>
          </td>
          <td colSpan="2">
            <p>{box.saturday[8].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.saturday[8].price.toFixed(2)}</p>
          </td>
          <td colSpan="2">
            <p>{box.sunday[8].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.sunday[8].price.toFixed(2)}</p>
          </td>
        </tr>

        <tr>
          <td colSpan="2">
            <p>{box.mondayToFriday[9].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.mondayToFriday[9].price.toFixed(2)}</p>
          </td>
          <td colSpan="2">
            <p>{box.saturday[9].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.saturday[9].price.toFixed(2)}</p>
          </td>
          <td colSpan="2">
            <p>{box.sunday[9].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.sunday[9].price.toFixed(2)}</p>
          </td>
        </tr>

        <tr>
          <td colSpan="2">
            <p>{box.mondayToFriday[10].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.mondayToFriday[10].price.toFixed(2)}</p>
          </td>
          <td colSpan="2">
            <p>{box.saturday[10].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.saturday[10].price.toFixed(2)}</p>
          </td>
          <td colSpan="4"></td>
        </tr>

        <tr>
          <td colSpan="2">
            <p>{box.mondayToFriday[11].timeSlot}</p>
          </td>
          <td>
            <p className="">${box.mondayToFriday[11].price.toFixed(2)}</p>
          </td>
          <td colSpan="8"></td>
        </tr>
      </tbody>
    </Table>
  )
}

export default RateTable