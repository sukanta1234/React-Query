import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";

export const latestPost=async()=>{
    try {
        let response=await axiosInstance.get(endpoints.cms.latestPost)
        return response.data.data
        
    } catch (error) {
        console.log(error);
        
    }
}