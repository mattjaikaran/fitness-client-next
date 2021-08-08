import { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import style from './RatesTabs.module.scss'

const RatesTabs = () => {
  const [key, setKey] = useState('ethereal')
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className={style.ratesTabs}>
      <Tab className={style.tab} eventKey="ethereal" title="Ethereal Box">
        <p className="text-primary">Ethereal Box Rates</p>
      </Tab>
      <Tab className={style.tab} eventKey="rooted" title="Rooted Box">
        <p className="text-primary">Rooted Box Rates</p>
      </Tab>
    </Tabs>
  )
}

export default RatesTabs