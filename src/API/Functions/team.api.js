import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";

export const teamApi=async()=>{
    try {
        let response=await axiosInstance.get(endpoints.cms.team);
        console.log(response.data);
        return response.data.TeamMember
        
    } catch (error) {
        console.log(error);
        
    }
}