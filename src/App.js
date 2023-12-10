import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";
import Survey from "./components/Survey";
import { useState } from "react";
import DashBoard from "./components/DashBoard";
import PlayList from "./components/PlayList";
function App() {

  const [isSignedIn, setStatus] = useState(false);
  const [id, setId] = useState(null);
  const userDetails = [
    { id: 1, name: "akashkumar@gmail.com", password: "12345", username: "Akash Kumar R" },
    { id: 2, name: "Abhinand@gmail.com", password: "0987", username: "Abhinand N" },
  ];

  const data = ['Pop', 'Rock', 'Hip-Hop', 'Jazz', 'Classical', 'Folk'];


  return (
    <Router>
      <div className="main">
        <NavBar isSignedIn={isSignedIn} setStatus={setStatus} />
        <Switch>
          <Route path="/signin">
            <SignIn setStatus={setStatus} userDetails={userDetails} setId={setId} />
          </Route>
          <Route path='/survey'>
            <Survey data={data} />
          </Route>
          <Route path='/dashboard' userDetails={userDetails} id={id}>
            <DashBoard />
          </Route>
          <Route path='/playlist'>
            <PlayList />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;

