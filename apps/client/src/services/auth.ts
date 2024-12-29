import { AxiosResponse } from "axios";
import instanceAxios from "./axiosSetup";
import { RegisterResponse, User } from "../interfaces/User.interface";



export const registerRequest = ( user: User) : Promise<AxiosResponse<RegisterResponse>> => {
  return instanceAxios.post<RegisterResponse>("/register", user);
};

export const Apitesting = async (user: User) => {
 
  const res = await registerRequest(user);
  return res;
};


//// I am not using this page at the moment.