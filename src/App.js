import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import EventTasks from './components/EventTasks/EventTasks';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RegistrationPage from './components/RegistrationPage/RegistrationPage';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    {/* <p>Name: {loggedInUser.name}</p> */}
      <Router>
     <Switch>
          <Route path="/home">
            <Home/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            
            <PrivateRoute path="/task/:taskType">
                   <RegistrationPage/>
            </PrivateRoute>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
   </Router>

   </UserContext.Provider>
  );
}

export default App;
