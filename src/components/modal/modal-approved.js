// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import {Card,Table,Image, Modal, Button} from 'react-bootstrap';

function ModalApproved({show, handle}) {

  return (
    <>
      {/* <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button> */}

      <Modal centered
        show={show}
        onHide={handle}
        dialogClassName="my-modal"
        aria-labelledby="example-custom-modal-styling-title"
        size='90vh'
        className='p-5'
        >
        <Modal.Body closeButton>
        <div>
            <Card style={{padding:'50px'}} className="">
            {/* <Card.Header className="border border-opacity-10">Quote</Card.Header> */}
            <div className="d-flex justify-content-between pe-5">
                <Image className="pb-2" src="../../images/icon-payment.png" width="250px"/>
                <div className="text-center">
                <h2 className="fw-semibold">Booking</h2>
                <span className="text-secondary">Saturday, 22 Juy 2020</span>
                </div>
            </div>
                <Card.Body className="pt-4 gap-5 d-flex">
                  <div>
                    <h4 className="fw-semibold">hayyy</h4>
                    <span className="text-secondary">ajksndjads</span>
                    <p className="p-payment text-bold">Waiting Payment</p>
                  </div>

                  <div className='d-flex gap-5 justify-content-between'>
                    <div className="d-flex flex-column gap-1">
                        <span className="text-secondary">Date Trip</span>
                        <div className='d-flex align-items-center pe-3 pb-4 gap-3'>
                            <Image src="../../icon/hotel.png"/>
                            <h6 className='pt-2 fw-semibold'>26 August 2020</h6>
                        </div>
                    
                        <span className="text-secondary">Accomodation</span>
                        <div className='d-flex align-items-center pe-5 gap-3' >
                            <Image src="../../icon/hotel.png"/>
                            <h6 className='pt-2 fw-semibold'>Hotel 4 Nights</h6>
                        </div>
                    </div>

                    <div className="d-flex flex-column gap-1">
                        <span className="text-secondary" >Transportation</span>
                        <div className='d-flex align-items-center pe-5 pb-4 gap-3'>
                            <Image src="../../icon/hotel.png"/>
                            <h6 className='pt-2 fw-semibold'>Qatar Airways</h6>
                        </div>
                    
                        <span className="text-secondary">Duration</span>
                        <div className='d-flex align-items-center   gap-3'>
                            <Image src="../../icon/hotel.png"/>
                            <h6 className='pt-2 fw-semibold'>6 Day 4 Night</h6>
                        </div>
                    </div>
                </div>
                <div style={{paddingLeft:'65px'}}>
                    <Image src="../../images/struk.png"/>
                    <p className="text-center text-secondary" style={{fontSize:'12px'}}>upload payment proof</p>
                </div>
                </Card.Body>
                <Table className='striped pt-5 '>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Full Name</th>
                            <th>Gender</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-secondary">
                            <td>1</td>
                            <td>Bambang</td>
                            <td>Male</td>
                            <td>089767676</td>
                            <th className="text-dark">Qty : 1</th>
                        </tr>
                        
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <th className="text-dark pt-3" colSpan={4} width="5px">Total : <span style={{color:'#FFAF00'}}>12123123</span></th>
                    
                        
                    </tbody>
                </Table>
            </Card>
        </div>
        </Modal.Body>
        <div className='d-flex justify-content-end gap-2 pe-4 pb-4'>
            <Button className='btn-danger'>Cancel</Button>
            <Button className='btn-success'>Button</Button>
        </div>
      </Modal>
    </>
  );
}

export default ModalApproved