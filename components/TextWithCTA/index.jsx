import { Container, Button } from 'react-bootstrap'
import styles from './TextWithCTA.module.scss'

const TextWithCTA = ({ text, btnText, btnLink }) => {
  return (
    <div className={styles.textWithCTA}>
      <Container className="py-5 p-sm-5">
        <h4 className={`mb-5 ${styles.text}`}>
          {text}
        </h4>
        {btnText && (
          <Button size="lg" variant="outline-primary" href={btnLink}>
            {btnText}
          </Button>
        )}
      </Container>
    </div>
  )
}

export default TextWithCTA