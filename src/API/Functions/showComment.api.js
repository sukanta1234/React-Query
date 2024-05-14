import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";

export const showComment=async(id)=>{
    try {
        const url=`${endpoints.cms.commentShow}/${id}`
        const response=await axiosInstance.get(url)
        return response.data.post.comment.comments
        
    } catch (error) {
        console.log(error);
        
    }
}