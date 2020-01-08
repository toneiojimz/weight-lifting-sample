import React, { useState }from "react";
import styled from "styled-components";
import axios from "axios"


const MainLogin = styled.div`
height: 89vh;
background-color: #fff;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-align: center;
`
const FormLogin = styled.form`
border: 3px solid black;
background-color: #ffffff;
padding: 20px;
`;

const TitleLogin = styled.h3`
text-align: center;
margin: 10%;
`
const TextLogin = styled.div`
display: flex;
flex-direction: column;
padding: 60px;
`

const ButtonLogin = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const Login = props => {
  const[userCredentials, setUserCredentials] = useState({username:'', password:''})

  const handleChange = e => {
    setUserCredentials(
      {
        ...userCredentials,
        [e.target.name]: e.target.value
      }
    )
  }

  const onSubmit = e => {
    e.preventDefault();
    axios
    .post('https://authbackend121.herokuapp.com/api/auth/login', userCredentials)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
      props.history.push('/dashboard')
    })
    .catch(err => console.error(err))
  }

  return (
    <MainLogin className="login-form">
      <TitleLogin>
        Welcome Back!
      </TitleLogin>
      <FormLogin  onSubmit={onSubmit}>
        <TextLogin>Username</TextLogin>
        <input  type="text" 
                name="username"
                placeholder="Username"
                value={userCredentials.username} 
                onChange={handleChange} />
        <TextLogin>Password</TextLogin>
        <input  type="password" 
                name="password" 
                placeholder="Password"
                value={userCredentials.password} 
                onChange={handleChange} />
        <ButtonLogin><button> Log In </button></ButtonLogin>
      </FormLogin>
    </MainLogin>
  );
};

export default Login;