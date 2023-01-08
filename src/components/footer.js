import './style.css'
import { Image } from 'react-bootstrap'

function Footer(){
    return(
        <>
        <div className='w-100 d-flex justify-content-end' style={{marginBottom:"-59px"}}>
            <Image src="../../icon/daun.png" width="90px"/>
        </div>
        <div className='footer '>
            <p>Copyright @ 2020 Dewe Tour - Your Name - NIS. All Rights reserved</p>
        </div>
        </>
    )

}

export default Footer