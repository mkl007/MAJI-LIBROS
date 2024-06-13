import { createContext } from "react";
import { UserContextInterface } from "../interfaces/User.interface";



export const AuthContext = createContext<UserContextInterface | null>(null)