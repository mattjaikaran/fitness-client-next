import { useState } from 'react'
import { Container, Table, Tabs, Tab } from 'react-bootstrap'
import { etherealBoxTimeRates } from '@/copy/studioLocations'
import style from './RatesTabs.module.scss'

const RatesTabs = () => {
  const [key, setKey] = useState('ethereal')


  const renderEtherealTableDetails = () => {
    return etherealBoxTimeRates.map(time => {
      const { timeSlotId, timeSlot, price} = time
      return (
        <tr key={timeSlotId}>
          <td colSpan="2">
            <p className="">{timeSlot}</p>
          </td>
          <td>
            <p className="">${price.toFixed(2)}</p>
          </td>
          <td colSpan="2">
            <p>Saturday times</p>
          </td>
          <td>
            <p className="">${price.toFixed(2)}</p>
          </td>
          <td colSpan="2">
            <p>Sunday times</p>
          </td>
          <td>
            <p className="">${price.toFixed(2)}</p>
          </td>
        </tr>
      )
    })
  }


  return (
    <Container>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className={style.ratesTabs}>
        <Tab className={style.tab} eventKey="ethereal" title="Ethereal Box">
          <Table responsive>
            <thead>
              <tr>
                <th colSpan="2">Monday to Friday</th>
                <th>Rates</th>
                <th colSpan="2">Saturday</th>
                <th>Rates</th>
                <th colSpan="2">Sunday</th>
                <th>Rates</th>
              </tr>
            </thead>
            <tbody>{renderEtherealTableDetails()}</tbody>
          </Table>
        </Tab>
        <Tab className={style.tab} eventKey="rooted" title="Rooted Box">
          <Table responsive>
            <thead>
              <tr>
                <th colSpan="2">Monday to Friday</th>
                <th>Rates</th>
                <th colSpan="2">Saturday</th>
                <th>Rates</th>
                <th colSpan="2">Sunday</th>
                <th>Rates</th>
              </tr>
            </thead>
            <tbody>{renderEtherealTableDetails()}</tbody>
          </Table>
        </Tab>
      </Tabs>
    </Container>
  )
}

export default RatesTabs