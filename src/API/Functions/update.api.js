import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";

export const updateApi=async(data)=>{
    try {
        let response=await axiosInstance.post(endpoints.auth.update,data)
        return response.data
        
    } catch (error) {
        console.log(error);
        
    }
}