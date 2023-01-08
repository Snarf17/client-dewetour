import { Navigate,Outlet } from "react-router-dom"



function PrivateAdmin(){
    const storage = localStorage.getItem('role')  
    // console.log(storage);  
    return(
        <>
            {storage !== null && storage === "admin" ? <Outlet /> : <Navigate to="/" />}
        </>
    )
}


export default PrivateAdmin