import { useState } from 'react'
import { Container, Tabs, Tab } from 'react-bootstrap'
import {
  tribecaRootedSchedule,
  tribecaNuclearSchedule,
  flatironNaturalSchedule,
} from '@/copy/studioLocations'
import RateTable from './RateTable'
import style from './RatesTabs.module.scss'

const RatesTabs = () => {
  const [key, setKey] = useState('nuclear')
  return (
    <Container fluid="sm" className="px-0">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className={style.ratesTabs}>
        <Tab className={style.tab} eventKey="nuclear" title="Nuclear Box">
          <RateTable box={tribecaNuclearSchedule} />
        </Tab>
        <Tab className={style.tab} eventKey="rooted" title="Rooted Box">
          <RateTable box={tribecaRootedSchedule} />
        </Tab>
      </Tabs>
    </Container>
  )
}

export default RatesTabs