import { Container, Spinner } from 'react-bootstrap'

const CustomSpinner = () => {
  return (
    <Container className="text-center p-5">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  )
}

export default CustomSpinner