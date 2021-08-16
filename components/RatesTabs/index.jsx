import { useState } from 'react'
import { Table, Tabs, Tab } from 'react-bootstrap'
import { etherealBoxTimeRates } from '@/copy/studioLocations'
import style from './RatesTabs.module.scss'

const RatesTabs = () => {
  const [key, setKey] = useState('ethereal')


  const renderEtherealTableDetails = () => {
    return etherealBoxTimeRates.map(time => {
      const { timeSlotId, timeSlot, price} = time
      return (
        <tr key={timeSlotId}>
          <td>
            <p className="d-inline mr-5">{timeSlot}</p>
            <p className="d-inline">${price.toFixed(2)}</p>
          </td>
        </tr>
      )
    })
  }


  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className={style.ratesTabs}>
      <Tab className={style.tab} eventKey="ethereal" title="Ethereal Box">
        <Table>
          <thead>
            <tr>
              <th>Monday to Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
          </thead>
          <tbody>{renderEtherealTableDetails()}</tbody>
        </Table>
      </Tab>
      <Tab className={style.tab} eventKey="rooted" title="Rooted Box">
        <p className="text-primary">Rooted Box Rates</p>
      </Tab>
    </Tabs>
  )
}

export default RatesTabs