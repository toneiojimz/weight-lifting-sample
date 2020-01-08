import React, { useState }from "react";
import styled from "styled-components";
import axios from "axios"


const MainLogin = styled.div`
height: 89vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const FormLogin = styled.form`
display: flex;
flex-direction: column;
border: 3px solid #17A2B8;
background-color: #ffffff;
padding: 20px 40px 40px 40px;
`

const TitleLogin = styled.h3`
text-align: center;
margin: 10% 0;
`

const ContentLogin = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px 0 40px 0;
`

const TextLogin = styled.p`
display: flex;
flex-direction: column;
`

const InputLogin =styled.input`
padding: 5px 0;
width: 100%;
`

const ButtonLogin = styled.button`
background-color: #17A2B8;
border-radius: 8px;
font-size: 1rem;
width: 200px;
height: 35px;
color: white;
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
      <FormLogin  onSubmit={onSubmit}>
      <TitleLogin>
        Welcome Back!
      </TitleLogin>
      <ContentLogin>
        <TextLogin>Username</TextLogin>
        <InputLogin  type="text" 
                name="username"
                placeholder="  Username"
                value={userCredentials.username} 
                onChange={handleChange} />
        <TextLogin>Password</TextLogin>
        <InputLogin  type="password" 
                name="password" 
                placeholder="  Password"
                value={userCredentials.password} 
                onChange={handleChange} />
        </ContentLogin>
        <ButtonLogin> Log In </ButtonLogin>
        
      </FormLogin>
    </MainLogin>
  );
};

export default Login;