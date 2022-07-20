import React, { useState, createContext } from "react";
import axios from "axios";

import{API_HOST} from "../utils/constants"

export const AuthContext = createContext({
    user: undefined,
    login: () => {},
    logout: () => {}
});

export function AuthProvider(props){
    const { children } = props;
    const [auth, setAuth] = useState(undefined)

    const login = (userData) => {
        setAuth(userData);
    };

    const logout = () => {
        setAuth(undefined)
    }

    const valueContext = {
        auth,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    )
}