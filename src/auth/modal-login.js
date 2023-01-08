// import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import { useContext, useState } from 'react';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { API } from '../config/api';
import Swal from 'sweetalert2';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

function ModalLogin({show, handle}) {

  const navigate = useNavigate()
  const [state, dispatch] = useContext(UserContext)
  const [login, setLogin] = useState({
    email: "",
    password: "",
  })
const handleOnChange = (e) => {
    setLogin({
      ...login,
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
      const body = JSON.stringify(login);
  
      // Insert data user to database
      const response = await API.post('/login', body, config);
  
      // Handling response here
      if (response?.status === 200) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        })

        if (response.data.data.status === "admin")  {
          navigate("/")
          // alert("anda admin")
        }else{
        }
      }
      Swal.fire({
        icon: 'success',
        title: 'Suksess',
        text: 'Berhasil Register',
      })
      console.log(response);  
    } catch (error) {
      Swal.fire({
        icon: 'warning',
        title: 'Failed',
        text: 'Login Gagal',
      })
      console.log(error);
    }

    handle()
    setInterval(() => {
      navigate(0)
    }, 1000);
    // useEffect(() => {
    //   handleSubmit();
    // }, []);
  });
  return (
    <>

      <Modal show={show} onHide={handle} centered size="md"  >
        <div className='d-flex justify-content-between'>
            <Image src='../../images/palm.png' width='100px'/>
            <Image src='../../images/bunga.png' width='100px'/>
        </div>
        <Modal.Title className='text-center  fw-semibold pb-4 fs-1'>Login</Modal.Title>
        <Modal.Body className='modal-login'>
          <Form onSubmit={(e) => handleSubmit.mutate(e)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleOnChange}
                value={login.email}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={login.password}
                name="password"
                onChange={handleOnChange}
                type="password"
              />
            </Form.Group>
          <Button className='btn-yellow w-100' type='submit'>
            Login
          </Button>
          </Form>
          <div className='text-center pt-3'>
          <span className=' text-secondary'>Don't have an account? ? Klik Here</span>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalLogin