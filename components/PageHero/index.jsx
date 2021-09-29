import styles from './PageHero.module.scss'

const PageHero = ({ title, img }) => {
  return (
    <div 
      className={styles.pageHero}
      // style={{ backgroundImage: `url(${img})` }}
    >
      <h1 className={styles.title}>{title}</h1>
    </div>
  )
}

export default PageHero