import { Container, Button } from 'react-bootstrap'
import style from './TextWithCTA.module.scss'

const TextWithCTA = ({ text, btnText, btnLink }) => {
  return (
    <div className={style.textWithCTA}>
      <h5 className="mb-5">{text}</h5>
      <Button variant="outline-primary" href={btnLink}>{btnText}</Button>
    </div> 
  )
}

export default TextWithCTA