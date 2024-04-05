import instanceAxios from "./axiosSetup";
import { AxiosResponse, AxiosError } from "axios";
import { ApiResponse, User } from "../interfaces/User.interface";

export const signUpRequest = async (user: User): Promise<AxiosResponse<ApiResponse> | AxiosResponse<unknown>> => {
  try {
    const response = await instanceAxios.post("/register", user);
    // console.log("Response data:", response.data);
    return response;
  } catch (error: unknown) {
    const axiosError = error as AxiosError;
    if (axiosError.response && axiosError.response.status === 409) {
      // console.error("Conflict error:", axiosError.response.data);
      return axiosError.response;
    } else {
      console.error("Error:", axiosError);
      // Throw the error again if it's not a 409 conflict
      throw axiosError;
    }
  }
};

