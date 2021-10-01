import styles from './PageHero.module.scss'

const PageHero = ({ title, subtitle, img }) => {
  return (
    <div
      className={styles.pageHero}
      // style={{ backgroundImage: `url(${img})` }}
    >
      <div className={styles.textWrapper}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className="orpheus mt-5">{subtitle}</p>}
      </div>
    </div>
  )
}

export default PageHero