import './style.css'
import { useContext, useState } from 'react';
import logo from '../Icon.png'
import {Container, Nav, Navbar, Button, Image, Dropdown}
 from 'react-bootstrap';
import ModalLogin from '../auth/modal-login';
import ModalRegister from '../auth/modal-register';
import { Link, useNavigate} from 'react-router-dom';
import { UserContext } from '../context/userContext';
import Swal from 'sweetalert2';



function NavHeader({navStyle}) {
  const navigate = useNavigate()
  const [state,dispatch] = useContext(UserContext)


  const storage = localStorage.getItem("role")

  const handleLogout = () =>{
    // e.preventDefault()
    console.log(state);
    dispatch({
      type: "LOGOUT",
    })
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Yooi, anda logout',
      showConfirmButton: false,
      timer: 1500 
    })
    setInterval(() => {
      navigate(0)
    }, 1000);
  }
  // useEffect(() => {
  //   handleLogout()
  // },[0])



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [register, setRegister] = useState(false);

  const handleCloseR = () => setRegister(false);
  const handleShowR = () => setRegister(true);

  return (
    <>
    <Navbar className={navStyle}>
      <Container bg>
        <Link to="/">
          <Navbar.Brand href="#"><Image src={logo} alt='test' /></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          {storage !== null ? 
          <div className='d-flex align-items-center'>
            {storage === "admin" ?
             <div className='d-flex align-items-center'>
             <h5 style={{color:'#FFAF00'}} className="text-capitalize fw-semibold pt-3">{storage}</h5>
             <Dropdown>
             <Dropdown.Toggle className='bg-transparent' style={{border: 'none'}} >
               <Image src='../../icon/admin.png' width="60px"/>
             </Dropdown.Toggle>
             <Dropdown.Menu>
             <Link to="/" className='text-decoration-none'>
               <Dropdown.Item href="#/action-2"><Image src='../../icon/bill.png' className='pe-3'/>Pay</Dropdown.Item>
             </Link>
             <Link to="/income-trip" className='text-decoration-none'>
               <Dropdown.Item href="#/action-2"><Image src='../../icon/bill.png' className='pe-3'/>Income Trip</Dropdown.Item>
             </Link>
             <Dropdown.Divider />
               <Dropdown.Item onClick={handleLogout}>
                 <Image src='../../icon/logout.png' className='pe-3'/>Log-out
               </Dropdown.Item>
             </Dropdown.Menu>
             </Dropdown> 
             </div> 
             : 
             <div className='d-flex align-items-center'>
            <h5 style={{color:'#FFAF00'}} className="text-capitalize">User</h5>
            <Dropdown>
              <Dropdown.Toggle className='bg-transparent' style={{border: 'none'}} >
                <Image src='../../icon/mask.svg' width="60px"/>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Link to="/profile" className="text-decoration-none">
                  <Dropdown.Item href="/"><Image src='../../icon/user.png' className='pe-3'/>Profile</Dropdown.Item>
                </Link>
                
                  <Dropdown.Item href="#/action-2"><Image src='../../icon/bill.png' className='pe-3'/>Pay</Dropdown.Item>
              
              <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>
                  <Image src='../../icon/logout.png' className='pe-3'/>Log-out
                </Dropdown.Item>
              </Dropdown.Menu>
              </Dropdown>
              </div>
            }
            
          </div>
          
          : 
          <div className='d-flex gap-2'>
            <Button className="btn-outline" onClick={handleShow}>Login</Button>
            <Button className="btn-yellow" onClick={handleShowR}>Register</Button>
          </div>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
     <ModalLogin show={show} handle={handleClose}/>
     <ModalRegister register={register} handleregister={handleCloseR}/>
     </>
  );
}

export default NavHeader;