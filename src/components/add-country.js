// import { useState } from 'react';
import { Button,Form,Container } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import NavHeader from './navbar';
import navStyle from './navbar.module.css'
import { useState } from 'react';
import { useMutation} from 'react-query';
import { API } from '../config/api';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

// import { useNavigate } from 'react-router-dom';





function AddCountry() {
    const navigate = useNavigate()
    // let {data: country} = useQuery('countryChache', async() => {
    //     const response = await API.get('/country')
    //     return response.data.data
    // })
//     const negara = [
//         { negara: "Indonesia"},
//         { negara: "Jepang"},
//         { negara: "Korea"},
//         { negara: "Malaysia"},
//         { negara: "Amerika"},
//         { negara: "Taliban"},
//         { negara: "Iran"},
//         { negara: "Qatar"},
//         { negara: "Tangerang"}
// ]
//     // console.log(country);
    const [input, setInput] = useState({
        name: "",
    })
console.log(input.country);
    const handleChange = (e) =>  {
        setInput({
        ...input,
        [e.target.name] : e.target.value,

        })

    }
    const handleSubmit = useMutation(async(e) => {
        try {
            e.preventDefault()


            const config = {
                headers: {
                  'Content-type': 'multipart/form-data',
                },
              };

            //   const body = JSON.stringify(input)


              const formData = new FormData()
              formData.set('name', input.name)

              
              
              //   Inser Data
              const response = await API.post('/country', formData, config)
            //   console.log(response);
            Swal.fire({
                icon: 'success',
                title: 'Suksess',
                text: 'Berhasil Menambahkan',
              })
            } catch (error) {
                console.log(error);
            }
            setInterval(() => {
                navigate('/add-trip')
            }, 1000)
        }) 
        
        
        // console.log(input)
  return (
    <>
    <NavHeader navStyle={navStyle.bgNavbar}/>
    <Container> 
        <div className='shadow p-5 mt-5'>
        <h2 className='pt-5 fw-semibold'>Add Country</h2>
        <Form className='p-3' onSubmit={(e) => handleSubmit.mutate(e)}>
        <Form.Group className="mb-3">
            <Form.Label>Country</Form.Label>
            <Form.Control                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             onChange={handleChange} name="name"  value={input.name}>
            </Form.Control>
      </Form.Group>
        <div className='text-center pt-3'>
        <Button style={{padding:'6px 90px'}} className='btn-yellow' type="submit">
            Submit
        </Button>
        </div>
        </Form>
        </div>
    </Container>
    <Footer/>
    </>
  );
}

export default AddCountry