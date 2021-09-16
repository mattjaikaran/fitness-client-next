import { useRouter } from 'next/router'
import { Card, Button } from 'react-bootstrap'
import styles from './Box.module.scss'

const Box = ({ slug, name, description, btnText, onClick }) => {
  const router = useRouter()
  if (onClick) {
    return (
      <Card border="light" className={styles.box}>
        <h3 className="my-3">{name}</h3>
        <Card.Body className="boxCard d-flex flex-column">
          <p className={styles.boxDescription}>{description}</p>
          <div className="mt-3">
            <Button
              size="lg"
              variant="outline-secondary"
              onClick={onClick}>
              {btnText}
            </Button>
          </div>
        </Card.Body>
      </Card>
    )
  }  
  return (
    <Card border="light" className={styles.box}>
      <h3 className="my-3">{name}</h3>
      <Card.Body className="boxCard d-flex flex-column">
        <p className={styles.boxDescription}>{description}</p>
        <div className="mt-3">
          <Button 
            size="lg" 
            variant="outline-secondary" 
            onClick={() => router.push(`/style/${slug}`)}>
            {btnText}
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Box