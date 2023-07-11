import {useContext} from "react";
import UserContext from "../../UserContext";

const Body = () => {
    const userData = useContext(UserContext);

    return (
        <div>
            <h2>Body text</h2>
            <h3>{userData.loggedIn ? 'Welcome user!' : 'Please login'}</h3>
        </div>
    )
}

export default Body;