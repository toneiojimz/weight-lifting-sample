import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';

import PrivateRoute from "./components/PrivateRoute.js";
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import SignUpForm from'./components/SignUpForm'

import logo from '../src/Liftlogo.png'

function App() {
  return (
    
    <Router>
    <div className="App">
      <div>
        <img src={logo} alt="Logo" />
        <Link to="/login">Login</Link>
        <br></br>
        <Link to="/register">Register</Link>
      </div>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        
        <Route path="/login" component={Login} />
        <Route path="/register" component={SignUpForm} />
      </Switch>
    </div>
  </Router>
);
}
export default App;
