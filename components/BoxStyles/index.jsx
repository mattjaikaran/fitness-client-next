import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { boxStyles } from '@/copy/boxStyles'
import Box from '@/components/Box'
import styles from './BoxStyles.module.scss'

const BoxStyles = () => {
  const renderBoxDetails = () => {
    return boxStyles.map((box) => {
      const { id, name, slug, descriptionOne, impactStatement, descriptionTwo, btnText } = box
      return (
        <Col key={id} lg={12} className={styles.boxCol}>
          <Box
            name={name}
            slug={slug}
            descriptionOne={descriptionOne}
            impactStatement={impactStatement}
            descriptionTwo={descriptionTwo}
            btnText={btnText}
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