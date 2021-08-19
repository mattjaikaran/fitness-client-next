import { Container, Image } from 'react-bootstrap'
import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <div
      className={styles.hero}
      style={{
        backgroundImage: 'url(https://via.placeholder.com/1200x400)'
      }}></div>
  )
}

export default Hero