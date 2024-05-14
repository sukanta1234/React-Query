import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";

export const bannerApi=async()=>{
    try {
        let response=await axiosInstance.get(endpoints.cms.banner)
        return response.data.bannerdata

        
    } catch (error) {
        console.log(error);
        
    }
}