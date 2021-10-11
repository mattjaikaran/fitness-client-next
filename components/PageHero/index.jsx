import styles from './PageHero.module.scss'

const PageHero = ({ title, subtitle }) => {
  return (
    <div
      className={styles.pageHero}
    >
      <div className={styles.textWrapper}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className="orpheus mt-5">{subtitle}</p>}
        <hr className="hr-custom-dark mt-4 mt-sm-5" />
      </div>
    </div>
  )
}

export default PageHero