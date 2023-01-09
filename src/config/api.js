import axios from "axios"



export const API = axios.create({
    baseURL: "https://server-dewetour-production.up.railway.app/api/v1",
})

export const setAuthToken = (token) =>{
    if(token){
        API.defaults.headers.common["Authorization"] = `Bearer ${token}`
    }else{
        delete API.defaults.common["Authorization"]
    }
}
