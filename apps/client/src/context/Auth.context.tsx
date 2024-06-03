import { createContext } from "react";

export interface AuthContextInterface {
    isLoggedIn: boolean | null,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean | null>>;
}

export const AuthContext = createContext<AuthContextInterface | null>(null)