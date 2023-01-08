import { Container, Table, Image } from "react-bootstrap"
import Footer from "./footer"
import NavHeader from "./navbar"
import ModalApproved from "./modal/modal-approved";
import { useState } from "react";
import navStyle from './navbar.module.css'




function ListTransaction(){
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
    return(
        <>
        <NavHeader navStyle={navStyle.bgNavbar}/>
        <Container>

        <div style={{background:'white', marginTop:'15vh', marginBottom:'20vh'}}>
            <h2 className="fw-semibold">Incoming Transaction</h2>
            <Table  className="striped shadow mt-5 p-5" size="lg">
            <thead className="p-5">
            <tr className="p-5">
                <th>No.</th>
                <th>User</th>
                <th>Trip</th>
                <th>Bukti Transfer</th>
                <th>Status Payment</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td style={{color:'#F7941E'}}>Pending</td>
                <td>
                    <Image style={{cursor:'pointer'}} src="../../icon/search.png" onClick={handleShow} />
                </td>
            </tr>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td style={{color:'#0ACF83'}}>Approved</td>
                <td>
                    <Image style={{cursor:'pointer'}} src="../../icon/search.png" />
                </td>
            </tr>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td style={{color:'#FF0742'}}>Canceled</td>
                <td>
                    <Image style={{cursor:'pointer'}} src="../../icon/search.png" />
                </td>
            </tr>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td style={{color:'#FF0742'}}>Canceled</td>
                <td>
                    <Image style={{cursor:'pointer'}} src="../../icon/search.png" />
                </td>
            </tr>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td style={{color:'#FF0742'}}>Canceled</td>
                <td>
                    <Image style={{cursor:'pointer'}} src="../../icon/search.png" />
                </td>
            </tr>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td style={{color:'#F7941E'}}>Pending</td>
                <td>
                    <Image style={{cursor:'pointer'}} src="../../icon/search.png" />
                </td>
            </tr>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td style={{color:'#0ACF83'}}>Approved</td>
                <td>
                    <Image style={{cursor:'pointer'}} src="../../icon/search.png" />
                </td>
            </tr>
            
        </tbody>
            </Table>
        </div>
        </Container>
        <Footer />
        <ModalApproved show={show} handle={handleClose}/>
        </>
    )
}

export default ListTransaction