import { Container } from 'react-bootstrap'
import { curate } from '@/copy/curate'

const Curate = () => {
  return (
    <Container className="text-center">
      <div className="px-5">
        <h2>{curate.title}</h2>
        <h2>{curate.title2}</h2>
        <h6 className="mt-5">{curate.paragraphOne}</h6>
        <h6 className="mt-5">{curate.paragraphTwo}</h6>
      </div>
    </Container>
  )
}

export default Curate