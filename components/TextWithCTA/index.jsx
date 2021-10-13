import { Container, Button } from 'react-bootstrap'
import styles from './TextWithCTA.module.scss'

const TextWithCTA = ({ text, text2, impact, btnText, btnLink }) => {
  return (
    <div className={styles.textWithCTA}>
      <Container className="py-md-5 p-sm-5">
        <h4 className={`${styles.text}`}>
          {text}
        </h4>
        {text2 && <h4 className="mt-5">{text2}</h4>}
        {impact && <h4 className="mt-3">{impact}</h4>}
        {btnText && (
          <Button size="lg" variant="outline-primary mt-5" href={btnLink}>
            {btnText}
          </Button>
        )}
      </Container>
    </div>
  )
}

export default TextWithCTA