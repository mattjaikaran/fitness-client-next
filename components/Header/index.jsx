import { useState, forwardRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { 
  Navbar, 
  Nav, 
  NavDropdown, 
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Dropdown,
  Button 
} from 'react-bootstrap'
import { BiSearch } from 'react-icons/bi'
import { navRoutes } from '@/copy/navRoutes'
import style from './Header.module.scss'

const Header = () => {
  const router = useRouter()
  const handleSearchSubmit = e => {
    console.log('submit');
  }
  
  const renderNavLinks = () => {
    return navRoutes.map((navItem) => {
      return (
        <Nav.Link key={navItem.id} onClick={() => router.push(navItem.link)}>
          {navItem.name}
        </Nav.Link>
      )
    })
  }
  const CustomToggle = forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault()
        onClick(e)
      }}>
      {children}
    </a>
  ))
  const CustomMenu = forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('')

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}>
          <Form onSubmit={handleSearchSubmit}>
            <FormControl
              autoFocus
              className="mx-3 my-2 w-auto"
              placeholder="Type to Search"
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
            <div className="d-grid">
              <Button block="true" type="submit" variant="outline-primary">
                Search
              </Button>
            </div>
          </Form>
        </div>
      )
    }
  )
  return (
    <Navbar
      className={style.header}
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand>
          <Link href="/">sStudioss</Link>
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">{renderNavLinks()}</Nav>
          <Nav>
            <Nav.Link href="/signin">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Dropdown>
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            <Button variant="outline-primary">
              <BiSearch />
            </Button>
          </Dropdown.Toggle>

          <Dropdown.Menu as={CustomMenu}>
            <Dropdown.Item eventKey="1">Red</Dropdown.Item>
            <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
              Orange
            </Dropdown.Item>
            <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* <NavDropdown
          drop="start"
          title={
            <Button variant="outline-primary">
              <BiSearch />
            </Button>
          }
          id="basic-nav-dropdown">
          <NavDropdown.Item href="#">
            <Form>
              <FormControl
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Button variant="outline-primary">
                Search
              </Button>
            </Form>
          </NavDropdown.Item>
        </NavDropdown> */}
      </Container>
    </Navbar>
  )
}

export default Header