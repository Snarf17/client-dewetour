import {  Card, Container,Image, Table,Button } from "react-bootstrap"
import NavHeader from "./navbar"
import Footer from "./footer"
import navStyle from './navbar.module.css'
// import { useParams } from "react-router-dom"
import { NumericFormat } from "react-number-format"
import { useQuery } from "react-query"
import { API } from "../config/api"
import moment from "moment"

function Profile({count}) {
    let {data: transaction} = useQuery('transaksiChache', async() => {
        const response = await API.get('/transaction')
        console.log(response);
        return response.data.data   
    })
    
    // const trans = JSON.parse(JSON.stringify(transaction))
    // console.log(transaction);
    
    const storage = JSON.parse(localStorage.getItem("user"))
    // const login = localStorage.getItem("token")
    // const params = useParams()
    // console.log(storage);
    return (
        <>  
            <NavHeader navStyle={navStyle.bgNavbar}/>
            <Container>
            <Card className="shadow" style={{width:'70%', margin: '90px auto', padding:'20px 30px'}}>
                <Card.Body>
                <Card.Title><h2 className="fw-semibold">Personal Profile</h2></Card.Title>
                <Card.Text className="d-flex justify-content-between  align-items-center">
                    <div className="d-flex flex-column">
                        
                        <div className="d-flex gap-3 pb-3">
                            <Image src="../../icon/name.png"  style={{width:'35px', objectFit:'contain'}}/>
                            <div>
                                <h6 className="fw-semibold">{storage.fullname}</h6>
                                <span className="text-secondary">Full Name</span>
                            </div>
                        </div>  
                        <div className="d-flex gap-3 pb-3">
                            <Image src="../../icon/pesan.png" style={{width:'35px', objectFit:'contain'}} />
                            <div>
                                <h6 className="fw-semibold">{storage.email}</h6>
                                <span className="text-secondary">Email</span>
                            </div>
                        </div>  
                        <div className="d-flex gap-3 pb-3">
                            <Image src="../../icon/phone.png" style={{width:'35px', objectFit:'contain'}} />
                            <div>
                                <h6 className="fw-semibold">{storage.phone}</h6>
                                <span className="text-secondary">Phone</span>
                            </div>
                        </div>  
                        <div className="d-flex gap-3 pb-3">
                            <Image src="../../icon/place.png" style={{width:'35px', objectFit:'contain'}} />
                            <div>
                                <h6 className="fw-semibold">{storage.address}</h6>
                                <span className="text-secondary">Address</span>
                            </div>
                        </div>  
                    </div>
                    <div className="d-flex flex-column gap-2">
                        <Image src="../../images/pas.png"/>
                        <Button className="btn-yellow" >Change Photos Profile</Button>
                    </div>
                </Card.Text>
                </Card.Body>
            </Card>
            <h2 className="fw-semibold" style={{padding:"30px 100px"}}>History Trip</h2>
            {transaction?.filter((trip) => trip?.user?.fullname === storage.fullname).map((trip) =>
                <Card style={{width:'85%', padding:'50px', margin:'auto', marginBottom:'20vh'}} className="shadow">
                <div className="d-flex justify-content-between pe-5">
                    <Image className="pb-2" src="../../images/icon-payment.png" width="250px"/>
                    <div className="text-center">
                    <h2 className="fw-semibold">Booking</h2>
                    <span className="text-secondary"><span className="fw-semibold">Saturday,</span> 22 Juy 2020</span>
                    </div>
                </div>
                
                <Card.Body className="pt-4 gap-5 d-flex">
                    <div>
                        <h4 className="fw-semibold">{trip?.trip?.title}</h4>
                        <span className="text-secondary">{trip?.trip?.country?.name}</span>
                        {trip?.status === "success" ? 
                        <p className="p-payment-sukses text-bold">{trip?.status}</p>
                        : 
                        <p className="p-payment text-bold">{trip?.status}</p>
                        }
                    </div>

                    <div className='d-flex gap-5 justify-content-between' style={{paddingLeft:'10vh'}} >
                        <div className="d-flex flex-column gap-1">
                            <span className="text-secondary">Date Trip</span>
                            <div className='d-flex align-items-center pe-3 pb-4 gap-3'>
                                <Image src="../../icon/hotel.png"/>
                                <h6 className='pt-2 fw-semibold'>{moment(trip?.trip?.date_trip).format('ll')}</h6>
                            </div>
                        
                            <span className="text-secondary">Accomodation</span>
                            <div className='d-flex align-items-center pe-5 gap-3' >
                                <Image src="../../icon/hotel.png"/>
                                <h6 className='pt-2 fw-semibold'>{trip?.trip?.accomodation}</h6>
                            </div>
                        </div>

                        <div className="d-flex flex-column gap-1">
                            <span className="text-secondary" >Transportation</span>
                            <div className='d-flex align-items-center pe-5 pb-4 gap-3'>
                                <Image src="../../icon/hotel.png"/>
                                <h6 className='pt-2 fw-semibold'>{trip?.trip?.transportation}</h6>
                            </div>
                        
                            <span className="text-secondary">Duration</span>
                            <div className='d-flex align-items-center   gap-3'>
                                <Image src="../../icon/hotel.png"/>
                                <h6 className='pt-2 fw-semibold'>{trip?.trip?.day} Day {trip?.trip?.night} Night</h6>
                            </div>
                        </div>
                    </div>
                    <div style={{paddingLeft:'28vh'}} >
                        <Image src="../../images/struk.png"/>
                        <p className="text-center text-secondary" style={{fontSize:'12px'}}>upload payment proof</p>
                    </div>
                    </Card.Body>
                    <Table className='striped pt-5 '>
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
                                <th className="text-dark">Qty : {trip?.qty}</th>
                            </tr>
                            
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <th className="text-dark pt-3" colSpan={4} width="5px">Total : 
                                <span style={{color:'#FFAF00'}}>
                                    <NumericFormat value={trip?.trip?.price * trip?.qty} prefix="IDR. " thousandSeparator="," displayType="text"/>
                                </span>
                                </th>
                        
                            
                        </tbody>
                    </Table>
                </Card>
            )}

            </Container>
          
        

            <Footer className="pt-5" />
        </>

  
    )

}
export default Profile