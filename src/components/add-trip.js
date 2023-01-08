// import { useState } from 'react';
import { Button,Form,Container } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import Footer from './footer';
import NavHeader from './navbar';
import navStyle from './navbar.module.css'
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { API } from '../config/api';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';





function AddTrip() {
    const navigate = useNavigate()
    let {data: country} = useQuery('countryChache', async() => {
        const response = await API.get('/country')
        return response.data.data
    })

    // console.log(country);
    const [input, setInput] = useState({
        title: "",
        country: "",
        accomodasi: "",
        transport: "",
        eat: "",
        day: "",
        night: "",
        date: "",
        price: "",
        quota: "",
        desc: "",
        image: "",
    })
console.log(input.country);
    const handleChange = (e) =>  {
        setInput({
        ...input,
        [e.target.name] :
            e.target.type === 'file' ? e.target.files : e.target.value,

        })

        // if (e.target.file === 'file') {
        //     let url = URL.createObjectURL(e.target.files[0])
        //     // setPreview(url)
        // }
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
              formData.set('title', input.title)
              formData.set('countryID', input.country)
              formData.set('accomodation', input.accomodasi)
              formData.set('transport', input.transport)
              formData.set('eat', input.eat)
              formData.set('day', input.day)
              formData.set('night', input.night)
              formData.set('date_trip', input.date)
              formData.set('price', input.price)
              formData.set('quota', input.quota)
              formData.set('desc', input.desc)
              formData.set('image', input.image[0])

              
              
              //   Inser Data
              const response = await API.post('/trips', formData, config)
            //   console.log(response);
            } catch (error) {
                console.log(error);
            }

            navigate("/income-trip")
        }) 
        
        
        // console.log(input)
  return (
    <>
    <NavHeader navStyle={navStyle.bgNavbar}/>
    <Container> 
        <div className='shadow p-5 mt-5'>
        <h2 className='pt-5 fw-semibold'>Add Trip</h2>
        <Form className='p-3' onSubmit={(e) => handleSubmit.mutate(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title Trip</Form.Label>
            <Form.Control  name="title" type="text" placeholder="Enter text"  value={input.title} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Country</Form.Label>
            <Form.Select  onChange={handleChange} name="country"  >
                <option disabled>-- Select Country --</option>
                {country?.map((list) =>
                    <option value={list.id}>{list.name}</option>
                )}
            </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasictext">
            <Form.Label>Accomodation</Form.Label>
            <Form.Control
              value={input.accomodasi} onChange={handleChange} name="accomodasi" type="text" placeholder="Enter text"   />
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasictext">
            <Form.Label>Transportation</Form.Label>
            <Form.Control
              value={input.transport} onChange={handleChange} name="transport" type="text" placeholder="Enter text"   />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasictext">
            <Form.Label>Eat</Form.Label>
            <Form.Control
              value={input.eat} onChange={handleChange}  name="eat" type="text" placeholder="Enter text"   />
        </Form.Group>
        <Form.Label>Duration</Form.Label>
        <div className='d-flex gap-3'>
            <Form.Group className="col-md-3 d-flex align-items-center gap-3">
                <Form.Control
                 type="number" class="form-control" id="inputtext4" name='day' value={input.day} onChange={handleChange}  />
                <Form.Label for="inputtext4" class="form-label">Day</Form.Label>
            </Form.Group>
            <Form.Group className="col-md-3 d-flex align-items-center gap-3">
                <Form.Control
                 type="number" class="form-control" id="inputPassword4" name='night' value={input.night} onChange={handleChange}  />
                <Form.Label for="inputPassword4" class="form-label">Night</Form.Label>
            </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="formBasictext">
            <Form.Label>Date Trip</Form.Label>
            <Form.Control
             type="date" placeholder="Enter text" name='date' value={input.date} onChange={handleChange}  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasictext">
            <Form.Label>Price</Form.Label>
            <Form.Control
             type="number" placeholder="Enter text" name='price' value={input.price} onChange={handleChange}  />
        </Form.Group>
        <Form.Group>
            <Form.Label for="inputPassword4" class="form-label">Quota</Form.Label>
            <Form.Control
             type="text" class="form-control" name="quota" value={input.quota} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasictext">
            <Form.Label>Description</Form.Label>
            <Form.Control
             as="textarea" rows={4} placeholder="Enter email" name='desc' value={input.desc} onChange={handleChange}  />
        </Form.Group>
        <Form.Group className="mb-3 col-md-3" controlId="formBasicEmail">
            <Form.Label>Upload</Form.Label>
            <Form.Control
             type="file" name="image" onChange={handleChange}  placeholder="Enter email" />
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

export default AddTrip