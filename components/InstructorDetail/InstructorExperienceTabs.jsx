import { Container, Tabs, Tab, Col } from 'react-bootstrap'
import styles from './InstructorDetail.module.scss'

const InstructorExperienceTabs = ({ experience }) => {
  return (
    <Container className="mt-3 p-md-5 d-none row d-sm-flex orpheus">
      <Col xs={0} sm={2}></Col>
      <Col sm={10}>
        <Tabs
          defaultActiveKey="expertise"
          id="instructor-experience-tabs"
          className={styles.instructorTabs}>
          <Tab
            eventKey="expertise"
            title="Expertise"
            className={styles.instructorTab}>
            <ul>
              {experience?.expertise?.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </Tab>
          <Tab
            eventKey="credentials"
            title="Credentials"
            className={styles.instructorTab}>
            <ul>
              {experience?.credentials?.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </Tab>
        </Tabs>
      </Col>
      <Col xs={0} sm={2}></Col>
    </Container>
  )
}

export default InstructorExperienceTabs
