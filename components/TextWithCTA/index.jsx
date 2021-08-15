import { Container, Button } from 'react-bootstrap'
import style from './TextWithCTA.module.scss'

const TextWithCTA = ({ text, btnText, btnLink }) => {
  return (
    <div className={style.textWithCTA}>
      <Container className="p-5">
        <h5 className="mb-5 px-md-5">{text}</h5>
        <Button variant="outline-primary" href={btnLink}>
          {btnText}
        </Button>
      </Container>
    </div>
  )
}

export default TextWithCTA