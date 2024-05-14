import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";



export const catPost = async (id) => {
  try {
    const url=`${endpoints.cms.cateWisepost}/${id}`
    const response=await axiosInstance.get(url)
    console.log(response.data.data);
    return response.data.data
    
  } catch (error) {
    console.log(error);
    
  }
 
};
