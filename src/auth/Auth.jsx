import axios from "axios";
import { useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const login = async (userData) => {

        try {
            const logUser = await axios.post(
              `http://localhost:3000/api/login`,
              userData);

              console.log(logUser);
          
        }
        catch (err) {
            console.log(err);
        }
    };

    return (
        <AuthContext.Provider value={{ login }}>
            {children}
        </AuthContext.Provider>
    );
};
    
