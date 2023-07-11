import UserContext from "./UserContext";
import {useState} from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
    <div>
        <UserContext.Provider value={{
            loggedIn: loggedIn,
            setLoggedIn: setLoggedIn
        }}>
            <Header />
            <Body />
            <Footer />
        </UserContext.Provider>
    </div>
  );
}

export default App;
