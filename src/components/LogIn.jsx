import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { getUsers } from "../utils/api";

const LogIn = () => {
  const { userLogin, setUserLogin } = useContext(UserContext); 
  const [userEntry, setUserEntry] = useState("");
  const [userNotFound, setUserNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true)
    getUsers().then((usersFromApi) => {
      if (usersFromApi.some((user) => user.username === userEntry)) {
        setUserNotFound(false);
        setUserLogin({
          loggedIn: true,
          user: userEntry,
        });
        localStorage.setItem('loggedInUser', JSON.stringify({username: userEntry}))
        setIsLoading(false)
      } else {
        setUserNotFound(true);
      }
    });
  }

  function handleInputChange(e) {
    setUserEntry(e.target.value);
  }

if (isLoading) return <p>Loading...</p>

  return (
    <>
      {userLogin.loggedIn ? (
        <h3>Logged in successfully</h3>
      ) : (
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            name="username-entry"
            onChange={(e) => {
              handleInputChange(e);
            }}
            type="text"
            placeholder="Guest? Use 'jessjelly'."
            required
          />
          <button className='button'>Log in</button>

          {userNotFound && <p>User not found</p>}
        </form>
      )}
    </>
  );
};

export default LogIn;
