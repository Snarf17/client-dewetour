import { Container,InputGroup,Form} from "react-bootstrap";
import NavHeader from "./navbar";
// import './style.css'
// import navStyle from "./navbar.module.css"




function Header() {
  return(
    <>
    <div className="bg-header">
    <NavHeader />
    <Container className='d-flex flex-column header-content'>
        <div className='font-title'>
            <h1 className='fw-semibold' style={{fontSize:'64px', color:'#fff'}}>Explore</h1>
            <p>your amazing city together</p>
        </div>

        <div>
        <label style={{color: '#fff', fontSize:'18px'}}>Find great places to holiday</label>
        <InputGroup className="mb-3 mt-2">
            <Form.Control
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
            <InputGroup.Text className='btn-yellow'>Search</InputGroup.Text>
        </InputGroup>
        </div>
    
    </Container> 
    </div>
  </>
  )
}

export default Header