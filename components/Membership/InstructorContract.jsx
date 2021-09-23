import { Modal, Button } from 'react-bootstrap'


const InstructorContract = ({ handleShow, handleClose, show }) => {
  return (
    <div className="mt-5">
      <hr />
      <h3 className="text-center mt-5">Athlete Contract</h3>
      <p className="mt-5">
        {`This Agreement (this "Agreement"), dated as of _____________
          ("Effective Date") is by and between Studio Tribeca located
          at 80 Warren Street New York, NY 10014 and
          ____________________________ and __________________
          referenced at "Talent."`}
      </p>
      <p className="mt-5">
        {`This agreement is to allow the Talent to use and operate
          their likeness and brand out of our facilities as a
          "Provider" member.`}
      </p>
      <p className="mt-5">
        {`Talent will be enabled to reserve a Box up to 45 days from
          date of reservation. At the time of 14 days from
          reservation, the talent authorizes the Entity to draw the
          fee for the Box reservation.`}
      </p>
      <div className="d-grid text-center mt-5">
        <div className="d-block">
          <Button
            className="hidden-xs"
            variant="outline-secondary"
            onClick={handleShow}>
            Download PDF
          </Button>
        </div>
        <Button
          className="visible-xs"
          variant="outline-secondary"
          onClick={handleShow}>
          Download PDF
        </Button>
      </div>
      <div className="mt-5">
        <p>{`Let's continue the conversation and explore this partnership`}</p>
        <p className="mt-5">
          <strong>Matt Marchese</strong>
        </p>
        <p>
          <a href="mailto:contact@sstudioss.com">contact@sstudioss.com</a>
        </p>
        <p>
          <a href="tel:9175550198">(917) 555 0198</a>
        </p>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Athlete Contract</Modal.Title>
        </Modal.Header>
        <Modal.Body>Booya!</Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default InstructorContract