import React, { useState }from "react";
import axios from "axios"

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
    <div>
      <form  onSubmit={onSubmit}>
        <input  type="text" 
                name="username"
                placeholder="Username"
                value={userCredentials.username} 
                onChange={handleChange} />
        <input  type="password" 
                name="password" 
                placeholder="Password"
                value={userCredentials.password} 
                onChange={handleChange} />
        <button> Log In </button>
      </form>
    </div>
  );
};

export default Login;