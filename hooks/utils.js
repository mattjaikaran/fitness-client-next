import { Nav } from 'react-bootstrap'

export const renderNavLinks = (routes, router) =>
  routes.map((navItem) => {
    return (
      <Nav.Link
        key={navItem.id}
        className="montserrat"
        onClick={() => router.push(navItem.link)}>
        {navItem.name}
      </Nav.Link>
    )
  })

  export const renderListItems = (list) => 
    list.map((listItem) => <li key={listItem}>{listItem}</li>)