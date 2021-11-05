import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { 
  Navbar, 
  Nav,
  Row,
  Col, 
  Modal, 
  Container,
  Form,
  FormControl,
  Button 
} from 'react-bootstrap'
import { BiSearch } from 'react-icons/bi'
import { navRoutes } from '@/copy/navRoutes'
import styles from './Header.module.scss'

const Header = () => {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)  
  const handleSearchSubmit = e => {
    e.preventDefault()
    console.log('submit', searchValue)
    setSearchValue('')
  }
  
  const renderNavLinks = () => {
    return navRoutes.map((navItem) => {
      return (
        <Nav.Link key={navItem.id} className="montserrat" onClick={() => router.push(navItem.link)}>
          {navItem.name}
        </Nav.Link>
      )
    })
  }
  return (
    <Navbar
      className={styles.header}
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark">
      <Container className="d-block d-lg-flex">
        <Row>
          <Col xs={3} sm={4} md={5} className="pt-1">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </Col>
          <Col xs={2} sm={1} className="d-md-none" />
          <Col xs={4} sm={4} className="pt-2 pb-md-2">
            <Navbar.Brand className="montserrat">
              <Link href="/">SSSS</Link>
            </Navbar.Brand>
          </Col>
          <Col
            xs={2}
            className="d-lg-none text-end">
            <Nav.Link className="montserrat">
              <Button variant="outline-primary" onClick={handleShow}>
                <BiSearch />
              </Button>
            </Nav.Link>
          </Col>
        </Row>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">{renderNavLinks()}</Nav>
          <Nav
            // hidden for launch
            style={{ visibility: 'hidden' }}>
            <Nav.Link className="mt-1" href="/signin">
              Sign In
            </Nav.Link>
            <Nav.Link href="#" className="d-none d-sm-none">
              <Button variant="outline-primary" onClick={handleShow}>
                <BiSearch />
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Search</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSearchSubmit}>
              <FormControl
                autoFocus
                placeholder="Type to Search"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
              />
              <div className="d-grid mt-3">
                <Button block="true" type="submit" variant="outline-primary">
                  Search
                </Button>
              </div>
            </Form>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="outline-primary" onClick={handleSearchSubmit}>
              Search
            </Button>
          </Modal.Footer> */}
        </Modal>
      </Container>
    </Navbar>
  )
}

export default Header