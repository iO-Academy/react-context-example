import {useContext} from "react";
import UserContext from "../../UserContext";

const LoginOut = () => {
    const userData = useContext(UserContext)
    const click = () => {
        userData.setLoggedIn(!userData.loggedIn)
    }

    return (
        <button onClick={click}>{ userData.loggedIn ? 'Logout' : 'Login' }</button>
    )
}

export default LoginOut;