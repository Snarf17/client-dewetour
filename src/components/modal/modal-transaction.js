import Modal from 'react-bootstrap/Modal';
import { Link} from 'react-router-dom';

function ModalDetailPayment({show, handle}) {
  // console.log(list)
  // const params = useParams()
  
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
        
        <Modal.Body className='text-center' style={{background: '#ffae006c'}} >
        Your payment will be confirmed within 1 x 24 <br/> hour To see orders click &nbsp;
        {/* {data.filter((list,index) => index + 1 == params.id ).map((list,index) => */}
        
        <Link to={`/payment-approved`}   className="text-decoration-none" >
          Here 
        </Link>
        {/* )} */}
        &nbsp; thank you
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalDetailPayment