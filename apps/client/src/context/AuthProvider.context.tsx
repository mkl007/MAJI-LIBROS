import { useState } from "react"
import { AuthContext } from "./Auth.context"

type ChildrenProps = {
    children: React.ReactNode
}

export const AuthContextProvider = ({ children }: ChildrenProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null)
    return (
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}
