import axiosInstance from "../Axios/axiosInstance";

export const createCommentApi=async({id,payload})=>{
    try {
        const url=`/blog/${id}/comment/create`
        let response=await axiosInstance.post(url,payload)
        return response.data
        
    } catch (error) {
        console.log(error);
        
    }
}