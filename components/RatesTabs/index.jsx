import { useState } from 'react'
import { Container, Tabs, Tab } from 'react-bootstrap'
import { flatironEtherealSchedule } from '@/copy/studioLocations'
import RateTable from './RateTable'
import style from './RatesTabs.module.scss'

const RatesTabs = () => {
  const [key, setKey] = useState('ethereal')
  return (
    <Container>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className={style.ratesTabs}>
        <Tab className={style.tab} eventKey="ethereal" title="Ethereal Box">
          <RateTable box={flatironEtherealSchedule} />
        </Tab>
        <Tab className={style.tab} eventKey="rooted" title="Rooted Box">
          <RateTable box={flatironEtherealSchedule} />
        </Tab>
      </Tabs>
    </Container>
  )
}

export default RatesTabs