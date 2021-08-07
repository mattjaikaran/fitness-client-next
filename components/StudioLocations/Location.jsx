import { Button } from "react-bootstrap"

const Location = ({
  name,
  address,
  description,
  btnText,
  btnLink,
  text
}) => {
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

export default Location