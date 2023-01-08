import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';
import { API } from '../config/api';
import { useMutation } from 'react-query';
// import { UserContext } from '../context/userContext';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';


function ModalRegister({register, handleregister}) {
    // const [state, dispatch] = useContext(UserContext);
    const navigate = useNavigate()
    const [form, setForm] = useState({
      fullname: "",
      email: "",
      password: "",
      phone: "",
      address: "",
    })

    const handleOnChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      })}

    const handleSubmit = useMutation(async (e) => {
      try {
        e.preventDefault();
    
        // Configuration Content-type
        const config = {
          headers: {
            'Content-type': 'application/json',
          },
        };
    
        // Data body
        const body = JSON.stringify(form);
    
        // Insert data user to database
        const response = await API.post('/register', body, config);
    
        // Handling response here
        Swal.fire({
          icon: 'success',
          title: 'Suksess',
          text: 'Berhasil Register',
        })
        console.log(response);
      } catch (error) {
        console.log(error);
      }

      handleregister()
      // useEffect(() => {
      //   handleSubmit();
      // }, []);
      setInterval(() => {
        navigate(0)
      }, 1000);
    });

  return (
    <>

      <Modal show={register} onHide={handleregister} centered size="md"  >
        <div className='d-flex justify-content-between'>
            <Image src='../../images/palm.png' width='100px'/>
            <Image src='../../images/bunga.png' width='100px'/>
        </div>
        <Modal.Title className='text-center fw-semibold pb-2 fs-1'>Register</Modal.Title>
        <Modal.Body className='modal-login'>
          <Form onSubmit={(e) => handleSubmit.mutate(e)}>
            <Form.Group className="mb-3" controlId="exampleForm.Controlform1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                name='fullname'  
                value={form.fullname}
                onChange={handleOnChange}
                type="text"
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.Controlform1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name='email'
                value={form.email}
                onChange={handleOnChange}
                type="email"
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                name='password'
                value={form.password}
                onChange={handleOnChange}
                type="password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                name='phone'
                value={form.phone}
                onChange={handleOnChange}
                type="number"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                name='address'
                value={form.address}
                onChange={handleOnChange}
                type="text"
                required
              />
            </Form.Group>
          <Button type='submit' className='btn-yellow w-100' >
            Register
          </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalRegister