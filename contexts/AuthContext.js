import React, { useState, useContext } from 'react';
import axios from 'axios'

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();

    const registerUser = async (username, password) => {
        const res = await axios.post(`https://first-programming-assignment.herokuapp.com/auth/register`, {
            id: username,
            password: password
        })
        setCurrentUser(res.data)
    }

    const loginUser = async (username, password) => {
        const res = await axios.post(`https://first-programming-assignment.herokuapp.com/auth/login`, {
            id: username,
            password: password
        })
        setCurrentUser(res.data)
    };

    const logoutUser = () => {
        setCurrentUser(null)
    }

    const value = {
        currentUser,
        registerUser,
        loginUser,
        logoutUser
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
