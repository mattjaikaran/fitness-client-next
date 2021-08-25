import { Container } from 'react-bootstrap'
import { residency } from '@/copy/residency'

const Residency = () => {
  return (
    <Container>
      <h1 className="my-5">Residency</h1>
      <p>{residency.p1}</p>
      <p>{residency.p2}</p>
      <p>{residency.p3}</p>
      <p>
        <strong>{residency.p4}</strong>
      </p>
      <p>{residency.p5}</p>
    </Container>
  )
}

export default Residency