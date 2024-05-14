import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";

export const likeapi=async(id)=>{
    try {
        const url=`${endpoints.cms.like}/${id}`
        const response=await axiosInstance.put(url);
        return response.data.likes
        
    } catch (error) {
        console.log(error);
        
    }
}