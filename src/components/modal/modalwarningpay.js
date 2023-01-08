import Modal from 'react-bootstrap/Modal';
// import { Link } from 'react-router-dom';

function ModalWarningPay({show, handle}) {
  
  return (
    <>

      {/* <Button onClick={() => setLgShow(true)}>Large modal</Button> */}
      <Modal
        size="lg"
        show={show}
        onHide={handle}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
        
      >
        
        <Modal.Body className='text-center' style={{background: '#ff040034'}} >
          <h1 style={{color:'#EC7A7A'}}>LOGIN DULU BRO</h1>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalWarningPay