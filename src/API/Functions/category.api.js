import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";

export const categoryApi = async () => {
  try {
    let response = await axiosInstance.get(endpoints.cms.category);
    // console.log(response.data.data, "response.data");
    return response.data.data
  } catch (error) {
    console.log(error)
  }
};
