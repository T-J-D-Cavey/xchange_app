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
      className='modal_text'
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3 className='modal_title'>
            <span className='x'>X</span>Change
          </h3>
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
          <span className='modal_title'><span className='x'>X</span>Change</span> creator's <a href='https://github.com/T-J-D-Cavey' target='_blank'>Github page here</a>. The creator does not hold any copyright claims to the name, and this app is governed by the terms of the MIT license. 
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button className='button modal_button' variant="dark" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}