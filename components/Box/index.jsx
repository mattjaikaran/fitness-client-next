import { useRouter } from 'next/router'
import { Card, Button } from 'react-bootstrap'
import styles from './Box.module.scss'

const Box = ({
  slug,
  name,
  descriptionOne,
  impactStatement,
  descriptionTwo,
  btnText,
  onClick
}) => {
  const router = useRouter()
  if (onClick) {
    return (
      <Card border="light" className={styles.box}>
        <h3 className="my-3">{name}</h3>
        <Card.Body className="boxCard">
          <p className={styles.boxDescription}>{description}</p>
          <Button
            size="lg"
            variant="outline-secondary mt-3 hidden-xs"
            onClick={onClick}>
            {btnText}
          </Button>
          <div className="d-grid mt-3">
            <Button
              size="lg"
              variant="outline-secondary visible-xs"
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
      <Card.Body className="boxCard orpheus">
        <p className={styles.boxDescription}>{descriptionOne}</p>
        <p className="my-0">{impactStatement}</p>
        <p>{descriptionTwo}</p>
        {btnText && (
          <>
            <Button
              size="lg"
              variant="outline-secondary mt-3 hidden-xs"
              onClick={() => router.push(`/style/${slug}`)}>
              {btnText}
            </Button>
            <div className="d-grid mt-3">
              <Button
                size="lg"
                variant="outline-secondary visible-xs"
                onClick={() => router.push(`/style/${slug}`)}>
                {btnText}
              </Button>
            </div>
          </>
        )}
      </Card.Body>
    </Card>
  )
}

export default Box