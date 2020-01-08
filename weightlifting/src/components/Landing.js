import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

import desktopLandingImage from '../images/landing.jpg';
import mobileLandingImage from '../images/landing-mobile.jpg';

const Body = styled.div`
height: 89vh;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: center;
padding: 0 10%;
`

const FormLanding = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 3px solid #17A2B8;
background-color: #ffffff;
padding: 20px 50px 50px 50px;
`

const TextLanding = styled.h3`
display: flex;
flex-direction: column;
padding: 25px;
`

const ButtonLanding = styled.button`
background-color: #17A2B8;
border-radius: 8px;
font-size: 1rem;
width: 200px;
height: 35px;
`

const Landing = () => {
    return (

    <Body className="landing">

        <FormLanding>
        <TextLanding> New Around Here?</TextLanding>
        <ButtonLanding>   
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/register">Register New User</Link>
        </ButtonLanding>
        <TextLanding> Already Lifting? </TextLanding>
        <ButtonLanding>
            <Link style={{ textDecoration: 'none', color: 'white' }}  to="/login">Login</Link>
        </ButtonLanding>
        </FormLanding>
    </Body>
    )}

    export default Landing