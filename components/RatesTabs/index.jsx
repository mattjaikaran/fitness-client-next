import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import {
  tribecaRootedSchedule,
  tribecaNuclearSchedule,
  flatironNaturalSchedule,
} from '@/copy/studioLocations'
import RateTable from './RateTable'
import styles from './RatesTabs.module.scss'

const RatesTabs = () => {
  const [key, setKey] = useState('nuclear')
  return (
    <Container fluid="sm" className="px-0">
      <Tabs
        id="rate-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className={styles.ratesTabs}>
        <Tab className={styles.tab} eventKey="nuclear" title="Nuclear Box">
          <RateTable box={tribecaNuclearSchedule} />
        </Tab>
        <Tab className={styles.tab} eventKey="rooted" title="Rooted Box">
          <RateTable box={tribecaRootedSchedule} />
        </Tab>
      </Tabs>
    </Container>
  )
}

export default RatesTabs