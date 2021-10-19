import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Switch, Route, useParams } from "react-router-dom";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/">
          <Reviews />
        </Route>
        <Route exact path="/category/:category">
          <Reviews />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
