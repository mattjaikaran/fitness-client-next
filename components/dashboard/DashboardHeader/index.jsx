import { useRouter } from 'next/router'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { renderNavLinks } from '@/hooks/utils'
import { dashboardRoutes } from '@/copy/navRoutes'

const DashboardHeader = () => {
  const router = useRouter()
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={() => router.push('/dashboard')}>
          Fitness Dashboard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {renderNavLinks(dashboardRoutes, router)}
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default DashboardHeader