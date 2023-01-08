import { Navigate,Outlet } from "react-router-dom"



function PrivateUser(){
    const storage = JSON.parse(localStorage.getItem('user'))  
    return(
        <>
            {storage !== null ? <Outlet /> : <Navigate to="/" />}
        </>
    )
}


export default PrivateUser