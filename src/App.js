import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";
import Survey from "./components/Survey";
function App() {
  return (
    <Router>
      <div className="main">
        <NavBar />
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path='/survey'>
            <Survey />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

