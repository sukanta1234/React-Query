import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";

export const contactApi=async(data)=>{
    try {
        let response=await axiosInstance.post(endpoints.cms.contact,data)
        
    } catch (error) {
        console.log(error);
        
    }
}