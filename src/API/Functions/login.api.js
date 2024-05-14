import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";

export const loginApi=async(data)=>{
    try {
        let response=await axiosInstance.post(endpoints.auth.login,data);
        return response.data
        
    } catch (error) {
        console.log(error);
        
    }
}