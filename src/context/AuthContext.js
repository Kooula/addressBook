import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
    user: ''
});

const admin = {userName: 'admin', password: 'admin'};

export const AuthProvider = ({children}) => {
    const navigateTo = useNavigate()
    const [validAuth, setValidAuth] =  useState(JSON.parse(localStorage.getItem('validAuth')) ?? false)

    const logIn = (loginData) => {
        if(
            loginData.userName === admin.userName,
            loginData.password === admin.password
        ) {
            localStorage.setItem('validAuth', true);
            setValidAuth(true);
            navigateTo('/home', {replace: true})
        } else {
            alert ('wrong login information')
        }
    };

    const logOut = () => {
        localStorage.setItem('validAuth', false)
        setValidAuth(false)
        navigateTo('/login')
    };

    const value = {
        admin,
        validAuth,
        logIn,
        logOut
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContext

