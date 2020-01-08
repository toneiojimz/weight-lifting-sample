import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Body = styled.div`
height: 89vh;
background-color: #fff;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-align: center;
`

const FormLanding = styled.form`
border: 3px solid black;
background-color: #ffffff;
padding: 20px;
`;

const TextLanding = styled.div`
display: flex;
flex-direction: column;
padding: 60px;
`

const ButtonLanding = styled.div`
display: flex;
align-items: center;
justify-content: center;

`

const Landing = () => {
    return (

    <Body className="landing">
        <FormLanding>
        <TextLanding> New Around Here?</TextLanding>
        <ButtonLanding>   
        <button><Link to="/register">Register New User</Link></button>
        </ButtonLanding>
        <TextLanding> Already Lifting? </TextLanding>
        <ButtonLanding>
        <button> <Link to="/login">Login</Link></button>
        </ButtonLanding>
        </FormLanding>
    </Body>
    )}

    export default Landing