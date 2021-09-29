import { Container, Row, Col } from 'react-bootstrap'
import { boxStyles } from '@/copy/boxStyles'
import Box from '@/components/Box'
import styles from './BoxStyles.module.scss'

const BoxStyles = () => {
  const renderBoxDetails = () => {
    return boxStyles.map((box) => {
      const { id, name, slug, description, btnText } = box
      return (
        <Col key={id} lg={12} className={styles.boxCol}>
          <Box
            name={name}
            slug={slug}
            description={description}
            // btnText={btnText}
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