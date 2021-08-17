import { Container } from 'react-bootstrap'

const InstructorHeader = () => {
  return (
    <div className="text-center bg-dark p-5">
      <Container className="px-5">
        <h1>Josie Norman</h1>
        <p>
          <small>Yoga Instructor</small>
        </p>
        <p className="mt-3 p-md-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          veritatis adipisci molestiae esse quod ratione at laudantium ipsam
          voluptatum culpa magnam libero illum eligendi dolore, aspernatur
          perferendis
        </p>
      </Container>
    </div>
  )
}

export default InstructorHeader
