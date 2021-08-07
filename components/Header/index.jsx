import Link from 'next/link'
import { 
  Navbar, 
  Nav, 
  NavDropdown, 
  Container,
  Form,
  FormControl,
  Button 
} from 'react-bootstrap'
import style from './Header.module.scss'

const Header = () => {
  return (
    <Navbar className={style.header} collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand>
          <Link href="/">Studios</Link>
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link>
              <Link href="/locations">Locations</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/instructors">Instructors</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/calendar">Calendar</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/actions">Actions</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/style">Style</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/curate">Curate</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/membership">Membership</Link>
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="/signin">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-primary">Search</Button>
        </Form> */}
      </Container>
    </Navbar>
  )
}

export default Header