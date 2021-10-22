import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const LogOut = () => {
    const { setUserLogin } = useContext(UserContext);

    function handleLogOut() {
        setUserLogin({
            loggedIn: false,
            user: ''
          })
    }

    return (
        <div>
            <button onClick={handleLogOut}>Log out</button>
        </div>
    );
};

export default LogOut;