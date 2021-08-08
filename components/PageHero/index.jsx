import style from './PageHero.module.scss'

const PageHero = ({ title, img }) => {
  return (
    <div 
      className={style.pageHero}
      style={{ backgroundImage: `url(${img})` }}
    >
      <h1 className={style.title}>{title}</h1>
    </div>
  )
}

export default PageHero