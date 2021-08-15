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
  return (
    <Card border="light" className={styles.location}>
      <h3 className="my-3">{name}</h3>

      {address && description ? (
        <Card.Body className="d-flex flex-column">
          <p>
            {address.street}
            <br />
            {address.city}, {address.state} {address.zip}
            <br />
            {address.phone}
          </p>
          <p>{description}</p>
          <div className="mt-auto">
            <Button variant="outline-secondary" href={btnLink}>
              {btnText}
            </Button>
          </div>
        </Card.Body>
      ) : (
        <>
          <p>{text}</p>
        </>
      )}
    </Card>
  )
}

export default Location