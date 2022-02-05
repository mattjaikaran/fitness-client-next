import { useRouter } from 'next/router'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import styles from './TextWithCTA.module.scss'

const TextWithCTA = ({ text, text2, impact, btnText, btnLink }) => {
  const router = useRouter()
  return (
    <div className={styles.textWithCTA}>
      <Container className="py-5 p-sm-5">
        <h4 className={`${styles.text}`}>{text}</h4>
        {text2 && <h4 className="mt-5">{text2}</h4>}
        {impact && <h4 className="mt-3">{impact}</h4>}
        {btnText && (
          <div>
            <Button
              size="lg"
              variant="outline-primary hidden-xs mt-5"
              onClick={() => router.push(btnLink)}>
              {btnText}
            </Button>
            <div className="d-grid mt-3">
              <Button
                size="lg"
                variant="outline-primary visible-xs mt-5"
                onClick={() => router.push(btnLink)}>
                {btnText}
              </Button>
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}

export default TextWithCTA