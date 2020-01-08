import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';

import PrivateRoute from "./components/PrivateRoute.js";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import SignUpForm from'./components/SignUpForm';
import WorkoutForm from './components/WorkoutForm';

function App() {
  return (
    <Router>
    <div className="App">
      <div>
        <Link to="/login">Login</Link>
        <br></br>
        <Link to="/">Register</Link>
      </div>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/workoutform" component={WorkoutForm}/>

        <Route path="/login" component={Login} />
        <Route component={SignUpForm} />
      </Switch>
    </div>
  </Router>
);
}
export default App;
