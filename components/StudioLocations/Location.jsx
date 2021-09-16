import { useRouter } from 'next/router'
import { Card, Button } from 'react-bootstrap'
import styles from './StudioLocations.module.scss'

const Location = ({
  name,
  address,
  description,
  btnText,
  btnLink,
  text
}) => {
  const router = useRouter()
  return (
    <Card border="light" className={styles.location}>
      <h3 className="my-3">{name}</h3>

      {address && description ? (
        <Card.Body className="d-flex flex-column">
          <p className="orpheus">
            {address.street}
            <br />
            {address.city}, {address.state} {address.zip}
            <br />
            {address.phone}
          </p>
          <p className="orpheus">{description}</p>
          <div className="mt-auto d-grid">
            <Button
              size="lg"
              variant="outline-secondary"
              onClick={() => router.push(btnLink)}>
              {btnText}
            </Button>
          </div>
        </Card.Body>
      ) : (
        <>
          <p className="orpheus mt-3">{text}</p>
        </>
      )}
    </Card>
  )
}

export default Location