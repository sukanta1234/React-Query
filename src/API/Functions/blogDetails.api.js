import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints"

export const blogDetails=async(id)=>{
    try {
        const url=`${endpoints.cms.blogDetails}/${id}`
        let response=await axiosInstance.get(url)
        return response.data.data
        
    } catch (error) {
        console.log(error);
        
    }
}