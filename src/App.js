import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Switch, Route } from "react-router-dom";
import Reviews from "./components/Reviews";
import SingleReview from "./components/SingleReview";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";

function App() {
  const [userLogin, setUserLogin] = useState({
    loggedIn: true,
    user: "cooljmessy",
  });

  return (
    <UserContext.Provider value={{userLogin, setUserLogin }}>
    <div className="App">
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/">
          <Reviews />
        </Route>
        <Route exact path="/categories/:category">
          <Reviews />
        </Route>
        <Route exact path="/reviews/:review_id">
          <SingleReview />
        </Route>
      </Switch>
    </div>
    </UserContext.Provider>
  );
}

export default App;
