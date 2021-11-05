import { Card } from 'react-bootstrap'
import CustomButton from '@/components/CustomButton'
import styles from './Box.module.scss'

const Box = ({
  slug,
  name,
  description,
  descriptionOne,
  impactStatement,
  descriptionTwo,
  btnText,
  onClick
}) => {
  console.log('descriptionOne', descriptionOne);
  // if (onClick) {
  //   return (
  //     <Card border="light" className={styles.box}>
  //       <h3 className="my-3">{name}</h3>
  //       <Card.Body className="boxCard">
  //         <p className={styles.boxDescription}>{descriptionOne}</p>
  //         <p className="my-0">{impactStatement}</p>
  //         <p>{descriptionTwo}</p>
  //         <CustomButton btnText={btnText} onClick={onClick} />
  //       </Card.Body>
  //     </Card>
  //   )
  // }
  return (
    <Card border="light" className={styles.box}>
      <h3 className="my-3">{name}</h3>
      <Card.Body className="boxCard orpheus">
        <p className={styles.boxDescription}>{descriptionOne}</p>
        <p className="my-0">{impactStatement}</p>
        <p>{descriptionTwo}</p>
        {btnText && <CustomButton btnText={btnText} onClick={onClick} btnLink={`/styles/${slug}`} />}
      </Card.Body>
    </Card>
  )
}

export default Box