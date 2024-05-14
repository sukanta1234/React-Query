import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";

export const testimonialApi=async()=>{
    try {
        let response=await axiosInstance.get(endpoints.cms.testimonial)
        return response.data.testimonials


        
    } catch (error) {
        console.log(error);
        
    }
}