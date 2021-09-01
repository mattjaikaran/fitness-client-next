import Link from 'next/link'
import { useRouter } from 'next/router'
import { 
  Navbar, 
  Nav, 
  NavDropdown, 
  Container,
  Form,
  FormControl,
  Button 
} from 'react-bootstrap'
import { BiSearch } from 'react-icons/bi'
import { navRoutes } from '@/copy/navRoutes'
import style from './Header.module.scss'

const Header = () => {
  const router = useRouter()
  
  const renderNavLinks = () => {
    return navRoutes.map((navItem) => {
      return (
        <Nav.Link key={navItem.id} onClick={() => router.push(navItem.link)}>
          {navItem.name}
        </Nav.Link>
      )
    })
  }
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
          <Nav className="mx-auto">
            {renderNavLinks()}
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
          <Button variant="outline-primary">
            <BiSearch />
          </Button>
        </Form> */}
      </Container>
    </Navbar>
  )
}

export default Header