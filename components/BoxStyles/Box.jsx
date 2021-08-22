import { Card, Button } from 'react-bootstrap'
import styles from './BoxStyles.module.scss'

const Box = ({ name, description, btnLink }) => {
  return (
    <Card border="light" className={styles.box}>
      <h3 className="my-3">{name}</h3>
      <Card.Body className="boxCard d-flex flex-column">
        <p className={styles.boxDescription}>{description}</p>
        <div className="mt-3">
          <Button variant="outline-secondary" href={btnLink}>
            Details
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Box