import { useSelector } from "react-redux"
import { Navigate } from "react-router";

const IsUser = ({ children }) => {
    
    const user = localStorage.getItem("user")
    console.log(user);
    
    if (!user) {
        return <Navigate to="/login"/>
    }
    return (
        <>
        {children}
        </>
    )
}

export default IsUser