import { Navbar, Nav, Container } from 'react-bootstrap'

const DashboardHeader = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Classes</Nav.Link>
            <Nav.Link href="#pricing">Instructors</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default DashboardHeader