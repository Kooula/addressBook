import { useContext } from "react"
import AuthContext from "../context/AuthContext"
import { Navigate } from "react-router-dom"

const IsAuth = ({children}) => {
    const authContext = useContext(AuthContext)

    if(authContext.validAuth === false) {
        return <Navigate to='/login' replace/>
    }

    return <>{children}</>
};

export default IsAuth