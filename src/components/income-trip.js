import './style.css'
import { Link }  from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';
// import Details  from './details';
// import { CardContent } from './data'
import Navbar from './navbar';
import Footer from './footer';
import { Button } from 'react-bootstrap';
import navStyle from './navbar.module.css'
import { API } from '../config/api';
import { useQuery } from 'react-query';
import { NumericFormat } from 'react-number-format';
// import { NumericFormat } from 'react-number-format';


function IncomeTrip() {

  let {data: trip} = useQuery('tripIncomeChache', async() => {
    const response = await API.get('/trips')
    return response.data.data
})


// const Data = CardContent()
// console
  return (

    <>
    <Navbar navStyle={navStyle.bgNavbar} />
    <Container>
      <div className='judul d-flex justify-content-between'>
        <h1 className='fw-semibold'>Group Tour</h1>
        <div className='d-flex gap-3'>
        <Link to="/add-trip" className="text-decoration-none">
            <Button className='btn-yellow'>Add Trip</Button>
        </Link>
        <Link to="/add-country" className="text-decoration-none">
            <Button className='btn-yellow'>Add Country</Button>
        </Link>
        </div>
      </div>

      <div className=' d-flex gap-4 justify-content-center flex-wrap p-3'>
        {trip?.map((listMap) => 
      <Link to="/" className="text-decoration-none">
        <Card style={{ width: '21rem',height:"21rem", padding:'7px', marginBottom:'40px'}}>
            <Card.Img variant="top" src={listMap.image} rounded/>
            <Card.Body>
                <Card.Title className="fw-semibold text-dark" >{listMap.title}</Card.Title>
                <div className='d-flex justify-content-between'>
                <p style={{color:'#FFAF00'}}>
                <NumericFormat value={listMap.price} prefix="IDR. " thousandSeparator="," displayType='text'/>
                </p>
                <p className='text-secondary'>{listMap.country.name}</p>
                </div>
           </Card.Body>
        </Card>
      </Link>
         )}
      </div>

      </Container>
      <Footer/>
    </>
    
  
    
  );
}


export default IncomeTrip;