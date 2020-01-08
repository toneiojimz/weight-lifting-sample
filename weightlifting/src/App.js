import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import './App.css';

import PrivateRoute from "./components/PrivateRoute.js";
import Landing from "./components/Landing";
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import SignUpForm from'./components/SignUpForm'

import logo from '../src/images/LiftlogoColored.png'

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`

const NavLogoContainer = styled.div`
display: flex;
justify-content: center;
height: 40vh;
width: 50%;
margin: 10%;
`

const NavLinksContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: flex-end;
width: 50%;
padding: 5%;
`

function App() {
  return (
    
    <Router>
    
    <div className="App">
      <Nav  className ="nav">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <NavLinksContainer>
          <Link style={{ textDecoration: 'none', color: '#17A2B8' }} to="/login">Login </Link> 
          <Link style={{ textDecoration: 'none', color: '#17A2B8' }} to="/register"> Register</Link>
        </NavLinksContainer>
      </Nav>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
  
        <Route path="/login" component={Login} />
        <Route path="/register" component={SignUpForm} />
        <Route exact path="/" component ={Landing} />
      </Switch>
    </div>
  </Router>
);
}
export default App;
