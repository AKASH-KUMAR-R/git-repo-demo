import NavBar from './NavBar';
import TodoList from './TodoList';
import useFetch from "./useFetch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import AboutUs from "./AboutUs";
import SideNav from './SideNav';
import TaskDetails from './TaskDetails';
import AddTask from './AddTask';
import UserLogin from './UserLogin';
import { useState } from 'react';

function App() {

  const { data, pending, error } = useFetch('http://localhost:8000/taskDate');
  const [isSignedIn, setSignInStatus] = useState(() => {
    const value = localStorage.getItem('isSignedIn');
    return value === 'true';
  });
  return (
    <Router>
      <div className="App">
        <NavBar isSignedIn={isSignedIn} setSignInStatus={setSignInStatus} />
        <header className="App-header">
          {isSignedIn && <SideNav />}
          <div className='todoList'>
            {console.log(isSignedIn)}
            {!isSignedIn && <p className='try'>Please sign in</p>}
            <Switch>
              <Route exact path='/'>
                <UserLogin isSignedIn={isSignedIn} setSignInStatus={setSignInStatus} />
              </Route>
              <Route exact path="/home">
                <h1>ToDo List</h1>
                {error && <div> {error}</div>}
                {pending && <div>Loading!!!!</div>}
                <div className='todoList-block'>
                  {data && <TodoList taskData={data} />}
                </div>
                <h1>Pending Tasks</h1>
              </Route>

              <Route exact path="/aboutUs">
                <AboutUs />
              </Route>

              <Route path="/addTask">
                <AddTask />
              </Route>

              <Route path="/taskData/:id">
                <h1>TASK DETAILS</h1>
                <TaskDetails />
              </Route>

            </Switch>
          </div>
        </header>
      </div>
    </Router >
  );
}

export default App;

