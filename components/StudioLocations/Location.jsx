import { useRouter } from 'next/router'
import { Card, Button } from 'react-bootstrap'
import styles from './StudioLocations.module.scss'

const Location = ({
  name,
  address,
  launchDate,
  description,
  btnText,
  btnLink,
}) => {
  const router = useRouter()
  return (
    <Card border="light" className={styles.location}>
      <h3 className="my-3">{name}</h3>

      <Card.Body className="d-flex flex-column">
        <p className="orpheus">{launchDate}</p>
        {/* {address && (
          <p className="orpheus">
            {address.street}
            <br />
            {address.city}, {address.state} {address.zip}
            <br />
            {address.phone}
          </p>
        )} */}
        <p className="orpheus">{description}</p>
        {/* commented out for launch */}
        {/* <div className="mt-auto d-grid">
          <Button
            size="lg"
            variant="outline-secondary"
            onClick={() => router.push(btnLink)}>
            {btnText}
          </Button>
        </div> */}
      </Card.Body>
    </Card>
  )
}

export default Location