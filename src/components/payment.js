// import { useParams} from "react-router-dom"
import { Card,Container,Image,Table, Button } from "react-bootstrap"
import NavHeader from './navbar'
import Footer from './footer'
import navStyle from './navbar.module.css'
import { NumericFormat } from "react-number-format"
// import ModalDetailPayment from "./modal/modal-transaction"
// import { useState } from "react"
import moment from "moment/moment"
import { useNavigate, useParams } from "react-router-dom"
import { useMutation, useQuery } from "react-query"
import { API } from "../config/api"
import { useEffect } from "react"

// import logo from '../.png'

function Payment({count}){
    const navigate = useNavigate()
    const params = useParams()
    let {data: trip, refetch} = useQuery('tripPaymentChache', async() => {
        const config = {
            method: "GET",
            headers:{
                Authorization: "Basic " + localStorage.token,
            }
        }
        const response = await API.get(`/trips/${params.id}`, config)
        // console.log(response.data.data);
        return response.data.data
    })

    // const storage = JSON.parse(localStorage.getItem("token"))
    // const [Show, setShow] = useState(false);
    // const handleShow = () => setShow(true)
    // const handleClose = () => setShow(false)
    // const date = 
    const handlePay = useMutation(async() => {
        console.log(trip.id);
        try {
            // e.preventDefault()
            const body = {  
                qty: trip?.quota,
                trip_id: trip?.id,
                user_id: trip?.user?.id,
                // user: trip?.user.fullname,
                total: trip?.price * count,
                status: "Waiting Payment"
            }

            // Data Body
            // const body = JSON.stringify(data)
            // console.log(body);

            const config = {
                method: "POST",
                headers: {
                    Authorization: "Basic " + localStorage.token,
                  'Content-type': 'application/json'
                },
                
              };

          
            // Insert transaction data
            const response = await API.post("/transaction", body,config);

            console.log("response beli", response)
            const token = response.data.data.token;

            window.snap.pay(token, {
            onSuccess: function (result) {
             /* You may add your own implementation here */
                console.log(result);
                navigate("/profile");
            },
            onPending: function (result) {
                /* You may add your own implementation here */
                console.log(result);
                navigate("/profile");
            },
            onError: function (result) {
                /* You may add your own implementation here */
                console.log(result);
            },
            onClose: function () {
                /* You may add your own implementation here */
                alert("you closed the popup without finishing the payment");
            },
            });
            
        } catch (error) {
            console.log(error);
        }

    }) 

    const storage = JSON.parse(localStorage.getItem("user"))


useEffect(() => {
  //change this to the script source you want to load, for example this is snap.js sandbox env
  const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
//   change this according to your client-key
  const myMidtransClientKey = "SB-Mid-client-4z6ivRP5cGnzUeoO";

  let scriptTag = document.createElement("script");
  scriptTag.src = midtransScriptUrl;
//   optional if you want to set script attribute
//   for example snap.js have data-client-key attribute
  scriptTag.setAttribute("data-client-key", myMidtransClientKey);

  document.body.appendChild(scriptTag);
  return () => {
    document.body.removeChild(scriptTag);
  };
}, []);
    return(
        <>
            <NavHeader navStyle={navStyle.bgNavbar}/>
            <Container className="d-flex flex-column" style={{margin:'10vh auto', padding:'30px'}}>
            <Card style={{padding:'50px'}} className="shadow">
            <div className="d-flex justify-content-between pe-5">
                <Image className="pb-2" src="../../images/icon-payment.png" width="250px"/>
                <div className="text-center">
                <h2 className="fw-semibold">Booking</h2>
                <span className="text-secondary">Saturday, 22 Juy 2020</span>
                </div>
            </div>
                <Card.Body className="pt-4 gap-5 d-flex">
                  <div>
                    <h4 className="fw-semibold">{trip?.title}</h4>
                    <span className="text-secondary">{trip?.country?.name}</span>
                    <p className="p-payment text-bold">Waiting Payment</p>
                  </div>

                  <div className='d-flex gap-5 justify-content-between' style={{paddingLeft:'10vh'}} >
                    <div className="d-flex flex-column gap-1">
                        <span className="text-secondary">Date Trip</span>
                        <div className='d-flex align-items-center pe-3 pb-4 gap-3'>
                            <Image src="../../icon/hotel.png"/>
                            <h6 className='pt-2 fw-semibold'>{moment(trip?.date_trip).format('ll')}</h6>
                        </div>
                    
                        <span className="text-secondary">Accomodation</span>
                        <div className='d-flex align-items-center pe-5 gap-3' >
                            <Image src="../../icon/hotel.png"/>
                            <h6 className='pt-2 fw-semibold'>{trip?.accomodation}</h6>
                        </div>
                    </div>

                    <div className="d-flex flex-column gap-1">
                        <span className="text-secondary" >Transportation</span>
                        <div className='d-flex align-items-center pe-5 pb-4 gap-3'>
                            <Image src="../../icon/hotel.png"/>
                            <h6 className='pt-2 fw-semibold'>{trip?.transportation}</h6>
                        </div>
                    
                        <span className="text-secondary">Duration</span>
                        <div className='d-flex align-items-center   gap-3'>
                            <Image src="../../icon/hotel.png"/>
                            <h6 className='pt-2 fw-semibold'>{trip?.day} Day {trip?.night} Night</h6>
                        </div>
                    </div>
                </div>
                <div style={{paddingLeft:'28vh'}} >
                    <Image src="../../images/struk.png"/>
                    <p className="text-center text-secondary" style={{fontSize:'12px'}}>upload payment proof</p>
                </div>
                </Card.Body>
                <Table >
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
                            <td>{storage.fullname}</td>
                            <td>Male</td>
                            <td>{storage.phone}</td>
                            <th className="text-dark">Qty : {count}</th>
                        </tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <th className="text-dark pt-3" colSpan={4} width="5px">Total : <span style={{color:'#FFAF00'}}>
                                <NumericFormat value={count * trip?.price} prefix="IDR. " thousandSeparator=',' displayType='text'/>
                            </span></th>
                    
                        
                    </tbody>
                </Table>
            </Card>
                    <div className='w-100 d-flex justify-content-end pt-4'>
                {/* <Link to={`/payment-approved/${index + 1}`} className="text-decoration-none"> */}
                        <Button onClick={() => handlePay.mutate()} className='btn-yellow' style={{padding:'10px 70px'}}>Pay</Button>
                {/* </Link> */}
                    </div>
                
                {/* <ModalDetailPayment show={Show} handle={handleClose}/> */}
            </Container>
            <Footer />

        </>
    )
}

export default Payment 