import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Switch, Route } from "react-router-dom";
import Reviews from "./components/Reviews";
import SingleReview from "./components/SingleReview";
import { useEffect, useState } from "react";
import { UserContext } from "./contexts/UserContext";
import LogIn from "./components/LogIn";
import Home from "./components/Home";

function App() {
  const [userLogin, setUserLogin] = useState({
    loggedIn: false,
    user: '',
  });

  useEffect(() => {
    const prevLoggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
    console.log(prevLoggedInUser, typeof(prevLoggedInUser));

    if (prevLoggedInUser) {
      setUserLogin({loggedIn: true, user: prevLoggedInUser.username})
    }
  },[])
  console.log(userLogin);


  return (
    <UserContext.Provider value={{userLogin, setUserLogin }}>
    <div className="App">
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/categories/:category">
          <Reviews />
        </Route>
        <Route exact path="/reviews/:review_id">
          <SingleReview />
        </Route>
        <Route exact path="/login">
          <LogIn />
        </Route>
      </Switch>
    </div>
    </UserContext.Provider>
  );
}

export default App;
