import { Container, Row, Col } from 'react-bootstrap'
import { boxStyles } from '@/copy/boxStyles'
import Box from './Box'
import styles from './BoxStyles.module.scss'

const BoxStyles = () => {
  const renderBoxDetails = () => {
    return boxStyles.map((box) => {
      const { id, name, description, btnText, btnLink } = box
      return (
        <Col key={id} lg={12} className={styles.boxCol}>
          <Box
            name={name}
            description={description}
            btnText={btnText}
            btnLink={btnLink}
          />
        </Col>
      )
    })
  }
  return (
    <Container className={styles.boxDetails}>
      <Row className={styles.boxDetailsRow}>{renderBoxDetails()}</Row>
    </Container>
  )
}

export default BoxStyles