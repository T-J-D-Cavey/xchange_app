import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface modal_props {
    show: boolean;
    onHide: () => void;
}

export const Details_Modal: React.FC<modal_props> = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className='modal_title'>
            <span className='x'>X</span>Change
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Our <span className='modal_title'><span className='x'>X</span>Change</span> app uses the <a href='https://freecurrencyapi.com/docs' target='_blank'>Free currency API</a> for daily exchange rates of the world's top currencies. 
          <br />
          <br />
          This app is in beta. As a result we have listed the top 10 currencies only.
          We hope to update this list soon to include all available currencies provided by the Free Currency API. 
          <br />
          <br />
          <span className='modal_title'><span className='x'>X</span>Change</span> creator's <a href='https://github.com/T-J-D-Cavey' target='_blank'>Github page here</a>. 
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button className='button' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}