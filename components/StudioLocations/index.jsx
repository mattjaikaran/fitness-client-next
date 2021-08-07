import { Row, Col, Button } from 'react-bootstrap'
import { studioLocations } from '@/copy/studio-locations'

export const Location = ({ id, name, address, description, btnText, btnLink, text }) => {
  return (
    <div className="location">
      <h3 className="my-3">{name}</h3>
      {address && description ? (
        <>
          <p>
            {address.street}
            <br />
            {address.city}, {address.state} {address.zip}
            <br />
            {address.phone}
          </p>
          <p>{description}</p>
          <Button variant="outline-secondary" href={btnLink}>
            {btnText}
          </Button>
        </>
      ) : (
        <>
          <p>{text}</p>
        </>
      )}
    </div>
  )
}

const StudioLocations = () => {
  const renderStudioDetails = () => {
    return studioLocations.map(studio => {
      const { id, name, address, description, btnText, btnLink, text } = studio
      return (
        <Col key={id} md={4}>
          <Location
            id={id}
            name={name}
            address={address}
            description={description}
            btnText={btnText}
            btnLink={btnLink}
            text={text}
          />
        </Col>
      )
    })
  }
  return (
    <div className="text-center">
      <h2>Studios</h2>
      <Row>
        {renderStudioDetails()}
      </Row>
    </div>
  )
}

export default StudioLocations