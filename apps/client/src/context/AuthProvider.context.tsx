// import { ReactNode, useState } from "react";
// import { authContext } from "./Auth.Context";
import { ReactNode, createContext, useContext, useState } from "react";

export const authContext = createContext(null);

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({children}: AuthProviderProps) => {
    const [maikel, setMaikel] = useState<string>('');
    setMaikel('Maikel')

    return(
        <authContext.Provider value={{maikel, setMaikel}}>
            {children}
        </authContext.Provider>
    )
}