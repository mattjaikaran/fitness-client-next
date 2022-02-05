import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const FilterClasses = () => {
  return (
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Button size="lg" variant="outline-secondary" type="submit">
        Search
      </Button>
    </Form>
  )
}

export default FilterClasses