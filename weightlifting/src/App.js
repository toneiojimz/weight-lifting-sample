import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import './App.css';

import PrivateRoute from "./components/PrivateRoute.js";
<<<<<<< HEAD
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import SignUpForm from'./components/SignUpForm';
import WorkoutForm from './components/WorkoutForm';
=======
import Landing from "./components/Landing";
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import SignUpForm from'./components/SignUpForm'
>>>>>>> 6430b0088ae98fa3792fd729fab361ec4d6399c8

import logo from '../src/Liftlogo.png'

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  background-color: white;
  text-decoration: none;
`

function App() {
  return (
    
    <Router>
    
    <div className="App">
      <nav className ="nav">
        <Link to="/">
        <img src={logo} alt="Logo" />
        </Link>
      <p>
        <NavLink to="/login">Login </NavLink> 
        | 
        <NavLink to="/register"> Register</NavLink>
      </p>
      </nav>
      <div>
        
      </div>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
<<<<<<< HEAD
        <PrivateRoute path="/workoutform" component={WorkoutForm}/>

=======
  
>>>>>>> 6430b0088ae98fa3792fd729fab361ec4d6399c8
        <Route path="/login" component={Login} />
        <Route path="/register" component={SignUpForm} />
        <Route exact path="/" component ={Landing} />
      </Switch>
    </div>
  </Router>
);
}
export default App;
