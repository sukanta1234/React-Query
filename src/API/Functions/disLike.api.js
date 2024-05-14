import axiosInstance from "../Axios/axiosInstance";
import { endpoints } from "../Endpoints/endpoints";

export const disLikeapi = async (id) => {
  try {
    const url = `${endpoints.cms.disLike}/${id}`;
    const response = await axiosInstance.put(url);
    return response.data.unlikes;
  } catch (error) {
    console.log(error);
  }
};
