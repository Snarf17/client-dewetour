import { Card, Col, Container,Image, Row } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { NumericFormat } from "react-number-format"
import { Link } from "react-router-dom"
import { API } from "../config/api"
import { useQuery } from "react-query"
// import Details from "./details"

function Content() {
  const CardHeader = [
    {
      image: "./icon/persen.png",
      tittle: "Best Price",
      text: "Best Price Guarantee",
    },
    {
      image: "./icon/hand.png",
      tittle: "Travellers Love Us",
      text: "A small river named Duren flows by their place and supplies",
    },
    {
      image: "./icon/human.png",
      tittle: "Best Travel Agent",
      text: "A small river named Duren flows by their place and supplies",
    },
    {
      image: "./icon/cs.png",
      tittle: "Our Dedicated Support",
      text: "A small river named Duren flows by their place and supplies",
    }
  ]

  const renderingCardHeader = (card) => {
    return(
        <Card style={{ width: '250px',}} className="shadow" >
          <Card.Body className='text-center p-5'>
          <Card.Title className="pb-4" ><Image src={card.image}/></Card.Title>
          <Card.Subtitle className="mb-2 fw-semibold">{card.tittle}</Card.Subtitle>
          <Card.Text>
            {card.text}
          </Card.Text>
          </Card.Body>
        </Card>
      
    )
  }
// const DataContent = CardContent()
let {data: trip} = useQuery('tripChache', async() => {
  const response = await API.get('/trips')
  return response.data.data
})
  return (
    <>
      <Container>
      <div md="3" className='card-fly d-flex justify-content-between p-5'>
        {CardHeader.map(renderingCardHeader)}
      </div>
      <div className='judul text-center'>
        <h1 className='fw-semibold'>Group Tour</h1>
      </div>
      <div className=' d-flex gap-5 justify-content-center flex-wrap'>
        {trip?.map((listTrip) => (
          <Link  to={`/details/${listTrip.id}`} className="text-decoration-none text-dark">
          <Card style={{ maxWidth: '90rem',height:"21rem", padding:'7px', marginBottom:'40px'}}>
          <Card.Img variant="top" src={listTrip?.image} rounded/>
            <Card.Body>
                <Card.Title className="fw-semibold" >{listTrip?.title}</Card.Title>
                <div className='d-flex justify-content-between'>
                <p style={{color:'#FFAF00'}}>
                <NumericFormat  prefix="IDR. " value={listTrip?.price} displayType="text" thousandSeparator=","/>
                </p>
                <p className='text-secondary'>{listTrip?.country.name}</p>
                </div>
            </Card.Body>
          </Card>
          </Link>
        ))}
       
      </div>
      </Container>
    </>
  )
}

export default Content