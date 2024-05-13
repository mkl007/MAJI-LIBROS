import instanceAxios from "./axiosSetup";
import { AxiosError } from "axios";
import { ApiResponse, User } from "../interfaces/User.interface";

export const signUpRequest = async (user: User): Promise<ApiResponse> => {
  try {
    const response = await instanceAxios.post("/register", user);
    // console.log("Response data:", response);
    const res: ApiResponse = {
      data: response.data.message,
      status: response.status
    }
    return res;
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
