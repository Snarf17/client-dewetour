import { useParams, Link } from 'react-router-dom'
import Navbar from './navbar'
import Footer from './footer'
import { Container,Image, Table, Button } from 'react-bootstrap';
// import { useEffect, useState } from 'react';
import navStyle from './navbar.module.css'
import { NumericFormat } from 'react-number-format';
// import ModalWarningPay from './modalwarningpay';
import moment from 'moment/moment';
import { API } from '../config/api';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import ModalWarningPay from './modal/modalwarningpay';



// function Details(){
function Details({count,setTotal, setIdr,handleMin,handlePlus}){
    const params = useParams();
    // const data = CardContent() 
    let {data: trip} = useQuery('tripDetailsChache', async() => {
        const response = await API.get(`/trips/${params.id}`)
        return response.data.data
      })
    const [Show, setShow] = useState(false);

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const storage = localStorage.getItem("role")

    
    useEffect(() => {
        
            setIdr(Number(trip?.price))
            setTotal(Number(trip?.price))
        
        },[])
    

    // const handleHarga = () => setCount(count - 1)
    return(
        <>
            <Navbar navStyle={navStyle.bgNavbar} />
             {/* {data.filtermap((list,index) => ( */} 
            <Container className='p-5' >
                <div className='p-2'>
                    <h1 className='fw-semibold'>{trip?.title}</h1>
                    <span className='text-secondary fs-5'>{trip?.country.name}</span>
                </div>
                <div className='d-flex gap-3 flex-wrap pt-5'>
                    <Image className='w-100' style={{height:'400px', objectFit:'cover'}}  src="../../images/australia.png" alt='gambar'/>
                    <Image rounded style={{height:'175px', objectFit:'cover'}} src="../../images/korea.png" width="397px"  alt='gambar'/>
                    <Image rounded style={{height:'175px', objectFit:'cover'}} src="../../images/jepang.png" width="397px"  alt='gambar'/>
                    <Image rounded style={{height:'175px', objectFit:'cover'}} src="../../images/jakarta.png" width="397px" alt='gambar'/>
                </div>
                <h4 className='fw-semibold pt-5 pb-3'>Information Trip</h4>
                <div className='d-flex justify-content-between'>
                    <div>
                        <span className="text-secondary">Accomodation</span>
                        <div className='d-flex align-items-center gap-3'>
                            <Image src="../../icon/hotel.png"/>
                            <h5 className='pt-2 fw-semibold'>{trip?.accomodation}</h5>
                        </div>
                    </div>
                    <div>
                        <span className="text-secondary" >Transportation</span>
                        <div className='d-flex align-items-center gap-3'>
                            <Image src="../../icon/pesawat.png"/>
                            <h5 className='pt-2 fw-semibold'>{trip?.transportation}</h5>
                        </div>
                    </div>
                    <div>
                        <span className="text-secondary">Eat</span>
                        <div className='d-flex align-items-center gap-3'>
                            <Image src="../../icon/meal.png"/>
                            <h5 className='pt-2 fw-semibold'>{trip?.eat}</h5>
                        </div>
                    </div>
                    <div>
                        <span className="text-secondary">Duration</span>
                        <div className='d-flex align-items-center gap-3'>
                            <Image src="../../icon/time.png"/>
                            <h5 className='pt-2 fw-semibold'>{trip?.day} Day {trip?.night} Night</h5>
                        </div>
                    </div>
                    <div>
                        <span className="text-secondary">Date Trip</span>
                        <div className='d-flex align-items-center gap-3'>
                            <Image src="../../icon/calendar.png"/>
                            <h5  className='pt-2 fw-semibold'>{moment(trip?.date_trip).format('ll')}</h5>
                        </div>
                    </div>
                </div>
                <div className='pt-5 pb-5'>
                    <h4>Description</h4>
                    <p className='text-secondary'>{trip?.description}</p>
                </div>
                <Table className='pt-5 '>
                     <tbody>
                    <tr>
                            <td className='fw-semibold fs-4'><span style={{color:'#FFAF00'}}>
                            <NumericFormat value={trip?.price} prefix="IDR. " thousandSeparator=',' displayType='text'/>
                            </span> / Person
                            </td>
                            <td className='d-flex justify-content-end gap-3'>
                                <Button className='btn-yellow-pay' onClick={handlePlus}><Image src="../../icon/plus.png" width='15px'  /></Button>
                                    <h5 className='align-self-center pt-2'>{count}</h5>
                                <Button className='btn-yellow-pay' onClick={handleMin} ><Image src="../../icon/min.png" width='15px'/></Button>
                            </td>
                        </tr>
                        <tr>
                            <td className='fw-semibold fs-4'>Total</td>
                            <td className='text-end fw-semibold fs-4' style={{color:'#FFAF00'}}>
                                <NumericFormat value={count * trip?.price} prefix="IDR. " thousandSeparator=',' displayType='text'/>
                            </td>
                        </tr>
                    </tbody> 
                 </Table> 
                {storage !== null ? 
                
                storage === 'admin' ? 
                "anda admin tidak bisa" 
                : 
                // "anda user"
                <div className='w-100 d-flex justify-content-end pt-3'>
                    <Link to={`/payment/${trip?.id}`} className='text-decoration-none'>
                        <Button className='btn-yellow'>Book Now</Button>
                    </Link>
                </div>
                
                : 
                // "gagal"
                <div className='w-100 d-flex justify-content-end pt-3'> 
                     <Button className='btn-yellow' onClick={handleShow}>Book Now</Button> 
                     {/* <Button className='btn-yellow' >Book Now</Button> */}
                </div>
                }
            </Container> 
             <ModalWarningPay show={Show} handle={handleClose}/> 
             <Footer />

        </>
    )
}

export default Details