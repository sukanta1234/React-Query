import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";

export const allBlogApi=async()=>{
    try {
        let response=await axiosInstance.get(endpoints.cms.allBlog)
        return response.data.data
        
    } catch (error) {
        console.log(error);
        
    }
}